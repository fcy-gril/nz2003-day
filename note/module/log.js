
const path = require('path');
const fs = require('fs');
const os = require('os')
// 获取时间戳的文件
const dt = require('../utils/dataTime');
// console.log(dt);

// 记录日志的路径
const logPath = path.join(path.dirname(__dirname),'logs',`${dt.formDataTime()}.log`)
console.log(logPath)
module.exports = (req,res,next)=>{
    let data = req.ip + ' -- ' + dt.formDataTime() + ' -- ' + req.method + ' -- ' + req.url + ' -- ' + req.headers['user-agent'] + os.EOL;
    console.log(req)
    // fs.appendFileSync()方法的用途是通过异步的方法将文本内容或数据添加到文件里，如果文件不存在则会自动创建
    // fs.appendFileSync('文件路径'，data,()=>{});
    fs.appendFileSync(logPath, data)
    next()
    
}