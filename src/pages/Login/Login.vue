<template>
	<div class="LoginView">
		<FormInput default-text='' placeholderText='请输入账号' @onInput="onInputChange"/>
		<FormInput input-type='password' default-text='' placeholderText='请输入账号' @onInput="onInputChange"/>
	</div>
</template>

<script>
	import FormInput from '../../components/FormInput'

	export default {
		name: 'Login',
		components: {
			FormInput
		},
		data () {
			return {}
		},
		methods: {
			onInputChange (value) {
				console.log('===========')
				console.log(value)
			}
		}
	}
</script>

<style lang='scss' scoped>
	.LoginView {
		margin: 1rem;
	}
</style>