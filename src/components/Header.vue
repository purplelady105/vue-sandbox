<template>
	<header>
		<h1 class="font-weight-bold">{{ title }}</h1>
	</header>
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

		}
	},
	methods: {

	}
}
</script>

<style scoped>
	header {
		padding: 10px;
	}
	h1 {
		color: #5A2648;
		text-align: center;
		text-shadow: 2px 2px 2px #D6C9D1;
	}
</style>
