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
