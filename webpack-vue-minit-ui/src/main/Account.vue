<template>
    <div>
       <h1>这是Account组件</h1>     
       <router-link to="/account/login">登录</router-link> 
       <router-link to="/account/register">注册</router-link>  
       <router-view></router-view>
    </div>
</template>
<script>
</script>


<style lang="scss">
    /* 普通的style标签 只支持普通的样式，如果想要启用 scss 或less，需要为 style元素，设置lang属性*/
    /* //只要 咱们的style标签，实在组件中定义的，那么推荐 开启 scoped 属性 */
    body{
        div{
            font-style: italic;
        }
    }
</style>
