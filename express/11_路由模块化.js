const express = require('express');

const app = express();

const homeRouter = require('./routes/homeRouter');
const adminRouter = require('./routes/adminRouter');

app.use(homeRouter);
app.use(adminRouter);


app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000');
})
