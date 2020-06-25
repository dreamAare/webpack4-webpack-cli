function ViewFileList(options) {
    this.options = options
    this.filename = options.filename
}


// compile：一个新的编译(compilation)创建之后，钩入(hook into) compiler。
// compilation：编译(compilation)创建之后，执行插件。(没生成一个文件就会执行一次)
ViewFileList.prototype.apply = function (compiler) {
    compiler.hooks.emit.tapPromise('fileList', (compilation) => { // tapAsync 异步钩子，必须传cb
        return new Promise(resolve => {
            resolve()
        }).then(() => {
            let fileListName = this.filename
            let len = Object.keys(compilation.assets).length
            let content = `# 一共有${len}个文件\n\n`
            for (let i in compilation.assets) {
                content += `-${i}\n`
            }
            compilation.assets[fileListName] = {
                source: function () {
                    return content;
                },
                size: function () {
                    return content.length
                }
            }
        })
    })
}

module.exports = ViewFileList;