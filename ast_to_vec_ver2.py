import torch
import torch.nn as nn
import torch.nn.functional as F
import ast

# ==========================
# 1️⃣ AST 노드 임베딩
# ==========================
class NodeEmbedding(nn.Module):
    def __init__(self, vocab_size, embed_size):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, embed_size)
        
    def forward(self, node_type_id):
        return self.embedding(node_type_id)


# ==========================
# 2️⃣ 트리 인코더 (Recursive)
# ==========================
class TreeEncoder(nn.Module):
    def __init__(self, embed_size, hidden_size):
        super().__init__()
        self.W_c = nn.Linear(hidden_size, hidden_size)
        self.U_x = nn.Linear(embed_size, hidden_size)
        self.tanh = nn.Tanh()

    def forward(self, node, embeddings, hidden_size):
        """ 재귀적으로 AST 노드를 인코딩 """
        # leaf 노드도 hidden_size 차원으로 변환
        if not hasattr(node, 'children') or not node.children:
            return self.U_x(embeddings.get(node.node_type, torch.zeros(1, hidden_size))).squeeze(0)

        # 자식 노드 벡터 평균
        child_vecs = [self.forward(child, embeddings, hidden_size) for child in node.children]
        child_mean = torch.mean(torch.stack(child_vecs), dim=0)

        # 부모 노드 계산
        parent_vec = self.tanh(
            self.W_c(child_mean) + 
            self.U_x(embeddings.get(node.node_type, torch.zeros(1, hidden_size))).squeeze(0)
        )
        return parent_vec


# ==========================
# 3️⃣ 시퀀스 인코더 (문장 간 관계)
# ==========================
class StatementSequenceEncoder(nn.Module):
    def __init__(self, hidden_size):
        super().__init__()
        self.gru = nn.GRU(hidden_size, hidden_size, batch_first=True, bidirectional=True)
    
    def forward(self, stmt_vectors):
        stmt_seq = torch.stack(stmt_vectors).unsqueeze(0)  # (1, N, H)
        out, _ = self.gru(stmt_seq)
        return torch.mean(out, dim=1)  # (1, H)


# ==========================
# 4️⃣ 전체 ASTNN 파이프라인
# ==========================
class ASTNN(nn.Module):
    def __init__(self, vocab_size=100, embed_size=128, hidden_size=128):
        super().__init__()
        self.node_embedder = NodeEmbedding(vocab_size, embed_size)
        self.tree_encoder = TreeEncoder(embed_size, hidden_size)
        self.sequence_encoder = StatementSequenceEncoder(hidden_size)

    def forward(self, forest):
        stmt_vectors = []
        embeddings = {ntype: self.node_embedder(torch.tensor([i]))[0]
                      for i, ntype in enumerate(forest['vocab'])}

        for stmt_tree in forest['trees']:
            stmt_vec = self.tree_encoder(stmt_tree, embeddings, 128)
            stmt_vectors.append(stmt_vec)
        
        code_vec = self.sequence_encoder(stmt_vectors)
        return code_vec.squeeze(0)


# ==========================
# 5️⃣ AST 변환 유틸리티
# ==========================
class SimpleNode:
    def __init__(self, node_type, children=None):
        self.node_type = node_type
        self.children = children or []

def convert_ast(node):
    children = [convert_ast(c) for c in ast.iter_child_nodes(node)]
    return SimpleNode(type(node).__name__, children)

def build_vocab(node, vocab_set):
    vocab_set.add(type(node).__name__)
    for child in ast.iter_child_nodes(node):
        build_vocab(child, vocab_set)
    return vocab_set


# ==========================
# 6️⃣ 예시 입력 (Python AST)
# ==========================
code = """
x = 0
while x < 5:
    x += 1
return x
"""

parsed_ast = ast.parse(code)

# vocab 자동 생성
vocab = list(build_vocab(parsed_ast, set()))

# AST를 문장 단위 트리로 변환
forest = {
    'vocab': vocab,
    'trees': [convert_ast(stmt) for stmt in parsed_ast.body]
}

# ==========================
# 7️⃣ 모델 실행
# ==========================
model = ASTNN(vocab_size=len(forest['vocab']), embed_size=128, hidden_size=128)
code_vector = model(forest)

print("vocab:", forest['vocab'])
print("코드 벡터 크기:", code_vector.shape)
print("코드 벡터 값 예시:", code_vector[:10])


