const glob = require('glob')
const path = require('path')
const merge = require('webpack-merge')
const Uglify = require('uglifyjs-webpack-plugin') // js压缩
const PurifyCSSPlugin = require('purifycss-webpack')
const common = require('./webpack.common.js')
const website = {
	publicPath: './'
}
module.exports = merge(common, {
	mode: 'production',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].[hash].js', // 根据入口文件名称 打包成相同名称
		publicPath: website.publicPath
	},
	plugins: [
		new Uglify(),
		new PurifyCSSPlugin({
			// 这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
			// 注意： 使用这个插件必须配合extract-text-webpack-plugin这个插件
			paths: glob.sync(path.join(__dirname, 'src/*.html'))
		}),
	]
})