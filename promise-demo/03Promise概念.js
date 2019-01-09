//1. Promise 是个构造函数，我们可以 new Promise得到一个Promise的实例
//2. 在Promise上，有两个函数，分别叫做 resolve（成功之后的回调函数） 和 reject（失败之后的回调函数）
//3. 在Promise构造函数 的Prototype 属性上，有一个 .then()方法，只要是 Promise 构造函数创建的实例，都可以访问到.then()方法
//4. Promise表示一个异步操作，每当我们new一个Promise的实例，这个实例，就表示一个具体的异步操作
//5.既然 Promise创建的实例，是一个异步操作，那么 这个异步操作的结果，只能有两种状态
// 5.1 状态1： 异步执行成功了，需要在内部调用 resolve返回给调用者
// 5.2 状态2： 异步执行失败了。需要在内部调用reject吧结果返回给调用者
// 5.3 由于Promise的实例，是一个异步操作，所以，内部拿到的 操作的结果后，无法使用 return 吧操作的结果返回给调用者，
//这时候.只能使用回调函数的形式，来吧成功或失败的结果，返回给调用者
//6.我们可以在new出来的 Promise实例上，调用.then()方法，【预先】为这个Promise异步操作，指定成功（resolve）和失败（reject）回调函数

//注意: 这里 new出来的promise ，只能代表 【形式上的】一个异步操作
//什么是形式上的异步操作：我们只知道他是一个异步操作，但是做什么具体的事情，目前还不清楚
//var promise = new Promise()

//这是一个具体的异步操作，使用function指定一个具体的异步操作
var promise = new Promise(function(){
    //这个function 内部写的就是具体的异步操作
})