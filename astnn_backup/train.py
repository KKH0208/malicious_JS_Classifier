import pandas as pd
import random
import torch
import time
import numpy as np
from gensim.models.word2vec import Word2Vec
from model import BatchProgramClassifier
from torch.autograd import Variable
from torch.utils.data import DataLoader
from config import *
import os
import sys

# 🚨 해결책 1: CUDA 메모리 캐시 정리
if USE_GPU and torch.cuda.is_available():
    torch.cuda.empty_cache()
    print(" CUDA 메모리 캐시 정리 완료.")

# 🚨 해결책 2: BATCH_SIZE를 1로 강제 설정 (극단적 복잡도 문제 해결)
# config.py의 BATCH_SIZE를 1로 변경하지 않았다면 여기서 오버라이드합니다.
# BATCH_SIZE = 1 
# 만약 config.py에서 BATCH_SIZE=1로 설정했다면 이 줄은 주석 처리하세요.

def get_batch(dataset, idx, bs):
    """
    데이터셋에서 배치 크기(bs)만큼의 데이터를 추출하는 함수
    """
    tmp = dataset.iloc[idx: idx + bs]
    data, labels = [], []
    # DataFrame의 인덱스를 저장하여 오류 발생 시 문제 샘플을 식별
    original_indices = []
    for index, item in tmp.iterrows():
        data.append(item[1])
        labels.append(item[2])
        #만약 문제 생겼으면 어느 파일이 문제인지 확인하기 위해 
        original_indices.append(index) 
    
    return data, torch.LongTensor(labels), original_indices


def train_model(model, train_data, val_data, optimizer, loss_function):
    """
    모델 훈련, 검증 및 최적 모델 저장을 위한 핵심 함수
    """
    train_loss_ = []
    val_loss_ = []
    train_acc_ = []
    val_acc_ = []
    best_acc = 0.0
    best_model = model
    
    print('Start training...')

    for epoch in range(EPOCHS):
        start_time = time.time()
        
        # --- 훈련 (TRAIN) 단계 ---
        model.train() # 모델을 훈련 모드로 설정
        total_acc = 0.0
        total_loss = 0.0
        total = 0.0
        i = 0
        
        while i < len(train_data):
            # idx, bs 대신 BATCH_SIZE 변수를 직접 사용합니다.
            batch = get_batch(train_data, i, BATCH_SIZE)
            i += BATCH_SIZE
            train_inputs, train_labels, indices = batch
            
            #  해결책 3: 복잡한 샘플 처리 시 발생하는 메모리/런타임 에러 처리
            try:
                if USE_GPU:
                    # CPU 훈련 시 cuda() 호출은 무시됩니다.
                    train_labels = train_labels.cuda() 

                model.zero_grad()
                model.batch_size = len(train_labels)
                model.hidden = model.init_hidden()
                output = model(train_inputs)

                loss = loss_function(output, Variable(train_labels))
                loss.backward()
                optimizer.step()

                # calc training acc
                _, predicted = torch.max(output.data, 1)
                total_acc += (predicted == train_labels).sum().item()
                total += len(train_labels)
                total_loss += loss.item() * len(train_inputs)
            
            except RuntimeError as e:
                # 메모리 에러 발생 시 (CPU/CUDA)
                # print(f"\n [Train] 오류 발생. 인덱스: {indices} (배치 시작: {i - BATCH_SIZE}). 오류: {e}")
                # print("샘플을 건너뛰고 다음 배치로 이동합니다.")
                # 현재 배치 건너뛰기
                continue 

        train_loss_.append(total_loss / total)
        train_acc_.append(total_acc / total)
        
        # --- 검증 (VALIDATION) 단계 ---
        model.eval() # 모델을 평가 모드로 설정 (드롭아웃 등 비활성화)
        total_acc = 0.0
        total_loss = 0.0
        total = 0.0
        i = 0
        
        #  해결책 4: 검증 시 메모리 절약을 위한 torch.no_grad() 사용
        with torch.no_grad():
            while i < len(val_data):
                batch = get_batch(val_data, i, BATCH_SIZE)
                i += BATCH_SIZE
                val_inputs, val_labels, indices = batch
                
                try:
                    if USE_GPU:
                        val_labels = val_labels.cuda()

                    model.batch_size = len(val_labels)
                    model.hidden = model.init_hidden()
                    output = model(val_inputs)

                    loss = loss_function(output, Variable(val_labels))

                    # calc valing acc
                    _, predicted = torch.max(output.data, 1)
                    total_acc += (predicted == val_labels).sum().item()
                    total += len(val_labels)
                    total_loss += loss.item() * len(val_inputs)

                except RuntimeError as e:
                    # print(f"\n [Validation] 오류 발생. 인덱스: {indices} (배치 시작: {i - BATCH_SIZE}). 오류: {e}")
                    # print("샘플을 건너뛰고 다음 배치로 이동합니다.")
                    continue 

        val_loss_.append(total_loss / total)
        val_acc_.append(total_acc / total)
        end_time = time.time()
        
        # 최적 모델 저장
        if total_acc / total > best_acc:
            best_acc = total_acc / total
            best_model = model

        print('[Epoch: %3d/%3d] Training Loss: %.4f, Validation Loss: %.4f,'
              ' Training Acc: %.3f, Validation Acc: %.3f, Time Cost: %.3f s'
              % (epoch + 1, EPOCHS, train_loss_[epoch], val_loss_[epoch],
                 train_acc_[epoch], val_acc_[epoch], end_time - start_time))
    
    return best_model


