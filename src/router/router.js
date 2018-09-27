import Router from 'vue-router'
import routes from './routes'

export default () => { // 防止SSR时内存溢出
	return new Router({
		routes,
		mode:'hash' //todo 修改为history会导致build空白
	})
}