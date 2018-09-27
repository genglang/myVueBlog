const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',
	// 入口文件的配置项
	entry: {
		main: './src/main.js',
	},
	// 出口文件配置项(打包的路径文件名)
	devServer: {
		// 设置基本的目录结构
		contentBase: path.resolve(__dirname, '../dist'),
		// 服务器的IP地址  可以用IP也可以用localhost
		host: 'localhost',
		// 服务端压缩是否开启
		compress: true,
		open: true,
		historyApiFallback: true, // vue router history模式制定路由访问需要设置为true
		port: 8888
	}
})