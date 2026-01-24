import pandas as pd

# 예시 라벨 데이터
data = {
    'id': [1, 2, 3, 4],
    'label': [1, 0, 1, 0]  # 1=양성, 0=음성
}

df = pd.DataFrame(data)
df.to_pickle("data/js_labels.pkl")  # data 폴더 안에 저장
print("js_labels.pkl 생성 완료!")