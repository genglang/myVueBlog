const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

const website = {
	publicPath:"http://localhost:8888/"
}

module.exports = merge(common, {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[hash].js', // 根据入口文件名称 打包成相同名称
		publicPath: website.publicPath
	},
	devServer: {
		contentBase: path.resolve(__dirname, '../dist'), // 设置基本的目录结构
		host: 'localhost',  // 服务器的IP地址  可以用IP也可以用localhost
		port: 8888,
		compress: true,  // 服务端压缩是否开启
		open: true,
		historyApiFallback: true, // vue router history模式制定路由访问需要设置为true
	}
})