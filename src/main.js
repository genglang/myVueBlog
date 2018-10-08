import Vue from 'vue'
import VueRouter from 'vue-router'
import createRouter from './router/router'
import './css/index.scss'
import App from './app.vue'
import GpHeader from './components/gp-page/GpHeader'
import GpFooter from './components/gp-page/GpFooter'
import GpInput from './components/gp-input/GpInput'
import GpButton from './components/gp-button/GpButton'
import GpToast from './components/gp-toast/GpToast'

Vue.use(VueRouter)
Vue.component('gp-header', GpHeader)
Vue.component('gp-footer', GpFooter)
Vue.component('gp-input', GpInput)
Vue.component('gp-button', GpButton)
Vue.component('gp-toast', GpToast)


const router = createRouter()
new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: {
		App
	}
})