<template>
	<form @submit.prevent="onLoginSubmit" class="LoginView">
		<div>
			<label for="userName">账号</label>
			<FormInput id="userName" placeholder='请输入账号' v-model="userName"/>
		</div>
		<div>
			<label for="password">密码</label>
			<FormInput id="password" type='password' placeholder='请输入账号' v-model="userPwd"/>
		</div>
		<button type="submit">登录</button>
		<GpButton></GpButton>
	</form>
</template>

<script>
	import FormInput from '../../components/FormInput'
	import GpButton from '../../components/GpButton'

	export default {
		name: 'Login',
		components: {
			FormInput,
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