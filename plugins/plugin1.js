function MyPlugin1 (options) {
    this.options = options
}


// compile：一个新的编译(compilation)创建之后，钩入(hook into) compiler。
// compilation：编译(compilation)创建之后，执行插件。(没生成一个文件就会执行一次)
// done: 完成编译之后
// 总结 compiler.hooks后面跟钩子的类型，相应的钩子类型只能用相应的事件去触发（tap,tapAsync,tapSync）,第二个参数为该过程的名称，后面为一个回调函数，里面是你自己的业务代码
MyPlugin1.prototype.apply = function (compiler) {
    compiler.hooks.compile.tap('test2', () => {
        console.log('我是compile')
    })
    compiler.hooks.compilation.tap('test2', (compilation) => {
        console.log('我是compilation')
        compilation.hooks.chunkAsset.tap('test2', (chunk, fileName) => {
            console.log(chunk)
            console.log(fileName)
        })
    })
}

module.exports = MyPlugin1;