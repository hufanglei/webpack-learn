# webpack-learn
百度脑图:
http://naotu.baidu.com/file/5590852166afb29124a264ff30acdac8?token=6a644a1fd0378f41
# 处理一个nnpm i 报错的解决方法
- 1.删除所有的node_mudules
- 2.清楚缓存 npm cache clean --force
- 3.从新下载  npm i
- 4.如果需要明确的提示 看下是不是文件中那个文件有问题比如：main.js或者webpack.config.js
#  配置bebel出现 webpack中babel的配置
解决方法:
https://blog.csdn.net/baidu_21349635/article/details/85937431
- 1.删除所有的node_mudules
- 2.清楚缓存 npm cache clean --force
- 3.修改package.jsonhttps://blog.csdn.net/baidu_21349635/article/details/85937431
- 4. 执行npm run dev测试