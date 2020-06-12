const express = require('express')
const webpack = require('webpack')
const WebpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('./webpack.config') // webpack 配置文件
const compiler = webpack(config) // compiler 在这里可以理解为由webpack打包出来的文件
const webpackMiddleware = WebpackDevMiddleware(compiler) // 通过WebpackDevMiddleware这个容器（中间件）将打包后的文件“装起来”，// 方便express 服务去识别
app.use(webpackMiddleware)

app.listen(3001, function () {
  console.log('服务启动中，传奇私服，刀刀99999999')
})