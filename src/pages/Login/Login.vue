<template>
	<form @submit.prevent="onLoginSubmit" class="Login-view">
		<div class="form-group">
			<label for="userName">账号</label>
			<form-input id="userName" placeholder='请输入账号' v-model="userName"/>
		</div>
		<div class="form-group">
			<label for="password">密码</label>
			<form-input id="password" type='password' placeholder='请输入账号' v-model="userPwd"/>
		</div>
		<div class="form-group">
			<gp-button buttonType="primary" buttonSize="large">登录</gp-button>
		</div>
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
	.Login-view {
		margin: 1rem;
	}
	.form-group{
		margin-top: .5rem;
	}
</style>