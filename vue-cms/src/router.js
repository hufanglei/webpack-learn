
//1.导入 vue-router包
import VueRouter from 'vue-router'

import home from './components/tabbar/HomeContainer.vue'
import member from './components/tabbar/MemberContainer.vue'
import shopcar from './components/tabbar/ShopCarContainer.vue'
import search from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import Newsinfo from './components/news/Newsinfo.vue'
import photoList from './components/photos/PhotoList.vue'

//3.创建一个viewrouter
var router = new VueRouter({
    routes:[
        {path:"/",redirect:'home'},
        {path:"/home",component:home},
        {path:"/member",component:member},
        {path:"/shopcar",component:shopcar},
        {path:"/search",component:search},
        {path:"/home/newslist",component:NewsList},
        {path:"/home/NewsInfo/:id",component:Newsinfo},
        {path:"/home/photoList",component:photoList},

    ],
    linkActiveClass: 'mui-active' //覆盖默认的路由高亮的类。默认的类叫做 router-link-active
})

//吧路由对象暴露出去
export default router