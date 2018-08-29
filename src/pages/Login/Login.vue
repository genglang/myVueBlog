<template>
    <div class="LoginView">
        <FormInput/>
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
		}
	}
</script>

<style lang='scss' scoped>
    LoginView {
    }
</style>