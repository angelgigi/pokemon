const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    let { pathname } = new URL(req.url,'http://192.168.50.104')
    console.log(__dirname,pathname);
    
    res.setHeader('content-type','text/html;charset=utf-8')
    // 拼接文件路径
    let filePath = __dirname + pathname

    console.log('filePath',filePath);
    
    // 读取文件 fs 异步 api
    fs.readFile(filePath,(err,data)=>{
        if(err){
            res.statusCode = 500
            res.end('读取文件失败');
            return;
        }
        res.end(data);
        
    })
})

// 3.监听端口 启动服务
server.listen(9000,()=>{
    console.log('静态资源服务已启动');  
})