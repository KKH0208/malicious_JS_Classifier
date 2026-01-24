# tree.py (JavaScript Acorn AST 버전 - is_str 오류 수정)

class ASTNode(object):
    def __init__(self, node):
        self.node = node
        # **수정:** is_str을 먼저 정의합니다.
        self.is_str = isinstance(self.node, str) 
        self.token = self.get_token()
        self.children_nodes = self._find_children()

    def is_leaf(self):
        # 자식 노드 리스트가 비어 있으면 리프 노드로 간주합니다.
        if self.is_str:
            return True
        return len(self.children_nodes) == 0

    def get_token(self, lower=True):
        if self.is_str:
            return self.node
        
        name = self.node.get('type')
        if name:
            return name
        
        # ... (나머지 로직은 그대로) ...
        return 'Unknown'

    def _find_children(self):
        """
        Acorn AST의 표준 속성을 기반으로 자식 노드(dict/list)를 찾아 ASTNode로 래핑하여 반환합니다.
        """
        if self.is_str: # is_str을 사용할 수 있도록 보장
            return []
            
        children = []
        
        # Acorn AST의 일반적인 자식 속성들
        child_keys = ['body', 'declarations', 'expression', 'expressions', 'params', 'argument', 'callee', 'init', 'test', 'update', 'left', 'right', 'property', 'key', 'value']

        for key in child_keys:
            if key in self.node:
                value = self.node[key]
                if isinstance(value, dict) and 'type' in value:
                    children.append(ASTNode(value))
                elif isinstance(value, list):
                    for item in value:
                        if isinstance(item, dict) and 'type' in item:
                            children.append(ASTNode(item))
                            
        return children

    def children(self):
        return self.children_nodes