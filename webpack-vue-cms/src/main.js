//入口文件
 console.log('OK');
 import Vue from 'vue'

 import './lib/css/mui.min.css'
 import './lib/css/icons-extra.css'


 import { Header } from 'mint-ui';
 Vue.component(Header.name, Header)

 import app from  './app.vue'

 var vm = new Vue({
    el:'#app',   
    render:c => c(app)

 })