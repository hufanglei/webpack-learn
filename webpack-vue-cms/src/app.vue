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
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
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