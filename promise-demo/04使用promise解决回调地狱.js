
const fs = require('fs')


function getFileByPath(fpath){
    var promise = new Promise(function(resolve, reject){
        fs.readFile(fpath,'utf-8',(err,dataStr)=>{       
            if(err)return reject(err)
            resolve(dataStr)
        })
    })
    return promise
  
}

//限度去文件1，再读取2 ，最后读取3
// getFileByPath('./files/1.txt')
// .then(function(data){
//     console.log(data + '----')

//     getFileByPath('./files/2.txt')
//     .then(function(data){
//         console.log(data + '----')

//         getFileByPath('./files/3.txt')
//         .then(function(data){
//               console.log(data + '----')
//         }        
//     }
// },function(err){
//     console.log(err.message)
// })



getFileByPath('./files/1.txt')
.then(function(data){
    console.log(data+'---')
    //读取文件2
   return  getFileByPath('./files/2.txt')
})
.then(function(data){
    console.log(data+'---')
      //读取文件3
    return  getFileByPath('./files/3.txt')
})
.then(function(data){
    console.log(data+'---')
})



