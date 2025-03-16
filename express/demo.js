const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); // 引入 cors 中间件
const app = express();
app.use(cors()); // 启用跨域中间件

app.use(express.json()); // 使用内置中间件解析 JSON

// 引用 JSON 文件
const questionListPath = path.join(__dirname, 'questions.json');
const questionResultListPath = path.join(__dirname, 'question_results.json');

// 创建路由
app.get('/login', (req, res) => {
    res.send('login received');
});

// post请求
app.post('/questionsData', (req, res) => {
   // 读取 JSON 文件  
  fs.readFile(questionListPath,(err, data) => {
    if (err) {
      return res.status(500).send({ error: 'Failed to read JSON file' });
    }
    // 将 JSON 数据返回给客户端
    const jsonData = JSON.parse(data);
    res.status(200).json({
      ...jsonData
    });
  });
    
});

app.post('/questionResult', (req, res) => {
    // 读取 JSON 文件  
   fs.readFile(questionResultListPath,(err, data) => {
     if (err) {
       return res.status(500).send({ error: 'Failed to read JSON file' });
     }
     // 将 JSON 数据返回给客户端
     const jsonData = JSON.parse(data);
     res.status(200).json({
       ...jsonData
     });
   });
     
 });


// 监听端口，启动服务
app.listen(3000, () => console.log('Server running on port 3000'));


