import Login from '../pages/Login/Login'
import Froget from '../pages/Login/Forget'

export default [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/forget',
		name: 'Forget',
		component: Froget
	}
]