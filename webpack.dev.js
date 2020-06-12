const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

module.exports = merge(commonConfig, {
  devtool: 'inline-source-map', // 错误追踪
  devServer: {
    port: 7777,
    hot: true,
    open: true
  },
})
