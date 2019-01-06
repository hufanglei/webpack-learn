//项目的js入口文件
console.log('OK');

import './css/index.css'
import './css/index.scss'

//注意：如果要通过路径的形式，去引用node_modules 中相关的文件，可以直接省略 路径前面的 
//node_modules 这一层目录，直接写包的名称，然后后面跟上具体的文件路径
import 'bootstrap/dist/css/bootstrap.css'

//class 关键字，是ES6中提供的新语法，是用来实现ES6中面向对象编程的方式
class Person{
    //使用static关键字，可以定义静态属性
    //所谓的静态属性，就是可以直接通过 类名，直接访问的属性
    //实例属性:只能通过类的实例，来访问的属性，叫做实例属性
    static info = {name: 'zs', age: 20}
}

//访问Person类身上 的info 静态属性
console.log(Person.info);
//在webpack中，默认只能处理一部分ES6的新语法，一些更高级的es6语法，或者es7语法，
// webpack是处理不了的，这时候，就需要借助于第三方的loader，来帮助webpack处理这些高级的语法，
// 当第三方的loader吧高级语法，转为低级的语法之后，会把结果交给webpack去打包到bundle.js
//通过Babel,可以帮我们将高级的语法转换为 低级的语法
//1.在webpack中，可以运行如下两套命令，安装两套包，去安装Babel相关的loader功能
//1.1第1套包: cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
//1.2第2套包: cnpm i babel-preset-env babel-preset-stage-0 -D
//2.打开webpack的配置，在module节点下的rules数组中，添加一个新的匹配规则
//2.1 {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
//2.2注意，在配置babel的 loader规则的时候，必须把node_modules目录，通过exclude选择排除掉：原因有俩
//2.2.1 如果 不排除 node_modules，则babel会把node_modules中所有的第三方js包都打包编译，这样，会很消耗cpu,同时打包非常慢
//2.2.2 哪怕，最终，bable吧ode_module所有的第三方js包都打包编译完了，项目也无法运行
//3.在项目的根目录中，新建一个 叫做 .babelrc 的babel配置文件，这个配置文件，属于json格式
//所以，在写.babelrc配置的时候，必须符合json语法规范，不能写注释，字符串必须用双引号
//3.1 在 .babelrc写如下的配置 presets翻译成语法的意思
// {
//     "presets": [],
//     "plugins": ["transform-runtime"]
// }


// var p1 = new Person()
// p1.name

//  function Animal(name){
//     this.name = name
//  }
//  Animal.info = 123
//  var a1 = new Animal('小花')

//  console.log(Animal.info);
//  console.log(a1.name);
