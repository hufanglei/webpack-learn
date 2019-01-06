//这是 Node中 向外暴露成员的形式
//module.exports = {}

//在es6中，也通过规范的形式，规定了 es6中如何 导入和导出模块
// es6中导入模板，使用import 模板名称 from '模板标识符' import '表示路径'

//在es5中，使用export default和export 向外 暴露成

// export default {
//     name:'zs',
//     age:20
// }

var info = {
    name:'zs',
    age:20
}
export default info
// export default {
//     address:"北京"
// }

// 注意: export default 向外暴露的成员，可以使用任意的变量来接收
// 注意: 在一个模块中，export default只允许向外暴露1次
//注意: 在一个模块中，可以同时使用 export default 和 export 向外暴露成员
//注意: export default 向外暴露的成员，可以使用 任意的变量来接收

export var title = '小星星'
export var content = '哈哈哈'

//注意: 使用export向外暴露的成员，只能使用 {}的形式 来接收，这种形式，叫做【按需导出】
//注意: export 可以向外暴露多个成员， 同时，如果某些成员，我们在import的时候，不需要，则可以
//不在{}中定义
//注意:s使用export 导出的名称，必须严格按照 导出时候的名称，来使用{}来接收
//注意: 使用 exports导出的成员，如果就像换个名称来接收，可以使用as来从新命名


//在Node中，使用var 名称 = require('模块标识符')
//module.exports 和 exports来暴露成员



