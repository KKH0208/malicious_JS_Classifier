1. 터미널에서 conda activate astnn_env를 실행하고 가상환경을 세팅한다. 
2. cd "C:\Users\KIM KIHYUN\Desktop\vscode\졸업논문\astnn\astnn"     python pipeline으로 파이프라인을 실행한다.(참고로 새 데이터셋으로 시작하려면 js_ast_binary.pkl이랑 test/dev/train이런거 다 지우고 해야 함.)
3. 그러면 data/benign_ast_test와 data/malicious_ast_test 디렉터리에 있는 놈들을 가지고 최종적으로 /train/blocks.pkl /test/blocks.pkl dev/blocks.pkl 이 3개를 사용해서 train을 하는거임. 

근데 지금 문제가 파일 용량이 큰 놈들 때문에 학습이 안된다는거임. 걔네들만 빼고 돌리니까 거의 10초만에 학습이 끝나기는 하는데 그런 놈들을 뺴지 않고 돌릴 수 있게 만들어야 함. 
일단, 오늘 원래 train.py코드가 어떤 구조로 훈련을 진행했는지 확인하고, 어느 부분을 고쳤는지도 확인하고 정리하는 부분까지 해보자. 
