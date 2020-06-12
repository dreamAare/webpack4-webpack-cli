const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(commonConfig, {
  plugins: [
    new UglifyJSPlugin() // 压缩输出
  ]
})
