<template>
  <div id="app">
    <Login></Login>
  </div>
</template>

<script>
	import Login from './pages/Login/Login'

	export default {
		name: 'App',
		components: {
			Login
		},
		data () {
			return {
			}
		}
	}
</script>


<style lang='scss' scoped>
  #app {
  }
</style>