//入口文件
console.log('ok');

//如何在 webpack构键的项目中，使用vue进行开发
//1. 使用script标签，引入vue的包
//2. 在index容器中，创建一个id为app的div容器
//3. 通过new vue得到一个vm的实例


//在webpack中尝试使用vue:
//注意: 在webpack中，使用 import Vue from 'vue' 导入的 Vue构造函数，功能不完整，只提供了 runtime-only的方式，并没有提供像
//网页中那样的使用方式
import Vue from 'vue'
//第一个方式
// import Vue from '../node_modules/vue/dist/vue.js'

//回顾 包的查找规则
// 1.找 项目根目录中 有么有 node_modules 的文件夹
// 2.在 node_modules中根据包名，找对应的 vue文件夹
// 3.在 vue文件夹中，找一个叫做 package.json的包配置文件
// 4.在packge.json 文件中，查找一个 main属性，【main属性这个包在被加载的时候的入口文件】】

// var login = {
//     template:'<h1>这是login组件，是试用网页中形式创建出来的组件</h1>'
// }

//1. 导入login组件
import login from './login.vue'
//2. 默认 webpack 无法打包.vue文件，需要安装 相关的loader:
//cnpm i vue-loader vue-template-compiler -D
//在配置文件中，新增loader配置项{test:/\.vue$/,use:'vue-loader'}


var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    // components:{
    //     login
    // }
    // render: function(createElements){ //在webpack中，如果想要通过vue，吧一个组件放到页面中去展示，
    //     //vm实例中render函数可以实现
    //     return createElements(login)
    // }
    
    //简写
    render: c =>  c(login)
        
   
})

//总结梳理: webpack 中如何使用vue
//1. 安装vue的包， cnpm i vue -S
//2. 由于在webpack中推荐使用.vue 这个组件模板文件定义组件，所以，需要安装能解析这种文件的loader/
// cnpm i vue-loader vue-template-compiler -D
// 3.在 main.js中，导入vue，模块，import Vue from ‘vue’
//4. 定义一个.vue 结束的组件，其中 组件有三部分组成: template script style
//5. 使用import 导入这个组件
//6. 创建vm的实例 var vm = new  Vue({
//     el:'#app',
//     render:c =>c(login)
// })
//7.在页面中创建一个id为app的div元素，作为我们的 vm实例要控制的区域

import m1,{title as title123,content} from "./test.js"
console.log(m1,title123,content)

