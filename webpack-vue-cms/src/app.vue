<template>
    <div class="app-container">
       <mt-header fixed title="莒县对外劳务服务">
            <router-link to="/" slot="left">
                <mt-button icon="back">back</mt-button>
              </router-link>
       </mt-header>
       <h1>fsfdsdf </h1>
        <!--顶部Header区域-->

        <!--中间的 路由 router-view 区域-->
 
        <!--底部的 Tabbar 区域-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>    
</template>

<script>
</script>
<style lang="scss" scoped>
  .app-container{
      padding-top: 40px;
  }
</style>