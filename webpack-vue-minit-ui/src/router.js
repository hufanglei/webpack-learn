
//1.导入 vue-router包
import VueRouter from 'vue-router'
//导入Account组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'
//导入 Account的两个子组件
import login from './submain/login.vue'
import register from './submain/register.vue'




//3.创建一个viewrouter
var router = new VueRouter({
    routes:[
        {path:'/account', 
        component:account,
         children:[
            {path:'login', component: login},
            {path:'register', component: register}
         ]
       },
        {path:'/goodslist', component:goodslist} 
    ]
})

//吧路由对象暴露出去
export default router