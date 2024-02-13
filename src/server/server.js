const express = require('express');
const multer = require('multer');
const unzipper = require('unzipper');
const fs = require('fs');
const app = express();
const port = 5500;

// 配置文件上传中间件
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// 处理文件夹上传请求
app.post('/api/upload-folder', upload.single('file'), (req, res) => {
  // 处理上传的 ZIP 文件，解压缩后处理文件夹
  const zipBuffer = req.file.buffer;

  // 创建一个临时目录用于解压
  const tempDir = './temp';
  fs.mkdirSync(tempDir);

  // 将 ZIP 文件解压到临时目录
  fs.writeFileSync(`${tempDir}/upload.zip`, zipBuffer);
  fs.createReadStream(`${tempDir}/upload.zip`)
    .pipe(unzipper.Extract({ path: tempDir }))
    .on('close', () => {
      // 在此处执行文件夹处理的逻辑，递归处理每个文件
      const folderResult = processFolder(tempDir);

      // 删除临时目录
      //fs.rmdirSync(tempDir, { recursive: true });

      res.json({ result: folderResult });
    });
});

// 处理文件夹的逻辑
function processFolder(folderPath) {
  // 在此处执行实际的文件夹处理逻辑，递归处理每个文件
  // 返回的结果可以是一个字符串、JSON对象等
  return 'Folder is processed';
}

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
