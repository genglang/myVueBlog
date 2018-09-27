const glob = require('glob')
const path = require('path')
const merge = require('webpack-merge')
const Uglify = require('uglifyjs-webpack-plugin') // js压缩
const PurifyCSSPlugin = require('purifycss-webpack')
const common = require('./webpack.common.js')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = merge(common, {
	mode: 'production',
	// 入口文件的配置项
	entry: {
		main: './src/main.js',
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '../'),
			verbose: true
		}),
		new Uglify(),
		new PurifyCSSPlugin({
			// 这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
			// 注意： 使用这个插件必须配合extract-text-webpack-plugin这个插件
			paths: glob.sync(path.join(__dirname, 'src/*.html'))
		}),
	]
})