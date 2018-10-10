<template>
  <div id="app">
    <router-view></router-view>
    <!--<Login></Login>-->
    <!--<Forget></Forget>-->
    <!--<div>跳转主页</div>-->
    <!--<gp-toast></gp-toast>-->
  </div>
</template>

<script>
	import Login from './pages/Login/Login'
	import Forget from './pages/Login/Forget'

	export default {
		name: 'App',
		components: {
			Login,
			Forget
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