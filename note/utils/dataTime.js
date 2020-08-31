const formDataTime = ()=>{
    // 获取当前时间
    const date = new Date();
    // 获取年
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    if(month < 10){
        month = "0" + month;
    }
    let day = date.getDate();
    if(day < 10){
        day = "0" + day;
    }
    let hour = date.getHours();
    if(hour < 10){
        hour = "0" + hour;
    }
    let minutes = date.getMinutes();
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    let second = date.getSeconds();
    if(second <10){
        second = "0" +second
    }
    return `${year}-${month}-${day}-${hour}-${minutes}-${second}`
}

module.exports = {
    formDataTime
}




// const formDataTime = () => {

//     const dt = new Date()
//     let y = dt.getFullYear()
//     let m = dt.getMonth() + 1
//     // 添加前导0 不满足2位，则添加前导0  padStar=》es6提供
//     m = (m+'').padStart(2,'0')
//     let d = dt.getDate()
  
//     return `${y}-${m}-${d}`
//   }
  
//   module.exports = {
//     formDataTime
//   }