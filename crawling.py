import requests
from bs4 import BeautifulSoup
import re
from urllib.robotparser import RobotFileParser
from urllib.parse import urljoin, urlparse
import os
import csv
import urllib.parse

def get_allowed_urls(target_url, user_agent='*'):
    """robots.txtをパースし、クロールが許可されたURLのリストを返します。"""
    # ターゲットURLにスキーマが含まれるようにensure_full_url関数を使用
    full_target_url = ensure_full_url(target_url)

    rfp = RobotFileParser()
    rfp.set_url(urljoin(full_target_url, 'robots.txt'))
    
    try:
        rfp.read()
    except Exception as e:
        print(f"robots.txtの読み込み中にエラーが発生しました: {e} (URL: {urljoin(full_target_url, 'robots.txt')})")
        return []

    allowed_urls = []
    if rfp.can_fetch(user_agent, full_target_url):
        allowed_urls.append(full_target_url)
    return allowed_urls

def ensure_full_url(url):
    """
    与えられたURLにスキーマ(http:// または https://)がない場合、https://を付加して返します。
    """
    parsed_url = urlparse(url)
    if not parsed_url.scheme:
        # スキーマがない場合、デフォルトでhttps://を付加します。
        return "https://" + url
    return url

def extract_js_from_url(url):
    """与えられたURLからすべての<script>タグを抽出します。"""
    # URLにスキーマがない場合を考慮し、ensure_full_url関数を使用
    full_url = ensure_full_url(url)
    
    # 最初はHTTPSを試行し、失敗した場合はHTTPで再試行
    try:
        response = requests.get(full_url, timeout=10, headers={'User-Agent': 'MyThesisBot/1.0'})
        response.raise_for_status() # エラーがあれば例外を発生
    except requests.exceptions.SSLError as e:
        print(f"HTTPS接続エラーが発生しました: {e}。HTTPで再試行中... (URL: {full_url})")
        # HTTPSエラー発生時、HTTPで再試行
        if full_url.startswith("https://"):
            full_url = full_url.replace("https://", "http://", 1)
            try:
                response = requests.get(full_url, timeout=10, headers={'User-Agent': 'MyThesisBot/1.0'})
                response.raise_for_status()
            except requests.exceptions.RequestException as e:
                print(f"HTTPでの再試行も失敗しました: URL '{full_url}' の処理中にエラーが発生しました: {e}")
                return []
        else:
            print(f"URL '{full_url}' の処理中にエラーが発生しました: {e}")
            return []
    except requests.exceptions.RequestException as e:
        print(f"URL '{full_url}' の処理中にエラーが発生しました: {e}")
        return []

    soup = BeautifulSoup(response.text, 'html.parser')
    script_tags = soup.find_all('script')

    js_code_list = []
    for script in script_tags:
        # 外部JSファイルのリンクを抽出 (<script src="...">)
        if script.get('src'):
            # 相対パスを絶対パスに変換 (full_urlを使用)
            src_url = urljoin(full_url, script.get('src'))
            # NOTE: 外部JSファイルを直接取得するロジック。リクエスト失敗時は空文字列。
            # この部分は、外部JSファイルのサイズが大きい場合、時間がかかったりエラーになったりする可能性があります。
            # 実際に外部JSファイルをダウンロードしたくない場合は、下の行を使用してください。
            try:
                external_js_response = requests.get(src_url, timeout=5, headers={'User-Agent': 'MyThesisBot/1.0'})
                external_js_response.raise_for_status()
                js_code_list.append(f"// 外部JS: {src_url}\n{external_js_response.text}")
            except requests.exceptions.RequestException as e:
                print(f"外部JSファイル '{src_url}' のダウンロードに失敗しました: {e}")
                js_code_list.append(f"// 外部JS (読み込み失敗): {src_url}")
        # HTML内に直接記述されたJSコードを抽出 (<script>...</script>)
        else:
            js_code_list.append(script.string if script.string else '')

    return js_code_list

def read_urls_from_csv(file_path, num_rows=500):
    """
    CSVファイルからURLリストを読み込みます。
    指定された行数(num_rows)まで、2列目(インデックス1)のデータを読み込みます。
    """
    urls = []
    try:
        with open(file_path, 'r', newline='', encoding='utf-8') as csvfile:
            reader = csv.reader(csvfile)
            next(reader, None) # 最初の行（ヘッダー）をスキップ
            for i, row in enumerate(reader):
                if i >= num_rows:  # 指定された行数まで読み込み（ヘッダーを除く）
                    break
                if len(row) > 1: # 2列目が存在するか確認
                    urls.append(row[1].strip()) # 2列目（インデックス1）のデータを取得し、空白を除去
        print(f"'{file_path}'から{len(urls)}個のURLを読み込みました。")
    except FileNotFoundError:
        print(f"エラー: CSVファイル '{file_path}' が見つかりません。")
    except Exception as e:
        print(f"CSVファイルの読み込み中にエラーが発生しました: {e}")
    return urls

