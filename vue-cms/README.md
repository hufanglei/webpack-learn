# cms-vue 项目
这是一个vue+webpack的演示项目

## 制作首页app组件
1. 完成header区域，使用的是 mint-ui中的header组件
2. 自作底部的Tabbar区域，使用的是Mui的Tabbar.html
3. 要在 中间区域放置一个 router-view 来展示路由匹配到的组件
  + 在制作 购物车 小图标的时候 操作会相对多一些
  + 先把 扩展图标的 css样式，拷贝到 项目中
  + 拷贝 扩展字体库 tf文件到项目中
  + 为购物车 小图标 ，添加 如下样式， mui-icon mui-icon-extra mui-icon-extra-cart 

## 盖章 tabbar 为 router-link

## 设置路由高亮

## 点击 tabbar中的路由连接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
1. 获取数据，如何获取，使用vue-resource
2. 使用vue-resource的this.$http.get 获取数据
3. 获取到的数据，要保存到data身上
4. 使用v-for循环渲染，每个item项

## 改造 九宫格 区域的样式

## 改造 新闻资讯 路由连接

## 新闻资讯 页面 制作
1.绘制页面
2.使用vue-resource会获取数据
3.渲染真实数据

## 实现 新闻资讯列表 点击跳转到新闻详情
1.把列表中的每一项 改造为 router-link，同时，在跳转的时候应该提供唯一的id标识符
2.创建新闻详情的组件页面 NewsInfo.vue
3.在路由模块中，将新闻详情的路由地址和组件页面 对应起来

## 实现 新闻详情的 页面布局 和 数据渲染

## 单独封装一个 comment.vue评论子组件
1.先创建一个单独的comment.vue组件模板
2.在需要使用comment组件的页面中，先手动导入comment组件
 + 'import comment from './comment.vue'
3.在父组件中，使用‘components’属性，将刚才导入的comment组件，注册为自己的子组件
4.将注册子组件的 注册名称 以标签形式 在页面中 引用 即可

## 获取所有的评论数据，显示到页面中

## 实现点击加载更多评论的功能
1.为加载跟多按钮，绑定点击事件，在事件中，去请求下一页数据
2.点击加载更多，让pageIndex++，然后重新调用this.getComments() 方法，重新获取最新一页的数据
3.为了防止 新数据，覆盖老数据的情况，我们在 点击加载更多的时候，每当获取到新数据，应该让 老数据调用
数组的 concat方法，拼接上新数组

## 发表评论
1. 吧文本框双向绑定
2. 为发表按钮绑定一个事件  
3. 校验评论内容是否为空，如果为空，则Toast 评论内容不能为空
4. 通过 vue-resource 发送一个请求，把评论内容提交给 服务器
5. 当发表评论ok后，重新刷新列表，以查看最新的评论
 + 如果调用 getComments方法重新属性评论列表的话，可能只得到 最后一页的评论，前几页的评论获取不到
 + 换一种思路，当评论成功后，在客户端，手动拼接处一个最新的评论对象，然后调用数据的
   unshift方法，吧最新的评论，最佳到data中comments的开头，这样就能完美实现刷新评论列表的需求
   
## 改造图片分享 按钮为 路由的连接并显示对应的组件页面

## 绘制 图片列表 组件页面结构并美化样式
1. 制作 顶部的滑动条
2. 制作 底部的图片列表

### 制作顶部滑动条的坑们：
1. 需要借助MUI中的 tab-top-webview-main.html
2. 需要把 slider区域的mui-fullscreen类去掉 
3. 滑动条无法正常触发滑动，通过检查官方文档，发现这个是js组件，需要被初始化一下
  + 1. 导入mui.js
  + 调用官方提供的 方式 去初始化
  ```
    mui('.mui-scroll-wrapper').scroll({
     	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
     });
  ```
4. 我们在初始化 滑动条 的时候，导入的 mui.js 但是，控制台报错
   + 经过我们合理的推测，可能是mui.js 中用到了 'caller'，‘callee’ and 'arguments'东西，
   但是，webpack 打包好的 bundle.js中，默认是启用严格模式的，所以，这两者冲突了 
   + 解决方案: 
     1. 吧 mui.js 中的 非严格模式 的代码 改掉，但是 不现实
     2. 把 webpack 打包时候的严格模式 禁用掉     
     + 最终我们选择 plan B npm install babel-plugin-transform-remove-strict-mode -D 
5. 刚进入 图片分享页面的时候，滑动条无法正常工作，经过我们认真的分析，发现，如果要初始化 滑动条
   必须要等Dom元素加载完毕，所以 我们把初始化滑动条的代码搬到了 mounted 生命周期函数中     
6. 当滑动条 调试Ok后，发现， tabbar 无法正常工作了，这时候，我们需要把 每个tabbar按钮的样式中的 'mui-tab-item'
   重新改下名字 
7.获取  所有分类，并渲染分类列表

## vuex总结
1. state总的数据，不能直接修改，如果想要修改，必须通过 mutations
2. 如果组件想要直接 从 state 上获取数据，需要 this.$store.state ***
3. 如果 组件，想要修改数据，必须使用 mutations提供的方法 ，需要通过this.$store.state ***
4. 如果 store中 state上的数据，在对外提供的时候，需要做一层包装，那么，推荐使用getter，
如果需要geters，则用 this.$state.getters. ***
   