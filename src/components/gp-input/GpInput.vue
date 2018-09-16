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
		<div class="input-focus"></div>
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
		margin: 1rem;
		border-bottom: 1px solid #DDDDDD;
		position: relative;
		.input-focus {
			width: 0;
			position: absolute;
			top: 100%;
			left: 50%;
			border-bottom: 2px solid;
			border-color: #6495ED;
		}
		.input-placeholder {
			position: absolute;
			top: 0;
			color: #CCCCCC;
			z-index: -1;
		}
		.form-input {
			font-size: 1rem;
			border: none;
			outline: none; /*去掉焦点边框手写样式*/
			background-color: rgba(255, 255, 255, 0);
			&:focus ~ .input-placeholder {
				font-size: .5rem;
				color: #6495ED;
				top: -1rem;
				transition: top .25s, font-size .5s;
			}
			&:focus ~ .input-focus {
				width: 100%;
				left: 0;
				transition: all .5s;
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