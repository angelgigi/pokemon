const fs = require('fs')

// promise封装
const p = new Promise((resolve,reject)=>{
    fs.readFile('./测试.txt',(err,data)=>{
        if(err) reject(err);
        resolve(data)
    })
})

p.then(value => {
    console.log(value.toString()) // 将 Buffer 转为字符串
}).catch(err => {
    console.error('读取文件出错:', err)
})
