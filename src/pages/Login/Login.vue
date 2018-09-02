<template>
	<form @submit.prevent="onLoginSubmit" class="LoginView">
		<div>
			<label for="userName">账号</label>
			<form-input id="userName" placeholder='请输入账号' v-model="userName"/>
		</div>
		<div>
			<label for="password">密码</label>
			<form-input id="password" type='password' placeholder='请输入账号' v-model="userPwd"/>
		</div>
		<gp-button buttonType="default">登录</gp-button>
	</form>
</template>

<script>
	import GpButton from '../../components/GpButton'

	export default {
		name: 'Login',
		components: {
			GpButton
		},
		data () {
			return {
				userName: '',
				userPwd: ''
			}
		},
		methods: {
			onLoginSubmit () {
				console.log(this.userName)
				console.log(this.userPwd)
			},
		}
	}
</script>

<style lang='scss' scoped>
	.LoginView {
		margin: 1rem;
	}
</style>