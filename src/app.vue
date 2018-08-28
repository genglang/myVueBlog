<template>
    <div id="app">
       {{name}}
        <Login></Login>
    </div>
</template>

<script>
	import Login from './pages/Login/Login'

	export default {
		name: 'App',
        components:{
			Login
        },
		data () {
			return {
				name: 'app'
			}
		}
	}
</script>


<style lang='scss' scoped>
    #app {
    }
</style>