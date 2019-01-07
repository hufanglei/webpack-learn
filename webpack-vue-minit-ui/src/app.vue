<template>
    <div>
        <h1>这是App组件</h1>   
        <mt-button type="default">default</mt-button>
        <mt-button type="primary" size="large" icon="back">primary</mt-button>
        <mt-button type="primary" size="normal" plain>primary</mt-button>
        <mt-button type="primary" size="small" disabled>primary</mt-button>
        <router-link to="account">Account</router-link>
        <router-link to="goodslist">Goodslist</router-link>
        <router-view></router-view>     
    </div>    
</template>

<script>
export default {
    
}
</script>
<style>
    
</style>