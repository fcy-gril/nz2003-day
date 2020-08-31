const express = require('express');
const path = require('path');
const app = express();
const expressArtTemplate = require('express-art-template');
app.listen(8080);
app.engine('html',expressArtTemplate);
app.set('views',path.join(__dirname,'views'))
app.set('view engine' , 'html')


app.get('/',(req,res)=>{
    res.render('index3')
})
app.get('/list',(req,res)=>{
    res.render('list3')
})
app.get('/detail',(req,res)=>{
    res.render('detail3')
})