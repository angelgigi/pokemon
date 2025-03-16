const fs = require('fs');
// const path = require('path');
// const filePath = path.resolve(__dirname, 'ceshi.txt'); // 生成绝对路径

// 创建：writeFile 读取：readFile 追加：appendFile
fs.writeFile('./fs/测试.txt','三人行，必有我师',err=>{
    if(err){
        console.log('创建失败');
        return
    }
})

// 读取 
// fs.readFile('./fs/ceshi.txt', (err, data) => {
   
//     if (err) {
//         console.log('读取失败', err);
//         return;
//     }
//     console.log(data.toString());
// });

// 重命名
// fs.rename('./ceshi.txt','./测试.txt',err=>{
//     if(err){
//         console.log('重写失败');
//           return 
//     }
// })

// 移动
fs.rename('./ceshi.js','./fs/ceshi.js',err=>{
    if(err){
        console.log('重写失败');
        
    }
})

// 删除 fs.unlink fs.rm

// fs.unlink('./ceshi.txt', (err, data) => {
//     if (err) {
//         console.log('删除失败', err);
//         return;
//     }
//     console.log('删除成功');
// });