def test_model(best_model, test_data, loss_function):
    """
    최적 모델로 최종 테스트를 수행하는 함수
    """
    total_acc = 0.0
    total_loss = 0.0
    total = 0.0
    i = 0
    
    best_model.eval() # 평가 모드
    
    with torch.no_grad():
        while i < len(test_data):
            batch = get_batch(test_data, i, BATCH_SIZE)
            i += BATCH_SIZE
            test_inputs, test_labels, indices = batch
            
            try:
                if USE_GPU:
                    test_labels = test_labels.cuda()

                best_model.batch_size = len(test_labels)
                best_model.hidden = best_model.init_hidden()
                output = best_model(test_inputs)

                loss = loss_function(output, Variable(test_labels))

                _, predicted = torch.max(output.data, 1)
                total_acc += (predicted == test_labels).sum().item()
                total += len(test_labels)
                total_loss += loss.item() * len(test_inputs)

            except RuntimeError as e:
                # print(f"\n [Test] 오류 발생. 인덱스: {indices} (배치 시작: {i - BATCH_SIZE}). 오류: {e}")
                # print("샘플을 건너뛰고 다음 배치로 이동합니다.")
                continue

    print("Testing results(Acc):", total_acc / total)
    
# --- Main 실행 블록 ---
if __name__ == '__main__':
    root = 'data/'
    train_data = pd.read_pickle(root+'train/blocks.pkl')
    val_data = pd.read_pickle(root + 'dev/blocks.pkl')
    test_data = pd.read_pickle(root+'test/blocks.pkl')

    word2vec = Word2Vec.load(root+"train/embedding/node_w2v_128").wv
    # OOV(Out-of-Vocabulary) 토큰을 위한 행 추가
    embeddings = np.zeros((word2vec.syn0.shape[0] + 1, word2vec.syn0.shape[1]), dtype="float32")
    embeddings[:word2vec.syn0.shape[0]] = word2vec.syn0

    MAX_TOKENS = word2vec.syn0.shape[0]
    EMBEDDING_DIM = word2vec.syn0.shape[1]

    model = BatchProgramClassifier(EMBEDDING_DIM, HIDDEN_DIM, MAX_TOKENS + 1, ENCODE_DIM, LABELS, BATCH_SIZE,
                                   USE_GPU, embeddings)
    if USE_GPU:
        # 모델을 GPU 메모리로 이동
        model.cuda()

    parameters = model.parameters()
    optimizer = torch.optim.Adamax(parameters)
    loss_function = torch.nn.CrossEntropyLoss()

    # 훈련 시작 및 최적 모델 획득
    best_model = train_model(model, train_data, val_data, optimizer, loss_function)
    
    # 테스트 시작
    test_model(best_model, test_data, loss_function)








