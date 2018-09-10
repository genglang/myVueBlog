<template>
	<div class="login-container">
		<div class="header-background"/>
		<form @submit.prevent="onLoginSubmit" class="login-view">
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
	</div>
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
	.login-container {
		width: 400px;
		border: 1px solid #DDDDDD;
		border-radius: .5rem;
		padding: 1rem;
		position: fixed;
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
		.header-background {
			margin: 1rem 2rem;
			height: 200px;
			background: url("/../../images/header.jpg") no-repeat center center;
			background-size: cover;
		}
	}

	.login-view {
		margin: 1rem;
		padding: 1rem;
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