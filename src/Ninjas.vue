<template>
	<div>
		<h2>List of heroes</h2>
		<ul>
			<li v-for="ninja in ninjas">{{ ninja }}</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			ninjas: ['Mercy','Soldier 76','Reaper']
		}
	}
}
</script>
//Scoped style tags only apply to this component
<style scoped>
	h1,h2 {
		color: #AD93A4;
	}
</style>
