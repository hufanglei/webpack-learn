var path = require('path')
//在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打包好的 bundle注入到页面底部
//如果要配置插件，需要在导出的对象中，挂载一个plugins 节点
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, './src/main.js'),//入口文件
    output: {
        path: path.join(__dirname, './dist'),//输出路径
        filename: 'bundle.js' //指定输出文件的名称
    },
    plugins:[ 
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html' //设置生成的内存页面的名称
        })

    ],
    module:{ //配置第三方loader 模块的
        rules:[
            {test: /\.css$/, use:['style-loader', 'css-loader']},
            {test: /\.less$/, use:['style-loader', 'css-loader','less-loader']},
            {test: /\.scss$/, use:['style-loader', 'css-loader','sass-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=5429&name=[hash:8]-[name].[ext]'},//处理图片路径的loader
            //limit 给定的值，是图片的大小，单位是byte，如果 我们引用的图片，大于或等于给定的limit值
            //则不会被转为base64格式的字符串，如果图片小于给定的limit的值，则会被转为base64字符串
            {test: /\.(ttf|eot|svg|woff|woff2)$/, use:['url-loader']}, //处理字体文件的loader
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        
        ]
    },
    resolve: {
        alias: { //修改 vue被导入时候的包的路径
            "vue$":"vue/dist/vue.js"
        }
    }
}