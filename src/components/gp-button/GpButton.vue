<template>
	<button :class="['gl-button',buttonSize,buttonType]">
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
			return {}
		}
	}
</script>

<style lang="scss" scoped>
	.gl-button {
		padding: .5rem 1rem;
		color: #FFFFFF;
		border: 1px solid #DDDDDD;
		border-radius: .5rem;
		outline: none;
		&:hover {
			background-color: #6495ED;
		}
		&:active {
			background-color: #323E6A;
		}
		&:focus{
			background-color: #323E6A;
		}
	}

	.small {
		padding-left: 25px;
		padding-right: 25px;
	}

	.medium {
		padding-left: 50px;
		padding-right: 50px;
	}

	.large {
		padding-left: 100px;
		padding-right: 100px;
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