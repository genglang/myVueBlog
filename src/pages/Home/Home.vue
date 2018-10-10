<template>
	<div id="home">
		<gp-header></gp-header>
		<main>正文</main>
		<gp-footer></gp-footer>
	</div>
</template>

<script>
	export default {
		name: 'Home'
	}
</script>

<style lang='scss' scoped>
	#home{
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		main{
			flex: 1;
		}
	}
</style>