# --- 実行部分 ---
if __name__ == "__main__":
    csv_file_name = "tranco_top500.csv" # CSVファイル名
    output_directory = "benign_js"     # 結果を保存するディレクトリ名

    # 1. 結果保存のベースディレクトリを設定し、作成します。
    #현재 실행중인 파일의 절대경로를 얻고, 우리가 정한output_directory를 붙여서 생성할 디렉토리 경로를 저장 
    script_dir = os.path.dirname(os.path.abspath(__file__))
    base_output_path = os.path.join(script_dir, output_directory)

    if not os.path.exists(base_output_path):
        os.makedirs(base_output_path)
        print(f"ベース結果保存ディレクトリ '{base_output_path}' を作成しました。")
    else:
        print(f"ベース結果保存ディレクトリ '{base_output_path}' はすでに存在します。")

    # 2. CSVファイルから上位サイトのリストを読み込みます。
    csv_file_path = os.path.join(script_dir, csv_file_name)
    top_sites = read_urls_from_csv(csv_file_path, num_rows=500) # 1行目から500行目まで読み込み（ヘッダーを除く）

    if not top_sites:
        print("CSVファイルから読み込むURLがありません。プログラムを終了します。")
        exit()


    user_agent = 'MyThesisBot/1.0 (is0533hs@ed.ritsumei.ac.jp)'

    for site_raw in top_sites:
        # スキーマがないURLのためにensure_full_urlを使用
        processed_site_url = ensure_full_url(site_raw)
        
        # 3. robots.txtを確認し、クロールが許可されたURLのリストを取得
        allowed_urls = get_allowed_urls(processed_site_url, user_agent)

        if not allowed_urls:
            print(f"'{processed_site_url}'について、クロールが許可されたページが見つからないか、robots.txtがありません。このサイトのフォルダーは作成されません。")
            continue # 許可されたURLがない場合、次のサイトへスキップ

        # 4. 許可された各URLに対してJSを抽出
        all_site_scripts = [] # このサイトのすべてのJSスクリプトを格納するリスト
        for url in allowed_urls:
            print(f"  ページクロール中: {url}")
            current_page_scripts = extract_js_from_url(url)
            all_site_scripts.extend(current_page_scripts)
            print(f"  現在のページから合計{len(current_page_scripts)}個の<script>タグが見つかりました。")
        
        # 実際に抽出されたスクリプトがある場合にのみ、ディレクトリを作成してファイルを保存
        if all_site_scripts:
            # ファイルシステムに適したサイトごとのディレクトリ名を作成
            # 例: google.com -> google_com
            parsed_site_for_dirname = urllib.parse.urlparse(processed_site_url)
            site_dirname = parsed_site_for_dirname.netloc.replace('.', '_').replace(':', '_').replace('-', '_')
            
            if not site_dirname:
                site_dirname = re.sub(r'[^a-zA-Z0-9_.-]', '_', site_raw).strip('_')
                if not site_dirname: # これも空の場合、固有の値を生成
                    site_dirname = f"unknown_site_{len(os.listdir(base_output_path))}_{re.sub(r'[^a-zA-Z0-9]', '', site_raw)[:10]}"

            site_output_path = os.path.join(base_output_path, site_dirname)

            # サイトごとのディレクトリを作成（JSが抽出された場合にのみ作成）
            if not os.path.exists(site_output_path):
                os.makedirs(site_output_path)
                print(f"\n--- サイトディレクトリ作成: {site_output_path} (元のURL: {site_raw}) ---")
            else:
                print(f"\n--- サイトディレクトリは既に存在します: {site_output_path} (元のURL: {site_raw}) ---")

            print(f" このサイトから合計{len(all_site_scripts)}個の有効なJSスクリプトが見つかりました。")

            # 5. 抽出された各JSスクリプトを個別のファイルとして保存
            for i, js_content in enumerate(all_site_scripts):
                script_file_name = f"script_{i+1}.js"
                output_file_path = os.path.join(site_output_path, script_file_name)

                try:
                    with open(output_file_path, "w", encoding="utf-8") as f:
                        f.write(f"/* 元のURL: {url} */\n") # このスクリプトがどのURLから取得されたかを示す
                        f.write(js_content if js_content is not None else '')
                        f.write("\n\n")
                    print(f" JSスクリプト #{i+1} を '{output_file_path}' に保存しました。")
                except Exception as e:
                    print(f"ファイル '{output_file_path}' の保存中にエラーが発生しました: {e}")
        else:
            print(f"'{processed_site_url}'から有効なJSスクリプトが抽出されませんでした。このサイトのフォルダーは作成されません。")