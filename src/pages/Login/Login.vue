<template>
	<div class="login-container">
		<div class="header-background"/>
		<form @submit.prevent="onLoginSubmit" class="login-view">
			<div class="form-group">
				<form-input id="userName" placeholder='请输入账号' v-model="userName" input-size="large"/>
			</div>
			<div class="form-group">
				<form-input id="password" type='password' placeholder='请输入密码' v-model="userPwd" input-size="large"/>
			</div>
			<div class="form-group">
				<a class="forget-link" href="#">忘记了密码?</a>
				<gp-button buttonType="primary" buttonSize="medium">登录</gp-button>
			</div>
		</form>
	</div>
</template>

<script>
	import GpButton from '../../components/gp-button/GpButton'

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
		width: 500px;
		border: 1px solid #DDDDDD;
		border-radius: .5rem;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		.header-background {
			height: 200px;
			background: url("../../images/header.jpg") no-repeat center center;
			background-size: cover;
		}
	}

	.login-view {
		.form-group {
			margin: 2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		.form-text {
			width: 4rem;
			margin: 0 1rem;
			line-height: 1rem;
			height: 1rem;
			overflow: hidden;
			text-align: justify;
		}
		.form-text:after {
			content: '';
			width: 100%;
			display: inline-block;
			overflow: hidden;
		}
	}
	.forget-link{
		color: #6495ED;
	}
</style>