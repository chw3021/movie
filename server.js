const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors'); // cors 패키지 추가
const app = express();
const PORT = 5000;

// CORS 설정 추가
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/assets/imgs'); // 파일 저장 디렉토리 설정
  },
  filename: (req, file, cb) => {
    const originalFilename = req.body.fileName || Date.now() + path.extname(file.originalname);
    cb(null, originalFilename);
  },
});

const upload = multer({ storage: storage });

app.use(express.static('public'));

// 파일 업로드 엔드포인트
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  const filePath = `/assets/imgs/${req.file.filename}`;
  res.json({ filePath });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});