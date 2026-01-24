# # pipeline.py (JavaScript 이진 분류 버전)
# import pandas as pd
# import os
# import glob
# import json
# from tqdm.auto import tqdm
# from config import *
# # prepare_data 및 tree 모듈 임포트는 그대로 유지
# from prepare_data import get_sequences, get_blocks
# from tree import ASTNode 
# tqdm.pandas()

# import sys # sys 모듈 임포트 추가
# sys.setrecursionlimit(4000)

# class Pipeline:
#     # ... (생략: __init__ 메소드는 변경 없음) ...
#     def __init__(self, ratio, root: str, benign_ast_dir: str, malicious_ast_dir: str):
#         self.ratio = ratio
#         self.root = root
#         self.benign_ast_dir = benign_ast_dir 
#         self.malicious_ast_dir = malicious_ast_dir
#         self.sources = None
#         self.train_file_path = None
#         self.dev_file_path = None
#         self.test_file_path = None
#         self.size = None
#         self.max_tokens = 0 

#     # JSON AST 파일을 읽어와 데이터프레임으로 변환 (양성/악성)
#     def get_js_asts(self, output_file: str = 'js_ast_binary.pkl') -> pd.DataFrame:
#         print("\n--- 1. AST 파일 로드 시작 ---")
#         output_file_path = os.path.join(self.root, output_file)
        
#         if os.path.exists(output_file_path):
#             print(f" 기존 파일 로드: {output_file}")
#             source = pd.read_pickle(output_file_path)
#             self.sources = source
#             return source

#         data = []
        
#         # --- 1. 양성(Benign) AST 로드 (Label 0) ---
#         print(f"로드 중: 양성 AST ('{self.benign_ast_dir}', Label 0)...")
#         benign_json_files = list(glob.glob(os.path.join(self.benign_ast_dir, '**/*.json'), recursive=True))
        
#         for i, file_path in enumerate(tqdm(benign_json_files, desc="Loading Benign ASTs")):
#             # ... (로직 생략: 데이터 로드 및 data 리스트에 추가) ...
#             try:
#                 with open(file_path, 'r', encoding='utf-8') as f:
#                     ast_data = json.load(f)
#                 label = 0 
#                 relative_path = os.path.relpath(file_path, self.benign_ast_dir) 
#                 data.append({'id': 'benign_' + relative_path, 'code': ast_data, 'label': label})
#             except Exception as e:
#                 print(f"오류: {file_path} 처리 중 예외 발생: {e}")
#                 continue


#         # --- 2. 악성(Malicious) AST 로드 (Label 1) ---
#         print(f"로드 중: 악성 AST ('{self.malicious_ast_dir}', Label 1)...")
#         malicious_json_files = list(glob.glob(os.path.join(self.malicious_ast_dir, '**/*.json'), recursive=True))
        
#         for i, file_path in enumerate(tqdm(malicious_json_files, desc="Loading Malicious ASTs")):
#             # ... (로직 생략: 데이터 로드 및 data 리스트에 추가) ...
#             try:
#                 with open(file_path, 'r', encoding='utf-8') as f:
#                     ast_data = json.load(f)
#                 label = 1
#                 relative_path = os.path.relpath(file_path, self.malicious_ast_dir) 
#                 data.append({'id': 'malicious_' + relative_path, 'code': ast_data, 'label': label})
#             except Exception as e:
#                 print(f"오류: {file_path} 처리 중 예외 발생: {e}")
#                 continue

#         source = pd.DataFrame(data)
#         source.to_pickle(output_file_path)
#         self.sources = source
#         print(f" AST 파일 로드 및 저장 완료: 총 {len(source)}개 데이터.")
#         return source

#     # split data for training, developing and testing
#     def split_data(self):
#         print("\n--- 2. 데이터셋 분할 시작 ---")
#         data = self.sources
#         data_num = len(data)
#         if data_num == 0:
#             raise ValueError("소스 데이터가 비어 있습니다. AST 파일 로드를 확인하세요.")
            
#         ratios = [int(r) for r in self.ratio.split(':')]
#         total_ratio = sum(ratios)
#         if total_ratio == 0:
#             raise ValueError("RATIO 설정이 잘못되었습니다. (예: '3:1:1')")
            
#         train_split = int(ratios[0]/total_ratio * data_num)
#         val_split = train_split + int(ratios[1]/total_ratio * data_num)
        
#         data = data.sample(frac=1, random_state=666) # 셔플
#         train = data.iloc[:train_split]
#         dev = data.iloc[train_split:val_split]
#         test = data.iloc[val_split:]

