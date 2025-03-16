const ejs = require('ejs');
const fs = require('fs');

const xiyou = ['唐僧','孙悟空','猪八戒','沙僧'];

let html = fs.readFileSync('./02_西游.html').toString();

let result = ejs.render(html,{
    xiyou
})

console.log('result',result);