<template>
	<input class='formInput' type="text" :value="defaultText" @input="onInputTextChange" :placeholder="placeholderText">
</template>

<script>
	export default {
		name: 'FormInput',
		props: ['defaultText','placeholderText'],
		methods: {
			onInputTextChange (value) {
				console.log(value)
				this.$emit('onInput',value)
			}
		}
	}
</script>

<style lang='scss' scoped>
	.formInput {
		padding: .5rem;
		border: 1px solid #DDDDDD;
		border-radius: .5rem;
		outline: none; /*去掉焦点边框手写样式*/
		&:focus {
			border: 1px solid #6495ED;
			border-radius: .5rem;
		}
	}
</style>