#         # ... (생략: 폴더 생성 및 pkl 저장 로직) ...
#         def check_or_create(path):
#             if not os.path.exists(path):
#                 os.makedirs(path, exist_ok=True)

#         train_path = self.root+'train/'
#         check_or_create(train_path)
#         self.train_file_path = train_path+'train_.pkl'
#         train.to_pickle(self.train_file_path)

#         dev_path = self.root+'dev/'
#         check_or_create(dev_path)
#         self.dev_file_path = dev_path+'dev_.pkl'
#         dev.to_pickle(self.dev_file_path)

#         test_path = self.root+'test/'
#         check_or_create(test_path)
#         self.test_file_path = test_path+'test_.pkl'
#         test.to_pickle(self.test_file_path)
        
#         print(f" 데이터 분할 완료: Train {len(train)}, Dev {len(dev)}, Test {len(test)}")

#     # construct dictionary and train word embedding
#     def dictionary_and_embedding(self, input_file, size):
#         print("\n--- 3. Word Embedding 학습 시작 ---")
#         self.size = size
#         if not input_file:
#             input_file = self.train_file_path
        
#         trees = pd.read_pickle(input_file)
        
#         if not os.path.exists(self.root+'train/embedding'):
#             os.makedirs(self.root+'train/embedding', exist_ok=True)
            
#         # from prepare_data import get_sequences # 상단에서 import 됨

#         def trans_to_sequences(ast_dict):
#             sequence = []
#             root_node = ASTNode(ast_dict)
#             get_sequences(root_node, sequence) 
#             return sequence
        
#         print(" AST를 토큰 시퀀스로 변환 중...")
#         # progress_apply를 사용하여 변환 진행 상황 표시
#         corpus = trees['code'].progress_apply(trans_to_sequences)
        
#         str_corpus = [' '.join(c) for c in corpus] 
#         trees['token_sequence'] = pd.Series(str_corpus)
#         trees.to_csv(self.root+'train/programs_ns.tsv', sep='\t', index=False)
        
#         print(f" Word2Vec 학습 시작 (Embedding Size: {size})...")
#         from gensim.models.word2vec import Word2Vec
#         w2v = Word2Vec(corpus, size=size, workers=16, sg=1, min_count=MIN_COUNT, max_final_vocab=VOCAB_SIZE)
#         w2v.save(self.root+'train/embedding/node_w2v_' + str(size))
        
#         self.max_tokens = w2v.wv.syn0.shape[0] + 1 
#         print(f" Word Embedding 학습 완료. 총 토큰 수: {self.max_tokens - 1}")


#     # generate block sequences with index representations
#     def generate_block_seqs(self, data_path, part):
#         print(f"\n--- 4. 블록 시퀀스 생성 시작: {part} 데이터 ---")
#         # from prepare_data import get_blocks as func # 상단에서 import 됨
#         from gensim.models.word2vec import Word2Vec

#         word2vec = Word2Vec.load(self.root+'train/embedding/node_w2v_' + str(self.size)).wv
#         vocab = word2vec.vocab
#         max_token = word2vec.syn0.shape[0] 
        
#         # ... (생략: tree_node_to_index 정의) ...
#         def tree_node_to_index(node):
#             token = node.token
#             result = [vocab[token].index if token in vocab else max_token]
#             children = node.children() 
#             for child in children:
#                 result.append(tree_node_to_index(child))
#             return result
        
#         def trans2seq(r):
#             blocks = []
#             root_node = ASTNode(r)
#             get_blocks(root_node, blocks) 
            
#             tree_indices = []
#             for b in blocks:
#                 btree = tree_node_to_index(b)
#                 tree_indices.append(btree)
#             return tree_indices
            
#         trees = pd.read_pickle(data_path)
#         print(f" {part} 데이터에 블록 시퀀스 변환 적용 중...")
#         # progress_apply를 사용하여 변환 진행 상황 표시
#         trees['code'] = trees['code'].progress_apply(trans2seq)
#         trees.to_pickle(self.root+part+'/blocks.pkl')
#         print(f" '{part}' 블록 시퀀스 생성 및 저장 완료: {self.root+part+'/blocks.pkl'}")


#     # run for processing data to train
#     def run(self):
#         print("==============================================")
#         print(" ASTNN JavaScript 이진 분류 파이프라인 시작 ")
#         print("==============================================")
        
#         self.get_js_asts(output_file='js_ast_binary.pkl') 
        
#         self.split_data()
        
