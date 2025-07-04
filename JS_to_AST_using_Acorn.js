const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

// --- 설정 ---
const INPUT_DIR = './benign_js';        // 입력 JS 파일 폴더
const OUTPUT_DIR = './output_asts';     // AST 저장 폴더

// --- 메인 함수 ---
async function processJsFiles() {
    if (!fs.existsSync(INPUT_DIR)) {
        console.error(`오류: 입력 폴더 '${INPUT_DIR}'가 존재하지 않습니다.`);
        return;
    }
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
        console.log(`출력 폴더 '${OUTPUT_DIR}'를 생성했습니다.`);
    }

    console.log(`'${INPUT_DIR}'에서 JavaScript 파일을 스캔하고 AST로 변환을 시작합니다...`);
    console.log("--------------------------------------------------");

    const filesToProcess = await getJsFilesRecursive(INPUT_DIR);

    // JSON-LD 스킵 수 카운터
    let skippedJsonLdCount = 0;

    // JSON-LD 특성 키워드 목록
    const mustHaveKeywords = ['@context', '@type', '@id'];

    for (const filePath of filesToProcess) {
        const relativePath = path.relative(INPUT_DIR, filePath);
        const outputDirPath = path.join(OUTPUT_DIR, path.dirname(relativePath));
        const outputFileName = path.basename(filePath, '.js') + '.json';
        const outputPath = path.join(outputDirPath, outputFileName);

        console.log(`처리 중: ${filePath}`);

        try {
            const jsCode = fs.readFileSync(filePath, 'utf8');

            // 키워드 모두 포함 여부 체크 (대소문자 구분, 문자열 포함 검사)
            const hasAllKeywords = mustHaveKeywords.every(keyword => jsCode.includes(`"${keyword}"`));

            if (hasAllKeywords) {
                console.log(`  스킵됨: JSON-LD 파일로 판단됨 -> ${filePath}`);
                skippedJsonLdCount++;
                continue;
            }

            // Acorn으로 AST 파싱
            let ast;
            try {
                ast = acorn.parse(jsCode, {
                    ecmaVersion: 'latest',
                    sourceType: 'module',
                    locations: true
                });
                console.log(`  성공: acorn으로 AST 파싱 완료.`);
            } catch (parseError) {
                console.error(`  오류: ${filePath} 파싱 실패: ${parseError.message}`);
                continue;
            }

            // JSON으로 저장
            const jsonAst = JSON.stringify(ast, null, 2);
            fs.mkdirSync(outputDirPath, { recursive: true });
            fs.writeFileSync(outputPath, jsonAst, 'utf8');
            console.log(`  성공: AST 저장 완료 -> ${outputPath}`);
        } catch (error) {
            console.error(`  오류: ${filePath} 처리 중 예외 발생: ${error.message}`);
        }

        console.log("--------------------------------------------------");
    }

    console.log("--- 모든 JavaScript 파일 처리가 완료되었습니다. ---");
    console.log(`총 스킵된 JSON-LD 파일 수: ${skippedJsonLdCount}개`);
}

// --- 재귀적으로 .js 파일 탐색 ---
async function getJsFilesRecursive(dir) {
    let jsFiles = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            jsFiles = jsFiles.concat(await getJsFilesRecursive(fullPath));
        } else if (entry.isFile() && entry.name.toLowerCase().endsWith('.js')) {
            jsFiles.push(fullPath);
        }
    }
    return jsFiles;
}

// --- 실행 시작 ---
processJsFiles();
