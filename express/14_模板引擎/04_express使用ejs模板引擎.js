const express = require('express');
const app = express();  

const path = require('path');

app.set('view engine','ejs'); // 设置模板引擎
app.set('views', path.join(__dirname,'views')); // 设置模板路径

app.get('/home',(req,res)=>{    
    let title = '测试';
    res.render('home',{title}); 
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
})