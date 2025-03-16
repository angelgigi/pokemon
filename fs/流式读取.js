const fs = require('fs')
const rs = fs.createReadStream('./fs/数据驱动.mp4') // 创建读取流对象
const ws = fs.createWriteStream('./fs/数据驱动_副本1.mp4') // 创建写入流对象
rs.on('data',chunk=>{
    ws.write(chunk)
})

