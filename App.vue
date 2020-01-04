<template>
	<div id="app" class="container">
		<div class="col-xs-12">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
    name: 'app'
  }
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>