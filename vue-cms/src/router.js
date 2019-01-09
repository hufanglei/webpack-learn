
//1.导入 vue-router包
import VueRouter from 'vue-router'

//3.创建一个viewrouter
var router = new VueRouter({
    routes:[
        
    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类。默认的类叫做 router-link-active
})

//吧路由对象暴露出去
export default router