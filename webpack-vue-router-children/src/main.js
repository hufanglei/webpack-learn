import Vue from 'vue'
//1.导入 vue-router包
import VueRouter from 'vue-router'
//2.手动安装VueRouter
Vue.use(VueRouter)

//导入app组件
import app from './app.vue'
//导入自定义路由模块
import router from './router.js'
var vm = new Vue({
    el:'#app',
    render:c=>c(app), //render会把 el指定的容器中，所有的容器都请客覆盖，
    //不要把 路由的 router-view 和router-link 直接写到el控制的元素中
    router //4.将路由对象挂载到vm上 
})


//注意: App这个组件，是通过vm实例的render函数，渲染出来的，render函数如果要渲染组件，
//渲染出来的组件 ，只能到 el:'#app' 所指定的元素中

//Account和Goodslist组件，是通过 路由匹配监听到的，所以，这个两个组件，只能展示到 属于 路由的
//<router-view></router-view>     