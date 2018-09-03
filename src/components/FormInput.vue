<template>
	<input :class="['formInput',size]"
	       :type="type"
	       :placeholder="placeholder"
	       @input="$emit('input', $event.target.value)"
	       maxlength="maxlength"
	       minlength="minlength"
	       disabled="disabled"
	       readonly="readonly"
	       autofocus="autofocus"
	       max="max"
	       min="min"
	/>
</template>

<script>
	export default {
		name: 'form-input',
		props: {
			type: {
				default: 'text'
			},
			size:{
				default: 'medium',
				validator:function (value) {
					return ['medium ', 'small ', 'mini'].indexOf(value) !== -1
				}
			},
			maxlength:Number,
			minlength:Number,
			placeholder: {},
			disabled: Boolean,
			readonly:Boolean,
			autofocus: Boolean,
			max:Number,
			min:Number,
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
	.small{

	}
</style>