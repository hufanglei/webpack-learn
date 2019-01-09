console.log('OK ');

import Vue from 'vue'
import VueRouter from 'vue-router'
vue.use(VueRouter)

import './lib/css/mui.css'
import './lib/css/icons-extra.css'

import { Header } from  'mint-ui'
Vue.component(Header.name, Header)

import router from './router.js'


import app from  './app.vue'

var vm = new Vue({
    el:'#app',
    render:c => c(app),
    router
})
