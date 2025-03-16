const http = require('http') //1.导入http模块

// 2.创建http服务
const server = http.createServer((req,res)=>{
    let { method } = req
    let {pathname} = new URL(req.url,'http://192.168.16.121')
    res.setHeader('content-type','text/html;charset=utf-8')
    if(method === 'GET' && pathname === '/login'){
        res.end('登录页面')
    }else if(method === 'GET' && pathname === '/reg'){
        res.end('注册页面')
    }else{
        res.end('Not Fund')
    }
})

// 3.监听端口 启动服务
server.listen(9000,()=>{
    console.log('9000服务已启动');  
})
