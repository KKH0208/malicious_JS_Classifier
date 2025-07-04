//파이썬 import가 js에선 require이네
const fs = require('fs'); // 파일 시스템 모듈 (파일 읽기/쓰기용)
const path = require('path'); // 경로 처리 모듈
const esprima = require('esprima'); // esprima 파서 라이브러리

// --- 설정 ---
const INPUT_DIR = './benign_js'; // 파싱할 .js 파일들이 있는 폴더 (현재 스크립트 기준)
const OUTPUT_DIR = './output_asts'; // AST 결과를 저장할 .json 파일 폴더

// --- 메인 함수 ---
//async function는 안에서 함수1~3 실행할때 원래라면 함수 1이 오래 걸리면 함수2,3이 먼저 처리되는데 
//await 함수1()을 써서 순서를 보장하게 해줌 
async function processJsFiles() {
    // 입력 및 출력 디렉토리가 없으면 생성합니다.
    if (!fs.existsSync(INPUT_DIR)) {
        console.error(`오류: 입력 폴더 '${INPUT_DIR}'가 존재하지 않습니다. JavaScript 파일을 이 폴더에 넣어주세요.`);
        return;
    }
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        console.log(`출력 폴더 '${OUTPUT_DIR}'를 생성했습니다.`);
    }

    console.log(`'${INPUT_DIR}'에서 JavaScript 파일을 스캔하고 AST로 변환을 시작합니다...`);
    console.log("--------------------------------------------------");

    // 입력 디렉토리 및 모든 하위 디렉토리를 탐색(다 모으고 나서 다음 행동 해야하니까 await썼네)
    const filesToProcess = await getJsFilesRecursive(INPUT_DIR);

    for (const filePath of filesToProcess) {
        const relativePath = path.relative(INPUT_DIR, filePath); // 입력 폴더 기준 상대 경로
        const outputDirPath = path.join(OUTPUT_DIR, path.dirname(relativePath)); // AST를 저장할 출력 폴더 경로
        const outputFileName = path.basename(filePath, '.js') + '.json'; // .js 대신 .json 확장자
        const outputPath = path.join(outputDirPath, outputFileName); // 최종 출력 파일 경로

        console.log(`처리 중: ${filePath}`);

        try {
            // 1. JavaScript 파일 내용 읽기
            const jsCode = fs.readFileSync(filePath, 'utf8');

            // 2. esprima를 사용하여 AST 파싱
            // { loc: true, range: true } 옵션을 사용하여 위치 정보도 포함
            let ast;
            try {
                ast = esprima.parseScript(jsCode, { loc: true, range: true, ecmaVersion: 2021 }); // 일반 스크립트 모드
                console.log(`  성공: 스크립트 모드로 파싱 완료.`);
            } catch (scriptError) {
                console.warn(`  경고: 스크립트 모드 파싱 실패 (${scriptError.message}). 모듈 모드로 재시도합니다.`);
                try {
                    ast = esprima.parseModule(jsCode, { loc: true, range: true, ecmaVersion: 2021 }); // ES 모듈 모드
                    console.log(`  성공: 모듈 모드로 파싱 완료.`);
                } catch (moduleError) {
                    console.error(`  오류: ${filePath} 파싱 실패 (스크립트/모듈 모드 모두): ${moduleError.message}`);
                    continue; // 다음 파일로 넘어감
                }
            }

            // 3. AST를 JSON 문자열로 변환 (들여쓰기 4칸, 예쁘게)
            // JSON.stringify에 replacer 함수를 사용하여 잠재적인 순환 참조를 방지할 수 있지만,
            // esprima AST는 일반적으로 순환 참조를 생성하지 않으므로, 여기서는 간단하게 null을 사용합니다.
            // 만약 나중에 문제가 발생하면 (Python에서처럼) replacer 함수를 추가할 수 있습니다.
            const jsonAst = JSON.stringify(ast, null, 2);

            // 4. AST JSON을 파일에 저장
            fs.mkdirSync(outputDirPath, { recursive: true }); // 출력 폴더가 없으면 생성
            fs.writeFileSync(outputPath, jsonAst, 'utf8');
            console.log(`  성공: AST 저장 완료 -> ${outputPath}`);

        } catch (error) {
            console.error(`  오류: ${filePath} 처리 중 예상치 못한 오류 발생: ${error.message}`);
            // 전체 스택 트레이스도 보고 싶다면: console.error(error.stack);
        }
        console.log("--------------------------------------------------");
    }
    console.log("--- 모든 JavaScript 파일 처리가 완료되었습니다. ---");
}

// 재귀적으로 .js 파일을 찾아 목록을 반환하는 헬퍼 함수
async function getJsFilesRecursive(dir) {
    let jsFiles = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            jsFiles = jsFiles.concat(await getJsFilesRecursive(fullPath)); // 재귀 호출
        } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.js')) {
            jsFiles.push(fullPath);
        }
    }
    return jsFiles;
}

// 함수 실행 시작
processJsFiles();