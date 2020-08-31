const express = require('express');
const app = express();
const expressArtTemplate = require('express-art-template');
const path = require('path');
app.listen(8080);
// 把art-template模板引擎接入到express项中
// 指定什么后缀扩展文件用 art-template模板引擎管理
// 参数1：指定.html的扩展名用于art-template模板引擎管理
// 参数2：指定art-template模块来管理它
app.engine('html',expressArtTemplate);
// 指定试图模板的路径
app.set('views',path.join(__dirname,'views'));
// 指定模板引擎的默认扩展名，设置后，在render方法就可以省略不用写扩展名
app.set('view enfine' ,'html')




app.get('/',(req,res)=>{
    let username = '变量显示';
    let href = '<a href="http://www.baidu.com/">搜索一下</a>'
   // render指定视图模板文件名称
  // 参数1：指定视图模板名称
  // 参数2：json对象，数据分配给模板视图
    res.render('index',{
    // key模板中的名称：value值
    // username: username
    // es6中key和value的名字一致，可以省去value
        // username:username
        username,
        href
    })
})

// app.get('/if',(req,res)=>{
//     // render参数1：指定试图模板名称
//     // 参数2：json对象，试图分配给试图模板
//     res.render('if',{
//         age:20
//     })
// })

app.get('/if', (req, res) => {

    res.render('if', {
      age: 20
    })
  })

//   循环
app.get('/for',(req,res)=>{
    res.render('for',{
        users:[
            {id:1,name:'张三'},
            {id:2,name:'李四'},
            {id:3,name:'王五'},


        ]
    })
})