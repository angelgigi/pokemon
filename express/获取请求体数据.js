const express = require('express');

const bodyParser = require('body-parser')

const app = express();
// 解析json格式的数据
const jsonParser = bodyParser.json()

// 解析querystring格式的数据
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// 创建路由规则
app.get('/login',(req,res)=>{
    res.sendFile(__dirname + '/form.html');
})

// 获取用户名密码
app.post('/login',urlencodedParser,(req,res)=>{
    console.log(req.body);
    
})

app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000');
})