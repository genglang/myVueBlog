<template>
	<input class='formInput'
	       :type="type"
	       :placeholder="placeholder"
	       @input="$emit('input', $event.target.value)"
	/>
</template>

<script>
	export default {
		name: 'FormInput',
		props: {
			type: {
				default: 'text'
			},
			placeholder: {}
		},
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