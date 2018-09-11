<template>
	<input :class="['formInput',inputSize]"
	       :type="type"
	       :placeholder="placeholder"
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

	.small {
		width: 200px;
	}

	.medium {
		width: 350px;
	}

	.large {
		width: calc(100% - 1rem);
	}

	.flex {
		flex: 1
	}
</style>