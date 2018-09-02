<template>
	<button :class="[buttonDefaultStyle,buttonType]">
		<slot></slot>
	</button>
</template>

<script>
	export default {
		name: 'GpButton',
		props: {
			size: {
				default: 'medium',
			},
			round: false,
			disabled: false,
			icon: '',
			type: {
				default: 'button'
			},
			buttonType: {
				default: 'primary'
			}
		},
		data () {
			return {
				buttonDefaultStyle: 'gl-button'
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gl-button {
		padding: .5rem 1rem;
		border: 1px solid #DDDDDD;
		border-radius: .5rem;
		outline: none;
	}

	.primary {
		background-color: green;
	}

	.warning {
		background-color: yellow;
	}

	.error {
		background-color: red;
	}
</style>