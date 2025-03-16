const http = require('http') //1.导入http模块

// 2.创建http服务
const server = http.createServer((req,res)=>{
    let { method } = req
    let {pathname} = new URL(req.url,'http://192.168.50.104')
    res.setHeader('content-type','text/html;charset=utf-8')
    res.end('Not Fund')
})

// 3.监听端口 启动服务
server.listen(3000,()=>{
    console.log('3000服务已启动');  
})