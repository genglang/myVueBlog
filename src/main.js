import Vue from 'vue'
import './css/index.scss'
import App from './app.vue'
import FormInput from './components/FormInput'
import GpButton from './components/GpButton'

Vue.component('form-input',FormInput)
Vue.component('gp-button',GpButton)

new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})