import Vue from 'vue'
import './css/index.scss'
import App from './app.vue'
import FormInput from './components/FormInput'

new Vue({
	el: '#app',
	template: '<App/>',
	components: {
		App
	}
})