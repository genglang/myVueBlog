<template>
	<button :class="[buttonDefaultStyle,buttonSize,buttonType]">
		<slot>按钮</slot>
	</button>
</template>

<script>
	export default {
		name: 'GpButton',
		props: {
			round: false,
			disabled: false,
			icon: '',
			type: {
				default: 'button'
			},
			buttonSize: { // small medium large
				default: 'medium',
				validator:function (value) {
					return ['small', 'medium', 'large'].indexOf(value) !== -1
				}
			},
			buttonType: {  // primary warning error
				default: 'primary',
				validator:function (value) {
					return ['primary', 'warning', 'error'].indexOf(value) !== -1
				}
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