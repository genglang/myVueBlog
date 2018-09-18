import Login from '../pages/Login/Login'
import Froget from '../pages/Login/Forget'

export default [
	{
		path: '/',
		redirect: '/login'
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/forget',
		component: Froget
	}
]