<template>
	<div :class="['input-view',inputSize]">
		<input :class="['form-input',inputSize]"
		       :type="type"
		       :maxlength="maxlength"
		       :minlength="minlength"
		       :disabled="disabled"
		       :readonly="readonly"
		       :autofocus="autofocus"
		       :max="max"
		       :min="min"
		       @input="$emit('input', $event.target.value)"
		       @change="$emit('change', $event.target.value)"
		       @blur="$emit('blur', $event.target.value)"
		       @focus="$emit('focus', $event.target.value)"
		       @clear="$emit('clear', $event.target.value)"
		/>
		<div class="input-focus-border"></div>
		<div class="input-placeholder">{{placeholder}}</div>
	</div>
</template>

<script>
	export default {
		name: 'GpInput',
		props: {
			type: {
				default: 'text'
			},
			inputSize: {
				default: 'small',
				validator: function (value) {
					return ['small', 'medium ', 'large', 'flex'].indexOf(value) !== -1
				}
			},
			maxlength: Number,
			minlength: Number,
			placeholder: {},
			disabled: Boolean,
			readonly: Boolean,
			autofocus: Boolean,
			max: Number,
			min: Number,
		},
	}
</script>

<style lang='scss' scoped>
	.input-view {
		margin-top: 1rem;
		margin-bottom: 1rem;
		border-bottom: 1px solid #DDDDDD;
		position: relative;
		.input-focus-border { // input框下边
			width: 0;
			position: absolute;
			top: 100%;
			left: 50%;
			border-bottom: 2px solid;
			border-color: #6495ED;
		}
		.input-placeholder { // input 框文字
			position: absolute;
			top: 0;
			color: #CCCCCC;
			z-index: -1;
		}
		.form-input { // input框
			font-size: 1rem;
			border: none;
			outline: none; /*去掉焦点边框手写样式*/
			background-color: rgba(255, 255, 255, 0);
			&:focus ~ .input-placeholder { // input框获得焦点后input框文字样式和动画
				font-size: .75rem;
				color: #6495ED;
				top: -1rem;
				transition: top .25s, font-size .25s;
			}
			&:focus ~ .input-focus-border { // input框获得焦点后input框下边样式和动画
				width: 100%;
				left: 0;
				transition: all .25s;
			}
		}
	}

	.small {
		width: 200px;
	}

	.medium {
		width: 350px;
	}

	.large {
		width: calc(100% - 2rem);
	}

</style>