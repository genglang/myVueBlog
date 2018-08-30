<template>
	<button :class="[gl-button,buttonType]">
		{{text}}
	</button>
</template>

<script>
	export default {
		name: 'GpButton',
		props: {
			size: {
				default: 'medium',
			},
			type: {},
			round: false,
			disabled: false,
			icon: '',
			text: {
				default: '按钮'
			},
			type: {
				default: 'button'
			},
			buttonType:{
				default: 'primary'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gl-button{
		border: 1px solid #ddd;
	}
	.primary{
		background-color: green;
	}

	.warning{
		background-color: yellow;
	}

	.error{
		background-color: red;
	}
</style>