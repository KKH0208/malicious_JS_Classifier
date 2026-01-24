# prepare_data.py (JavaScript Acorn AST 버전)
from tree import ASTNode # 수정된 tree.py의 ASTNode 사용

def get_sequences(node, sequence):
    """AST → 토큰 시퀀스로 변환 (DFS 순회)"""
    # node는 ASTNode 객체입니다.
    if not isinstance(node, ASTNode):
        node = ASTNode(node) # dict가 넘어오면 래핑

    sequence.append(node.token)
    for child in node.children():
        get_sequences(child, sequence)


def get_blocks(node, blocks):
    """AST를 블록 단위(Structural Node)로 나누기"""
    # node는 ASTNode 객체입니다.
    if not isinstance(node, ASTNode):
        node = ASTNode(node) # dict가 넘어오면 래핑
        
    # ASTNN에서 Block이란 Structural Node (if, while, for, function definition 등) 또는 Leaf Node를 의미합니다.
    
    # 1. Structural Node (구조 노드): 함수 정의, 제어문
    structural_types = ['Program', 'FunctionDeclaration', 'IfStatement', 'ForStatement', 'WhileStatement', 'SwitchStatement', 'TryStatement', 'CatchClause', 'BlockStatement']
    
    if node.token in structural_types or node.is_leaf():
        blocks.append(node)
        
    # 2. 자식 노드 순회
    for child in node.children():
        get_blocks(child, blocks)
    
    return blocks