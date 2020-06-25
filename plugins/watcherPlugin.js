function WatcherPlugin(options) {
    this.options = options
}

WatcherPlugin.prototype.apply = function (compiler) {
    compiler.hooks.watchRun.tapPromise('watcherPlugin', (compiler) => { // tapAsync 异步钩子，必须传cb
        return new Promise(resolve => {
            resolve()
        }).then(() => {
            console.log('资源变化了')
            // console.log(compiler) // compiler 里面有你所有想要的东西，自己去查文档来找（你想要的结果可能需要自己写过滤器来过滤）
            let mtimes = compiler.watchFileSystem.watcher.mtimes;
            let mtimesKeys = Object.keys(mtimes);
            if (mtimesKeys.length > 0) {
                console.log(`本次一共改动了${mtimesKeys.length}个文件,目录为:`)
                console.log(mtimesKeys)
                console.log('------------分割线-------------')
            }
        })
    })
    compiler.hooks.watchClose.tap('watcherPlugin', () => {
        console.log('监听结束了')
    })
}

module.exports = WatcherPlugin;