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
				validator: function (value) {
					return ['small', 'medium', 'large'].indexOf(value) !== -1
				}
			},
			buttonType: {  // primary warning error
				default: 'primary',
				validator: function (value) {
					return ['primary', 'success', 'warning', 'error', 'info'].indexOf(value) !== -1
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

	.small {
		min-width: 50px;
	}

	.medium {
		min-width: 200px;
	}

	.large {
		width: 100%;
	}

	.primary {
		background-color: #409EFF;
	}

	.success {
		background-color: #67C23A;
	}

	.warning {
		background-color: #E6A23C;
	}

	.error {
		background-color: #F56C6C;
	}

	.info {
		background-color: #909399;
	}
</style>