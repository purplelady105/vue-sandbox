<template>
	<footer>
			<p v-html="copyright"></p>
	</footer>
</template>

<script>
import { bus } from '../main';

export default {
	props: {
		title: {
			type: String
		}
	},
	data() {
		return {
			copyright: "<i class='fas fa-copyright'></i> 2018 Allison's Sandbox"
		}
	}
}
</script>

<style scoped>
	footer {
		left: 0;
		bottom: 0;
		height: 4%;
		width: 100%;
		padding: 5px;
		z-index: 2000;
		color: #d6c9d1;
		position: fixed;
		text-align: center;
		background-color: #5A2648;
	}
</style>
