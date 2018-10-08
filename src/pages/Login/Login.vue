<template>
	<div class="login-container">
		<div class="header-background"></div>
		<form @submit.prevent="onLoginSubmit" class="login-view">
			<div class="form-group">
				<gp-input id="userName" placeholder='请输入账号' v-model="userName" input-size="large"/>
			</div>
			<div class="form-group">
				<gp-input id="password" type='password' placeholder='请输入密码' v-model="userPwd" input-size="large"/>
			</div>
			<div class="form-group">
				<router-link class="forget-link" to="/forget">忘记了密码?</router-link>
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
				this.$router.push('home')
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
		box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
		.header-background {
			height: 200px;
			border-top-left-radius: .5rem;
			border-top-right-radius: .5rem;
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

	.forget-link {
		padding: .5rem;
		text-decoration: none;
		color: #6495ED;
		&:hover {
			background-color: #F6FAFE;
			color: #1A73E8;
		}
	}
</style>