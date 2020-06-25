const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
// const ViewFileList = require('./plugins/viewFileList') // 自定义 webpack 插件(生成markdown文件)
const WatcherPlugin = require('./plugins/watcherPlugin') // 自定义 webpack 插件(监听模式下，输出变化)

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new ViewFileList({filename: 'lrz-fileList.md'}),
    new WatcherPlugin(),
    new HtmlWebpackPlugin({
      title: '自定义插件'
    })
  ],
  module: {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: "[name].[ext]",
            outputPath: "img/"
          }
        }]
      }
    ]
  }
}
