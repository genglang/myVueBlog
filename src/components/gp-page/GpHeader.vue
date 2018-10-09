<template>
	<header id="header">
		<div id="header-left">
			logo
		</div>
		<div id="header-right">
			<ul class="nav">
				<li class="nab-tab">tab1</li>
				<li class="nab-tab">tab2</li>
				<li class="nab-tab">tab3</li>
			</ul>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'GpHeader'
	}
</script>

<style lang='scss' scoped>
	#header {
		width: 100%;
		height: 50px;
		background-color: #FFFFFF;
		border-bottom: 1px solid #DDDDDD;
		display: flex;
		justify-content: space-between;
		align-items: center;
		#header-left {
			margin-left: 2rem;
		}
		#header-right {
			margin-right: 2rem;
			.nav {
				display: flex;
				.nab-tab {
					padding: 1rem;
				}
			}
		}
	}
</style>