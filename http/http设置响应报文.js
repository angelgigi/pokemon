const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('content-type','text/html;charset=utf-8')
    // 1. 设置响应状态码
    res.statusCode = 200

})

server.listen(9000,()=>{
    console.log('服务已启动。。。');
})