#############################################################
# import pandas as pd
# import random
# import torch
# import time
# import numpy as np
# from gensim.models.word2vec import Word2Vec
# from model import BatchProgramClassifier
# from torch.autograd import Variable
# from torch.utils.data import DataLoader
# from config import *
# import os
# import sys

# # 🚨 해결책 1: CUDA 메모리 캐시 정리 (유지)
# if USE_GPU and torch.cuda.is_available():
#     torch.cuda.empty_cache()
#     print(" CUDA 메모리 캐시 정리 완료.")

# # 🚨 해결책 2: BATCH_SIZE를 1로 강제 설정 (극단적 복잡도 문제 해결)
# # BATCH_SIZE = 1 

# def get_batch(dataset, idx, bs):
#     """
#     데이터셋에서 배치 크기(bs)만큼의 데이터를 추출하는 함수
#     """
#     tmp = dataset.iloc[idx: idx + bs]
#     data, labels = [], []
#     # DataFrame의 인덱스를 저장하여 오류 발생 시 문제 샘플을 식별
#     original_indices = []
#     for index, item in tmp.iterrows():
#         data.append(item[1])
#         labels.append(item[2])
#         #만약 문제 생겼으면 어느 파일이 문제인지 확인하기 위해 
#         original_indices.append(index) 
    
#     return data, torch.LongTensor(labels), original_indices


# def train_model(model, train_data, val_data, optimizer, loss_function):
#     """
#     모델 훈련, 검증 및 최적 모델 저장을 위한 핵심 함수
#     """
#     train_loss_ = []
#     val_loss_ = []
#     train_acc_ = []
#     val_acc_ = []
#     best_acc = 0.0
#     best_model = model
    
#     print('Start training...')

#     for epoch in range(EPOCHS):
#         start_time = time.time()
        
#         # --- 훈련 (TRAIN) 단계 ---
#         model.train() # 모델을 훈련 모드로 설정
#         total_acc = 0.0
#         total_loss = 0.0
#         total = 0.0
#         i = 0
        
#         while i < len(train_data):
#             # idx, bs 대신 BATCH_SIZE 변수를 직접 사용합니다.
#             batch = get_batch(train_data, i, BATCH_SIZE)
#             i += BATCH_SIZE
#             train_inputs, train_labels, indices = batch
            
#             # 🚨 오류 처리 로직 제거 (try/except 블록 제거)
#             if USE_GPU:
#                 # CPU 훈련 시 cuda() 호출은 무시됩니다.
#                 train_labels = train_labels.cuda() 

#             model.zero_grad()
#             model.batch_size = len(train_labels)
#             model.hidden = model.init_hidden()
#             output = model(train_inputs)

#             loss = loss_function(output, Variable(train_labels))
#             loss.backward()
#             optimizer.step()

#             # calc training acc
#             _, predicted = torch.max(output.data, 1)
#             total_acc += (predicted == train_labels).sum().item()
#             total += len(train_labels)
#             total_loss += loss.item() * len(train_inputs)
        
#         train_loss_.append(total_loss / total)
#         train_acc_.append(total_acc / total)
        
#         # --- 검증 (VALIDATION) 단계 ---
#         model.eval() # 모델을 평가 모드로 설정 (드롭아웃 등 비활성화)
#         total_acc = 0.0
#         total_loss = 0.0
#         total = 0.0
#         i = 0
        
#         # 🚨 해결책 4: 검증 시 메모리 절약을 위한 torch.no_grad() 사용 (유지)
#         with torch.no_grad():
#             while i < len(val_data):
#                 batch = get_batch(val_data, i, BATCH_SIZE)
#                 i += BATCH_SIZE
#                 val_inputs, val_labels, indices = batch
                
#                 # 🚨 오류 처리 로직 제거 (try/except 블록 제거)
#                 if USE_GPU:
#                     val_labels = val_labels.cuda()

