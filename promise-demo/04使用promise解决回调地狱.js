
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



// getFileByPath('./files/11.txt')
// .then(function(data){
//     console.log(data+'---')
//     //读取文件2
//    return  getFileByPath('./files/2.txt')
// },function(data){
//     return  getFileByPath('./files/2.txt')
// })
// .then(function(data){
//     console.log(data+'---')
//       //读取文件3
//     return  getFileByPath('./files/3.txt')
// })
// .then(function(data){
//     console.log(data+'---')
// })
// console.log('okokok')


//当我们有这样的需求: 哪怕前面的 promise 执行失败了，但是，不要影响后续 promise的正常执行，
//此时，我们可以耽误为每个promise ，通过 .then 指定一下失败的回调

//有时候，我们有这样的需求，和上面的需求刚好相反；如果，后续的promise执行，依赖于 前面
//primise的执行结果，如果前面的失败了，则后面的就没有继续执行下去的意义了，此时，我们想要实现，一旦有报错
//则立即终止所有 promise的执行


getFileByPath('./files/11.txt')
.then(function(data){
    console.log(data+'---')
    //读取文件2
   return  getFileByPath('./files/2.txt')
},function(data){
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
.catch(function(err){//catch的作用，如果前面有任何的promise的执行失败，则立即终止
    //所有promise的执行，并马上进去catch去处理promise中跑出的异常
    console.log(err.message);
})
console.log('okokok')





