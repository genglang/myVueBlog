<template>
	<form @submit.prevent="onLoginSubmit" class="login-view">
		<div class="header-background"/>
		<div class="form-group">
			<label class="form-text" for="userName">账号</label>
			<form-input id="userName" placeholder='请输入账号' v-model="userName" input-size="flex"/>
		</div>
		<div class="form-group">
			<label class="form-text" for="password">密码</label>
			<form-input id="password" type='password' placeholder='请输入账号' v-model="userPwd" input-size="flex"/>
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
	.login-view {
		margin: 1rem;
		border: 1px solid #DDDDDD;
		padding: 2rem;
		.header-background{
			background: url("../../images/header.png");
		}
	}

	.form-group {
		margin-top: .5rem;
		width: 100%;
		display: flex;
	}

	.form-text {
		margin: .5rem;
	}
</style>