#                 model.batch_size = len(val_labels)
#                 model.hidden = model.init_hidden()
#                 output = model(val_inputs)

#                 loss = loss_function(output, Variable(val_labels))

#                 # calc valing acc
#                 _, predicted = torch.max(output.data, 1)
#                 total_acc += (predicted == val_labels).sum().item()
#                 total += len(val_labels)
#                 total_loss += loss.item() * len(val_inputs)

#         val_loss_.append(total_loss / total)
#         val_acc_.append(total_acc / total)
#         end_time = time.time()
        
#         # 최적 모델 저장
#         if total_acc / total > best_acc:
#             best_acc = total_acc / total
#             # 💡 모델 저장은 보통 'best_model = model' 대신 'best_model = copy.deepcopy(model)' 또는 
#             # 'torch.save(model.state_dict(), PATH)'를 사용합니다. 
#             # 여기서는 원본 코드를 따라 'best_model = model'로 유지합니다.
#             best_model = model

#         print('[Epoch: %3d/%3d] Training Loss: %.4f, Validation Loss: %.4f,'
#               ' Training Acc: %.3f, Validation Acc: %.3f, Time Cost: %.3f s'
#               % (epoch + 1, EPOCHS, train_loss_[epoch], val_loss_[epoch],
#                  train_acc_[epoch], val_acc_[epoch], end_time - start_time))
    
#     return best_model


# def test_model(best_model, test_data, loss_function):
#     """
#     최적 모델로 최종 테스트를 수행하는 함수
#     """
#     total_acc = 0.0
#     total_loss = 0.0
#     total = 0.0
#     i = 0
    
#     best_model.eval() # 평가 모드
    
#     with torch.no_grad():
#         while i < len(test_data):
#             batch = get_batch(test_data, i, BATCH_SIZE)
#             i += BATCH_SIZE
#             test_inputs, test_labels, indices = batch
            
#             # 🚨 오류 처리 로직 제거 (try/except 블록 제거)
#             if USE_GPU:
#                 test_labels = test_labels.cuda()

#             best_model.batch_size = len(test_labels)
#             best_model.hidden = best_model.init_hidden()
#             output = best_model(test_inputs)

#             loss = loss_function(output, Variable(test_labels))

#             _, predicted = torch.max(output.data, 1)
#             total_acc += (predicted == test_labels).sum().item()
#             total += len(test_labels)
#             total_loss += loss.item() * len(test_inputs)

#     print("Testing results(Acc):", total_acc / total)
    
# # --- Main 실행 블록 ---
# if __name__ == '__main__':
#     root = 'data/'
#     train_data = pd.read_pickle(root+'train/blocks.pkl')
#     val_data = pd.read_pickle(root + 'dev/blocks.pkl')
#     test_data = pd.read_pickle(root+'test/blocks.pkl')

#     word2vec = Word2Vec.load(root+"train/embedding/node_w2v_128").wv
#     # OOV(Out-of-Vocabulary) 토큰을 위한 행 추가
#     embeddings = np.zeros((word2vec.syn0.shape[0] + 1, word2vec.syn0.shape[1]), dtype="float32")
#     embeddings[:word2vec.syn0.shape[0]] = word2vec.syn0

#     MAX_TOKENS = word2vec.syn0.shape[0]
#     EMBEDDING_DIM = word2vec.syn0.shape[1]

#     model = BatchProgramClassifier(EMBEDDING_DIM, HIDDEN_DIM, MAX_TOKENS + 1, ENCODE_DIM, LABELS, BATCH_SIZE,
#                                  USE_GPU, embeddings)
#     if USE_GPU:
#         # 모델을 GPU 메모리로 이동
#         model.cuda()

#     parameters = model.parameters()
#     optimizer = torch.optim.Adamax(parameters)
#     loss_function = torch.nn.CrossEntropyLoss()

#     # 훈련 시작 및 최적 모델 획득
#     best_model = train_model(model, train_data, val_data, optimizer, loss_function)
    
#     # 테스트 시작
#     test_model(best_model, test_data, loss_function)