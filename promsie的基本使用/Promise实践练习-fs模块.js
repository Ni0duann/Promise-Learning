//回调函数
const { log } = require('console');
const fs = require('fs');
const { resolve } = require('path');
// fs.readFile('./resource/content.txt',(err, data) => {
//     //如果出错 则抛出错误
//     if (err) throw err;
//     // 输出文件结果
//     console.log(data.toString());
// })

// 采用Promise进行封装

let p = new Promise ((resolve,reject) => {
    fs.readFile('./resource/content.txt', (err,data) => {
        // if err
        if (err) reject (err)
        resolve(data)
    })
}) 

p.then(
    (data) => {
        console.log(data.toString());
    },
    (err) => {
        throw err;
    }
)