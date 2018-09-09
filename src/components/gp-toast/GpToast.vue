<template>
	<div class="toast-view">{{this.toastTitle}}</div>
</template>

<script>
	export default {
		name: 'GpToast',
		props: {
			toastTitle: {
				default: 'text'
			}
		}
	}
</script>

<style scoped>
	.toast-view {
		padding: 5px 10px;
		border-radius: 5px;
		position: fixed;
		bottom: 20%;
		left: 50%;
		z-index: 999;
		transform: translate(-50%, -50%);
		background-color: rgba(169, 169, 169, 0.3);
	}
</style>