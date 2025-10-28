
#"Statement", "Declaration", "Function"이면 그걸 하나의 서브트리로 취급. 그래서 ast가 100개가 있어도 하나의 ast에 함수가 두개다?
#그러면 서브트리 두개니까 벡터도 2개가 나오는거임. 
#그리고 하나의 서브트리가 있으면 그 서브트리를 전회순회해서 나열한 노드 타입 리스트를 시퀸스라고 하는거임. 
#서브트리 개수가 시퀸스의 개수가 되긴 하겠군. 
#!/usr/bin/env python3
import os
import json
import torch
import torch.nn as nn

# ===== ASTNN 구조 =====
def get_children(node):
    if not isinstance(node, dict):
        return []
    for key in ("children", "body", "elements", "arguments", "declarations"):
        if key in node:
            val = node[key]
            if isinstance(val, list):
                return val
            elif isinstance(val, dict):
                return [val]
    collected = []
    for v in node.values():
        if isinstance(v, dict) and "type" in v:
            collected.append(v)
        elif isinstance(v, list):
            for it in v:
                if isinstance(it, dict) and "type" in it:
                    collected.append(it)
    return collected

def is_statement_node(node):
    if not isinstance(node, dict):
        return False
    t = node.get("type", "")
    return any(x in t for x in ("Statement", "Declaration", "Function"))

def extract_statement_subtrees(ast_root):
    subtrees = []
    if not isinstance(ast_root, dict):
        return subtrees
    top = []
    if "body" in ast_root and isinstance(ast_root["body"], list):
        top = ast_root["body"]
    else:
        top = get_children(ast_root)
    for n in top:
        if is_statement_node(n):
            subtrees.append(n)
        else:
            for c in get_children(n):
                if is_statement_node(c):
                    subtrees.append(c)
    return subtrees

def preorder_types(node, seq):
    if not isinstance(node, dict):
        return
    seq.append(node.get("type", "Unknown"))
    for c in get_children(node):
        preorder_types(c, seq)

# ===== ASTNN Encoder =====
class ASTNNEncoder(nn.Module):
    def __init__(self, vocab_size, emb_dim=128, hidden_dim=128):
        super().__init__()
        self.embedding = nn.Embedding(vocab_size, emb_dim, padding_idx=0)
        self.lstm = nn.LSTM(emb_dim, hidden_dim, batch_first=True, bidirectional=True)
        self.proj = nn.Linear(hidden_dim * 2, hidden_dim)

    def encode_sequence(self, seq):
        if not seq:
            return torch.zeros(self.proj.out_features)
        idx = torch.tensor(seq, dtype=torch.long).unsqueeze(0)
        emb = self.embedding(idx)
        out, _ = self.lstm(emb)
        pooled, _ = torch.max(out, dim=1)
        return self.proj(pooled.squeeze(0))

# ===== 전체 폴더 탐색 및 벡터화 =====
def process_all_asts(root_dir, vectors_file, labels_file):
    all_seqs = []
    all_tokens = set()
    all_data = []  # (파일경로, 라벨, seq 리스트) 저장

    print("[INFO] AST 탐색 시작...")
    for subdir, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".json"):
                path = os.path.join(subdir, file)
                with open(path, "r", encoding="utf-8") as f:
                    ast = json.load(f)

                label = 0 if "normal" in file.lower() else 1  # 예시 라벨 규칙
                subtrees = extract_statement_subtrees(ast)
                sequences = []
                for st in subtrees:
                    seq = []
                    preorder_types(st, seq)
                    sequences.append(seq)
                    all_tokens.update(seq)


                relative_path = os.path.relpath(path, root_dir).replace(os.sep, "_")
                all_data.append((relative_path, label, sequences))
                all_seqs.extend(sequences)

    print(f"[INFO] AST 탐색 완료. {len(all_seqs)}개의 시퀀스 발견.")

    # Step 2: vocab 구성
    tokens = sorted(all_tokens)
    vocab = {"<PAD>": 0, "<UNK>": 1}
    for i, t in enumerate(tokens, start=2):
        vocab[t] = i

    # Step 3: 모델 생성
    model = ASTNNEncoder(vocab_size=len(vocab))
    model.eval()

    # Step 4: 각 seq → 벡터 변환
    print("[INFO] 벡터 변환 시작...")
    vector_map = {}
    label_map = {}
    seq_idx = 0
    with torch.no_grad():
        for file_path, label, sequences in all_data:
            for subtree_idx, seq in enumerate(sequences):
                vec = model.encode_sequence([vocab.get(tok, 1) for tok in seq]).numpy()
                key = f"{file_path}_{subtree_idx}"  # apple_com/script_1.json_0 형태
                vector_map[key] = vec.tolist()
                label_map[key] = label
                seq_idx += 1

    print(f"[INFO] 벡터 변환 완료. 총 {seq_idx}개의 벡터 생성됨.")

    # Step 5: 결과 저장
    with open(vectors_file, "w", encoding="utf-8") as vf:
        json.dump(vector_map, vf, indent=2)
    with open(labels_file, "w", encoding="utf-8") as lf:
        json.dump(label_map, lf, indent=2)

    print(f"[완료] 벡터 저장: {vectors_file}")
    print(f"[완료] 라벨 저장: {labels_file}")

# ===== 실행 =====
if __name__ == "__main__":
    vectors_file = "vectors.json"
    labels_file = "labels.json"
    root_dir = "output_asts"  # 상대경로
    process_all_asts(root_dir, vectors_file, labels_file)
