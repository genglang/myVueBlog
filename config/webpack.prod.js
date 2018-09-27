const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'production',
	// 入口文件的配置项
	entry: {
		main: './src/main.js',
	},
	plugins:[
		new uglify(),
		new PurifyCSSPlugin({
			// 这里配置了一个paths，主要是需找html模板，purifycss根据这个配置会遍历你的文件，查找哪些css被使用了。
			// 注意： 使用这个插件必须配合extract-text-webpack-plugin这个插件
			paths: glob.sync(path.join(__dirname, 'src/*.html'))
		}),
	]
})