#         self.dictionary_and_embedding(None, EMBEDDING_SIZE)
        
#         self.generate_block_seqs(self.train_file_path, 'train')
#         self.generate_block_seqs(self.dev_file_path, 'dev')
#         self.generate_block_seqs(self.test_file_path, 'test')
        
#         print("\n==============================================")
#         print(" 파이프라인 모든 데이터 준비 완료! (train.py 실행 가능) ")
#         print("==============================================")
# ROOT_DIR = 'data/'
# BENIGN_DIR = os.path.join(ROOT_DIR, 'benign_ast_test')
# MALICIOUS_DIR = os.path.join(ROOT_DIR, 'malicious_ast_test')

# if __name__ == '__main__':
#     try:
#         ppl = Pipeline(RATIO, ROOT_DIR, BENIGN_DIR, MALICIOUS_DIR)
#         ppl.run()
#     except Exception as e:
#         print(f"\n 파이프라인 실행 중 치명적인 오류 발생: {e}")



#이게 원본이고 
###########################################################################









# pipeline.py (JavaScript 이진 분류 버전)
import pandas as pd
import os
import glob
import json
from tqdm.auto import tqdm
from config import *
# prepare_data 및 tree 모듈 임포트는 그대로 유지
from prepare_data import get_sequences, get_blocks
from tree import ASTNode 
import sys # sys 모듈 임포트 추가
tqdm.pandas()

# === [수정된 부분 1] 재귀 한계 설정 ===
# AST 구조가 깊어서 발생하는 에러를 해결하기 위해 재귀 한계를 4000으로 증가
sys.setrecursionlimit(4000)
print(f"Python 재귀 한계 설정: {sys.getrecursionlimit()}")

