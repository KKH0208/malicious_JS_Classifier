import pandas as pd
import os

# 1. 파일 경로 설정
# 예시 경로: 파이프라인의 최종 학습 데이터 파일
file_path = 'data/test/blocks.pkl' 
# 또는 원본 AST 파일: 'data/js_ast_binary.pkl'
pd.set_option('display.max_columns', None)
pd.set_option('display.max_rows', 500)
pd.set_option('display.width', 1000)

# 2. 파일 불러오기
try:
    # pandas의 read_pickle 함수를 사용하여 파일의 내용을 메모리로 불러옵니다.
    # 이 함수는 저장될 때의 객체 형태(주로 DataFrame) 그대로 복원합니다.
    loaded_data = pd.read_pickle(file_path)

    print(f"✅ 파일 로드 성공: 저장된 객체 타입 - {type(loaded_data)}")
    
    # 3. 내용 확인
    # 만약 DataFrame이라면, 처음 5줄을 출력하여 내용을 확인합니다.
    if isinstance(loaded_data, pd.DataFrame):
        print("\n--- 데이터프레임 구조 ---")
        print(loaded_data)
        print(f"\n총 데이터 개수: {len(loaded_data)}")
    # DataFrame이 아닌 다른 객체일 경우 해당 객체에 맞는 방법으로 확인합니다.
    else:
        print("\n--- 객체 내용 ---")
        print(loaded_data)

except FileNotFoundError:
    print(f"❌ 오류: 파일 경로를 찾을 수 없습니다. 경로를 확인하세요: {file_path}")
except Exception as e:
    # 안전하지 않은 소스에서 로드하는 경우 등 예외 처리
    print(f"❌ 오류: 파일을 읽는 중 문제가 발생했습니다: {e}")