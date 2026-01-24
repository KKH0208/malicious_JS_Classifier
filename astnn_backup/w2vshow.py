import gensim
import os

# 1. 모델 로드 (이전 질문에서 성공했던 코드 사용)
file_path = 'data/train/embedding/node_w2v_128' 
text_output_path = 'data/train/embedding/node_w2v_128.txt' # 텍스트 저장 경로

try:
    w2v_model = gensim.models.Word2Vec.load(file_path).wv
    
    # 2. KeyedVectors 객체를 텍스트 형식으로 저장
    # 이 텍스트 파일이 토큰과 벡터가 숫자 형태로 나열된 '원본'에 가장 가깝습니다.
    w2v_model.save_word2vec_format(text_output_path, binary=False)
    
    print(f"✅ 모델을 텍스트 파일로 변환하여 저장했습니다: {text_output_path}")

    # 3. 텍스트 파일 내용 확인
    print(f"\n--- {text_output_path} 파일 내용 (일부) ---")
    with open(text_output_path, 'r', encoding='utf-8') as f:
        # 처음 5줄만 읽어서 출력
        for i in range(20):
            print(f.readline(), end='') 
        print("...")

except Exception as e:
    print(f"❌ 오류: 모델 처리 중 문제가 발생했습니다: {e}")