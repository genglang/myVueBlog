<template>
	<div class="login-container">
		<form @submit.prevent="onForgetSubmit" class="login-view">
			<div class="form-group">
				<label class="form-text" for="userName">账号</label>
				<form-input id="userName" placeholder='请输入账号' v-model="userName" input-size="flex"/>
			</div>
			<div class="form-group">
				<label class="form-text" for="userName">短信验证码</label>
				<form-input id="CAPTCHA" placeholder='请输入验证码' v-model="CAPTCHAMsg" input-size="flex"/>
			</div>
			<div class="form-group">
				<label class="form-text" for="password">密码</label>
				<form-input id="password" type='password' placeholder='请输入密码' v-model="userPwd" input-size="flex"/>
			</div>
			<div class="form-group">
				<label class="form-text" for="password">确认密码</label>
				<form-input id="re-password" type='password' placeholder='请再次输入密码' v-model="userRePwd" input-size="flex"/>
			</div>
			<div class="form-group">
				<gp-button buttonType="primary" buttonSize="large">登录</gp-button>
			</div>
		</form>
	</div>
</template>

<script>
	import GpButton from '../../components/gp-button/GpButton'

	export default {
		name: 'Forget',
		components: {
			GpButton
		},
		data () {
			return {
				userName: '',
				CAPTCHAMsg: '',
				userPwd: '',
				userRePwd:''
			}
		},
		methods: {
			onForgetSubmit () {
				console.log(this.userName)
				console.log(this.CAPTCHAMsg)
				console.log(this.userPwd)
				console.log(this.userRePwd)
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
		top:50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}

	.login-view {
		margin: 1rem;
		padding: 1rem;
	}

	.form-group {
		margin-top: 1rem;
		width: 100%;
		display: flex;
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
	.form-text:after{
		content: '';
		width: 100%;
		display: inline-block;
		overflow: hidden;
	}
</style>