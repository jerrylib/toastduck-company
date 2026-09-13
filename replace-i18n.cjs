const fs = require('fs');
const path = require('path');

// 1. 目标锁定在 src/config
const DICT_PATH = path.join(__dirname, 'i18n-dict.json');
const TARGET_DIR = path.join(__dirname, 'src', 'config'); 
const EXTENSIONS = ['.js']; // 若同时有 jsx/ts/tsx，可补充进数组

// 2. 加载并按长度降序排序词典（长词优先匹配，避免被短词截断）
if (!fs.existsSync(DICT_PATH)) {
  console.error(`错误: 未找到词典文件 ${DICT_PATH}`);
  process.exit(1);
}

const dict = JSON.parse(fs.readFileSync(DICT_PATH, 'utf-8'));
const sortedKeys = Object.keys(dict).sort((a, b) => b.length - a.length);

if (sortedKeys.length === 0) {
  console.warn('词典为空，未执行任何替换。');
  process.exit(0);
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const regexPattern = new RegExp(sortedKeys.map(escapeRegExp).join('|'), 'g');

// 3. 递归遍历指定目录
function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) {
    console.error(`错误: 目标路径不存在 -> ${dir}`);
    return;
  }

  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (EXTENSIONS.includes(path.extname(filePath))) {
      callback(filePath);
    }
  });
}

// 4. 执行替换
let modifiedFilesCount = 0;
let totalReplacedCount = 0;

walkDir(TARGET_DIR, filePath => {
  const content = fs.readFileSync(filePath, 'utf-8');
  let fileReplacedCount = 0;

  const newContent = content.replace(regexPattern, match => {
    fileReplacedCount++;
    totalReplacedCount++;
    return dict[match];
  });

  if (fileReplacedCount > 0) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    console.log(`[已更新] ${path.relative(__dirname, filePath)} (替换 ${fileReplacedCount} 处)`);
    modifiedFilesCount++;
  }
});

console.log(`\n处理完成: 共修改 ${modifiedFilesCount} 个文件，替换 ${totalReplacedCount} 处词条。`);