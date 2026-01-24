import os
import argparse
import operator
from typing import List, Tuple

# --- 파일 크기 탐색 및 포맷팅 함수 (수정 없음) ---

def find_largest_files(start_dir: str, top_n: int = 10) -> List[Tuple[str, int]]:
    """
    지정된 디렉토리 내에서 파일 크기가 가장 큰 상위 N개의 파일(경로 및 크기)을 찾습니다.
    """
    file_sizes: List[Tuple[str, int]] = []
    
    print(f"[{start_dir}] 디렉토리에서 파일 탐색을 시작합니다...")

    for root, _, files in os.walk(start_dir):
        for file in files:
            file_path = os.path.join(root, file)
            try:
                size = os.path.getsize(file_path)
                file_sizes.append((file_path, size))
            except OSError as e:
                print(f"경고: 파일 처리 오류 발생 - {file_path}: {e}")
                continue

    file_sizes.sort(key=operator.itemgetter(1), reverse=True)
    return file_sizes[:top_n]


def format_size(size_in_bytes: int) -> str:
    """바이트 크기를 사람이 읽기 쉬운 형태로 변환합니다 (KB, MB, GB)."""
    if size_in_bytes == 0:
        return "0 B"
    
    unit_names = ('B', 'KB', 'MB', 'GB', 'TB')
    i = 0
    while size_in_bytes >= 1024 and i < len(unit_names) - 1:
        size_in_bytes /= 1024.0
        i += 1
        
    return f"{size_in_bytes:.2f} {unit_names[i]}"


# --- 파일 삭제 기능 추가 ---

def delete_files(files_to_delete: List[Tuple[str, int]]):
    """
    제공된 목록의 파일을 삭제합니다.

    :param files_to_delete: (파일 경로, 크기) 튜플 리스트
    """
    
    if not files_to_delete:
        print("삭제할 파일 목록이 비어 있습니다.")
        return

    # 1. 사용자에게 확인 요청
    print("\n" + "="*50)
    print(" 🚨 잠재적 삭제 파일 목록 확인 (이 작업은 되돌릴 수 없습니다!)")
    print("="*50)
    
    total_size = sum(size for _, size in files_to_delete)
    
    # 삭제 대상 파일 목록 출력
    print(f"{'순위':<5} | {'크기':<10} | 파일 경로")
    print("-"*50)
    for rank, (path, size_bytes) in enumerate(files_to_delete, 1):
        formatted_size = format_size(size_bytes)
        print(f"{rank:<5} | {formatted_size:<10} | {path}")
    print("-"*50)
    print(f"총 {len(files_to_delete)}개 파일, 총 용량 {format_size(total_size)}를 삭제하시겠습니까? (yes/no): ", end='')
    
    confirmation = input().lower().strip()

    if confirmation == 'yes':
        # 2. 파일 삭제 실행
        deleted_count = 0
        deleted_size = 0
        print("\n=== 파일 삭제 시작 ===")
        
        for path, size in files_to_delete:
            try:
                os.remove(path)
                print(f"  ✅ 삭제 완료: {path} ({format_size(size)})")
                deleted_count += 1
                deleted_size += size
            except OSError as e:
                print(f"  ❌ 삭제 실패: {path} - {e}")
        
        print("\n" + "="*50)
        print(f" 🎊 삭제 작업 완료: {deleted_count}개 파일 삭제됨")
        print(f" 🗑️ 총 확보 용량: {format_size(deleted_size)}")
        print("="*50)
    else:
        print("\n삭제 작업을 취소했습니다.")


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description="특정 디렉토리 내에서 파일 크기가 가장 큰 상위 N개 파일을 찾고, 사용자 동의 후 삭제합니다."
    )
    # 디렉토리 경로 (필수)
    parser.add_argument(
        'directory',
        type=str,
        help='탐색을 시작할 디렉토리 경로 (필수)'
    )
    # 상위 N개 개수 (기본값 10)
    parser.add_argument(
        '-n', '--top_n',
        type=int,
        default=10,
        help='삭제할 상위 파일 개수 (기본값: 10)'
    )
    args = parser.parse_args()

    # 입력 디렉토리 경로 확인
    if not os.path.isdir(args.directory):
        print(f"오류: '{args.directory}'는 유효한 디렉토리 경로가 아닙니다.")
    else:
        # 1. 대용량 파일 목록 찾기
        largest_files = find_largest_files(args.directory, args.top_n)
        
        # 2. 삭제 실행 (확인 절차 포함)
        delete_files(largest_files)