class Pipeline:
    # ... (생략: __init__ 메소드는 변경 없음) ...
    def __init__(self, ratio, root: str, benign_ast_dir: str, malicious_ast_dir: str):
        self.ratio = ratio
        self.root = root
        self.benign_ast_dir = benign_ast_dir 
        self.malicious_ast_dir = malicious_ast_dir
        self.sources = None
        self.train_file_path = None
        self.dev_file_path = None
        self.test_file_path = None
        self.size = None
        self.max_tokens = 0 

    # JSON AST 파일을 읽어와 데이터프레임으로 변환 (양성/악성)
    def get_js_asts(self, output_file: str = 'js_ast_binary.pkl') -> pd.DataFrame:
        print("\n--- 1. AST 파일 로드 시작 ---")
        output_file_path = os.path.join(self.root, output_file)
        
        if os.path.exists(output_file_path):
            # ... (기존 파일 로드 로직은 변경 없음) ...
            print(f" 기존 파일 로드: {output_file}")
            try:
                source = pd.read_pickle(output_file_path)
                self.sources = source
                return source
            except Exception as e:
                 print(f"오류: 기존 pickle 파일 로드 실패. 다시 생성합니다. 오류: {e}")
        
        data = []
        
        # --- 1. 양성(Benign) AST 로드 (Label 0) ---
        print(f"로드 중: 양성 AST ('{self.benign_ast_dir}', Label 0)...")
        benign_json_files = list(glob.glob(os.path.join(self.benign_ast_dir, '**/*.json'), recursive=True))
        
        for i, file_path in enumerate(tqdm(benign_json_files, desc="Loading Benign ASTs")):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    ast_data = json.load(f)
                label = 0 
                relative_path = os.path.relpath(file_path, self.benign_ast_dir) 
                data.append({'id': 'benign_' + relative_path, 'code': ast_data, 'label': label})
            except Exception as e:
                print(f"오류: {file_path} 처리 중 예외 발생 (건너뜀): {e}")
                continue


        # --- 2. 악성(Malicious) AST 로드 (Label 1) ---
        print(f"로드 중: 악성 AST ('{self.malicious_ast_dir}', Label 1)...")
        malicious_json_files = list(glob.glob(os.path.join(self.malicious_ast_dir, '**/*.json'), recursive=True))
        
        for i, file_path in enumerate(tqdm(malicious_json_files, desc="Loading Malicious ASTs")):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    ast_data = json.load(f)
                label = 1
                relative_path = os.path.relpath(file_path, self.malicious_ast_dir) 
                data.append({'id': 'malicious_' + relative_path, 'code': ast_data, 'label': label})
            except Exception as e:
                print(f"오류: {file_path} 처리 중 예외 발생 (건너뜀): {e}")
                continue

        source = pd.DataFrame(data)
        
        # === [수정된 부분 2] to_pickle 오류 처리 추가 ===
        try:
            source.to_pickle(output_file_path)
            self.sources = source
            print(f" AST 파일 로드 및 저장 완료: 총 {len(source)}개 데이터.")
        except RecursionError as re:
            # RecursionError(재귀 깊이 초과)가 다시 발생하면 경고를 출력하고 to_pickle 저장은 건너뜀
            print(f" 경고: DataFrame 저장 중 재귀 오류 발생. 파일 저장 실패. (오류: {re})")
            print(" 경고: 파이프라인은 계속 진행되지만, 다음 실행 시 pickle 파일이 아닌 JSON 파일에서 다시 로드됩니다.")
            self.sources = source
        except Exception as e:
            # 기타 저장 오류 처리
            print(f" 경고: DataFrame 저장 중 예상치 못한 오류 발생. 파일 저장 실패. (오류: {e})")
            self.sources = source
            
        return source

    # ... (split_data, dictionary_and_embedding, generate_block_seqs, run 메서드는 변경 없음) ...
    # split data for training, developing and testing
    def split_data(self):
        print("\n--- 2. 데이터셋 분할 시작 ---")
        data = self.sources
        data_num = len(data)
        if data_num == 0:
            raise ValueError("소스 데이터가 비어 있습니다. AST 파일 로드를 확인하세요.")
            
        ratios = [int(r) for r in self.ratio.split(':')]
        total_ratio = sum(ratios)
        if total_ratio == 0:
            raise ValueError("RATIO 설정이 잘못되었습니다. (예: '3:1:1')")
            
        train_split = int(ratios[0]/total_ratio * data_num)
        val_split = train_split + int(ratios[1]/total_ratio * data_num)
        
        data = data.sample(frac=1, random_state=666) # 셔플
        train = data.iloc[:train_split]
        dev = data.iloc[train_split:val_split]
        test = data.iloc[val_split:]

        # ... (생략: 폴더 생성 및 pkl 저장 로직) ...
        def check_or_create(path):
            if not os.path.exists(path):
                os.makedirs(path, exist_ok=True)

        train_path = self.root+'train/'
        check_or_create(train_path)
        self.train_file_path = train_path+'train_.pkl'
        train.to_pickle(self.train_file_path)

        dev_path = self.root+'dev/'
        check_or_create(dev_path)
        self.dev_file_path = dev_path+'dev_.pkl'
        dev.to_pickle(self.dev_file_path)

        test_path = self.root+'test/'
        check_or_create(test_path)
        self.test_file_path = test_path+'test_.pkl'
        test.to_pickle(self.test_file_path)
        
        print(f" 데이터 분할 완료: Train {len(train)}, Dev {len(dev)}, Test {len(test)}")

    # construct dictionary and train word embedding
    def dictionary_and_embedding(self, input_file, size):
        print("\n--- 3. Word Embedding 학습 시작 ---")
        self.size = size
        if not input_file:
            input_file = self.train_file_path
        
        trees = pd.read_pickle(input_file)
        
        if not os.path.exists(self.root+'train/embedding'):
            os.makedirs(self.root+'train/embedding', exist_ok=True)
            
        # from prepare_data import get_sequences # 상단에서 import 됨

        def trans_to_sequences(ast_dict):
            sequence = []
            try: # trans_to_sequences에도 재귀 오류 방지 try-except 추가 
                root_node = ASTNode(ast_dict)
                get_sequences(root_node, sequence) 
            except RecursionError as re:
                # AST 파싱/순회 중 재귀 오류 발생 시 빈 시퀀스 반환
                print(f"\n [오류] AST 순회 중 재귀 오류 발생: {re} (해당 AST는 건너뜀)")
                return [] 
            return sequence
        ##############################
        # print(" AST를 토큰 시퀀스로 변환 중...")
        # # progress_apply를 사용하여 변환 진행 상황 표시
        # corpus = trees['code'].progress_apply(trans_to_sequences)
        
        # # 빈 시퀀스는 Word2Vec 학습에 방해되므로 제거
        # corpus = corpus[corpus.apply(len) > 0]
        
        # str_corpus = [' '.join(c) for c in corpus] 
        # trees = trees.iloc[corpus.index] # 유효한 데이터만 남김
        # trees['token_sequence'] = pd.Series(str_corpus, index=trees.index)
        # trees.to_csv(self.root+'train/programs_ns.tsv', sep='\t', index=False)
        #################################
        print(" AST를 토큰 시퀀스로 변환 중...")
        corpus = trees['code'].progress_apply(trans_to_sequences)
        
        # 빈 시퀀스는 Word2Vec 학습에 방해되므로 제거
        corpus = corpus[corpus.apply(len) > 0]
        
        str_corpus = [' '.join(c) for c in corpus] 
        
        # === [수정된 부분] .iloc 대신 .loc 사용 ===
        # .loc를 사용하여 레이블 기반 인덱싱
        trees = trees.loc[corpus.index] 
        trees['token_sequence'] = pd.Series(str_corpus, index=trees.index)
        trees.to_csv(self.root+'train/programs_ns.tsv', sep='\t', index=False)
            
        print(f" Word2Vec 학습 시작 (Embedding Size: {size})...")
        from gensim.models.word2vec import Word2Vec
        w2v = Word2Vec(corpus, size=size, workers=16, sg=1, min_count=MIN_COUNT, max_final_vocab=VOCAB_SIZE)
        w2v.save(self.root+'train/embedding/node_w2v_' + str(size))
        
        self.max_tokens = w2v.wv.syn0.shape[0] + 1 
        print(f" Word Embedding 학습 완료. 총 토큰 수: {self.max_tokens - 1}")


    # generate block sequences with index representations
    def generate_block_seqs(self, data_path, part):
        print(f"\n--- 4. 블록 시퀀스 생성 시작: {part} 데이터 ---")
        # from prepare_data import get_blocks as func # 상단에서 import 됨
        from gensim.models.word2vec import Word2Vec

        word2vec = Word2Vec.load(self.root+'train/embedding/node_w2v_' + str(self.size)).wv
        vocab = word2vec.vocab
        max_token = word2vec.syn0.shape[0] 
        
        # ... (생략: tree_node_to_index 정의) ...
        def tree_node_to_index(node):
            token = node.token
            result = [vocab[token].index if token in vocab else max_token]
            children = node.children() 
            for child in children:
                result.append(tree_node_to_index(child))
            return result
        
        def trans2seq(r):
            blocks = []
            tree_indices = []
            try: # trans2seq에도 재귀 오류 방지 try-except 추가 
                root_node = ASTNode(r)
                get_blocks(root_node, blocks) 
                
                for b in blocks:
                    btree = tree_node_to_index(b)
                    tree_indices.append(btree)
            except RecursionError as re:
                # AST 파싱/순회 중 재귀 오류 발생 시 빈 리스트 반환
                print(f"\n [오류] 블록 시퀀스 생성 중 재귀 오류 발생: {re} (해당 AST는 건너뜀)")
                return []
            return tree_indices
            
        trees = pd.read_pickle(data_path)
        print(f" {part} 데이터에 블록 시퀀스 변환 적용 중...")
        # progress_apply를 사용하여 변환 진행 상황 표시
        trees['code'] = trees['code'].progress_apply(trans2seq)
        
        # 빈 블록 시퀀스 제거 (재귀 오류로 인해 건너뛴 데이터)
        trees = trees[trees['code'].apply(len) > 0]
        
        trees.to_pickle(self.root+part+'/blocks.pkl')
        print(f" '{part}' 블록 시퀀스 생성 및 저장 완료: {self.root+part+'/blocks.pkl'}")


    # run for processing data to train
    def run(self):
        print("==============================================")
        print(" ASTNN JavaScript 이진 분류 파이프라인 시작 ")
        print("==============================================")
        
        self.get_js_asts(output_file='js_ast_binary.pkl') 
        
        self.split_data()
        
        self.dictionary_and_embedding(None, EMBEDDING_SIZE)
        
        self.generate_block_seqs(self.train_file_path, 'train')
        self.generate_block_seqs(self.dev_file_path, 'dev')
        self.generate_block_seqs(self.test_file_path, 'test')
        
        print("\n==============================================")
        print(" 파이프라인 모든 데이터 준비 완료! (train.py 실행 가능) ")
        print("==============================================")

ROOT_DIR = 'data/'
BENIGN_DIR = os.path.join(ROOT_DIR, 'benign_ast_test')
MALICIOUS_DIR = os.path.join(ROOT_DIR, 'malicious_ast_test')

if __name__ == '__main__':
    try:
        ppl = Pipeline(RATIO, ROOT_DIR, BENIGN_DIR, MALICIOUS_DIR)
        ppl.run()
    except Exception as e:
        print(f"\n 파이프라인 실행 중 치명적인 오류 발생: {e}")

#이게 재귀의 최대 깊이를 1000에서 4000으로 늘려서 에러 안뜨게한 버전이고 

#############################################################################################################################


