const path = require('path')
const htmlPlugin = require('html-webpack-plugin') // html打包插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')



module.exports = {
	// 入口文件的配置项
	entry: {
		main: './src/main.js',
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
	resolve: { // 省略路径
		extensions: ['.js', 'ts', '.vue', '.json'],
		alias: {
			// vue运行版本和编译版本
			'vue$': 'vue/dist/vue.esm.js',// 'vue/dist/vue.common.js'
			'@': path.resolve(__dirname, './src')
		}
	},
	plugins: [ // 插件
		new CleanWebpackPlugin(['dist'], {
			root: path.resolve(__dirname, '../'),
			verbose: true,
		}),
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