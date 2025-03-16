const ejs = require('ejs');
const fs = require('fs');

let china =  '中国'
let love = '我爱你'

let str = fs.readFileSync('./01_demo.html').toString();

let result = ejs.render(str,{
    china,
    love
})

console.log('result',result);