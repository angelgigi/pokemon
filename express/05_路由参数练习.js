const express = require('express');

const app = express();

const cors = require('cors'); // 引入 cors 中间件
app.use(cors()); // 启用跨域中间件

const singerList = require('./singer.json')
console.log('singerList',singerList);

app.get('/singer/:id:html',(req,res)=>{
    let {id} = req.params
    let result = singerList.find(item=>{
        if(item.id === Number(id)){
            return true
        }
    })
    res.send(`
        <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Table with Padding</title>
            
            </head>
            <body>
                <div>
                    <h1 class="sticky-nav" style="text-align: center;">${result.singer_name || result.title}</h1>
                    <div class="p">
                        <p>11111</p>
                        <img class="img" src='${result.picUrl}' />
                    </div>
                    <div style="overflow: hidden;">
                        <p>222222</p>
                        <p style="float: right;">5555555</p>
                    </div>
                    <ul>
                        <li>项 1</li>
                        <li>项 2</li>
                        <li>项 3</li>
                        <li>项 4</li>
                        <li>项 5</li>
                        <li>项 6</li>
                    </ul>
                     <div class="container">
                        <div class="left-column">左侧内容</div>
                        <div class="center-column">中间列的内容</div>
                        <div class="right-column">右侧内容</div>
                    </div>   
                </div>
            </body>
            <style>
                clearfix
                .sticky-nav{
                    position: -webkit-sticky; /* Safari 浏览器 */
                    position: sticky;
                    top: 0; /* 当滚动到顶部时，导航栏固定 */
                    background-color: #333;
                    color: white;
                    padding: 10px;
                }
                .p{
                    position: relative;
                    background-color: black;
                    color:#fff;
                    // height:100vh
                }
                .img{
                    position: absolute;
                    // animation: blink 1s infinite alternate;
                    animation: rotate 2s linear infinite;
                }    
                .img:hover {
                    transform: scale(1.2);
                }
                @keyframes blink {
                    0% { opacity: 1; }
                    50% { opacity: 0; }
                    100% { opacity: 1; }
                }  
                @keyframes rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
    
                /* 偶数元素样式 */
                li:nth-child(even) {
                    background-color: lightblue;
                }

                /* 奇数元素样式 */
                li:nth-child(odd) {
                    background-color: lightcoral;
                }
                .container {
                    display: flex;
                }

                .left-column, .right-column {
                    width: 20%;
                }

                .center-column {
                    width: 60%;
                    order: 0; 
                } 
                 
                /* 设置左右列的顺序 */
                .left-column {
                    order: 1;
                }

                .right-column {
                    order: 2;
                }   
            </style>
            </html>
        `)
})


// 监听端口，启动服务
app.listen(3002, () => console.log('Server running on port 3002'));
