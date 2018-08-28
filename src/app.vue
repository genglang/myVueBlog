<template>
    <div id="app">
        {{mingName}}
        <div>{{doSth}}</div>
    </div>
</template>

<script>
	export default {
		name: 'App',
		data () {
			return {
				mingName: '明老板',
				doSth: '嫖娼萝莉被抓了'
			}
		}
	}
</script>


<style lang='scss' scoped>
    #app {
        width: 100vw;
        height: 100vh;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 48px;
    }
</style>