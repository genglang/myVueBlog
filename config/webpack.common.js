const path = require('path')
const uglify = require('uglifyjs-webpack-plugin') // js压缩
const htmlPlugin = require('html-webpack-plugin') // html打包插件
const extractTextPlugin = require('extract-text-webpack-plugin') // cas 分离
const glob = require('glob')
const PurifyCSSPlugin = require('purifycss-webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const website = {
	publicPath: 'http://localhost:8888/'
}

module.exports = {
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[name].js', // 根据入口文件名称 打包成相同名称
		publicPath: website.publicPath
	},
	// 模块：例如解读CSS 图片如何转换压缩
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				exclude: /node_modules/
			},
			{

				test: /\.css$/,
				loader: 'style-loader!css-loader'

			},
			{
				test: /\.(scss|sass)$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [{
					loader: 'url-loader',
					options: {
						// 小于500B的文件打成Base64格式
						limit: 1000,
						name: 'images/[name].[ext]?[hash]'
					}
				}]
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					appendTsSuffixTo: [/\.vue$/],
				}
			},
			{
				test: /\.(jsx|js)$/,
				use: {
					loader: 'babel-loader'
				},
				exclude: /node_modules/
			},
		]
	},
	// 省略路径
	resolve: {
		extensions: ['.js', 'ts', '.vue', '.json'],
		alias: {
			// vue运行版本和编译版本
			'vue$': 'vue/dist/vue.esm.js',// 'vue/dist/vue.common.js'
			'@': path.resolve(__dirname, './src')
		}
	},
	// 插件
	plugins: [
		new htmlPlugin({
			minify: { // 压缩
				removeAttributeQuotes: true // 去掉属性的双引号
			},
			hash: true, // js hash名
			template: './src/index.html' // 要打包的文件名
		}),
		new VueLoaderPlugin()
	],
}