const express = require('express');
const app = express();
app.listen(8080);
app.use(require('./module/log'))
app.get('/aa',(req,res)=>{
    res.send('asdf')
})