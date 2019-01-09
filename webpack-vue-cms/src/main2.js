//入口文件
 console.log('OK');
import Vue from 'vue'
 // 1.1 导入路由的包
// import VueRouter  from 'vue-router'
 //1.2安装路由
// Vue.use(VueRouter)

 import './lib/css/mui.min.css'
 import './lib/css/icons-extra.css'


 import { Header } from 'mint-ui';
 Vue.component(Header.name, Header)

 //1.3 导入自己的 router.js路由模块
 // import router from './router.js'

 import app from  './app.vue'

 var vm = new Vue({
    el:'#app',   
    render:c => c(app),
    // router //1.4 挂载路由对象 到vm实例上
 })