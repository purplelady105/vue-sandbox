<template>
	<div>
		<nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
				<a v-on:click="navigateTo('')" href="#" class="navbar-brand"><i class="fab fa-vuejs"></i> {{ title }} <span id="hacked"><img src="../assets/hacked.png" /></span></a>
				<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
				</button>
				<button v-on:click="clickAction()" class="navbar-toggler pull-xs-right" id="navbarSideButton" type="button"><i class="fas fa-compass"></i></button>
				<!-- menu items -->
				<ul v-bind:class="{ reveal:isActive }" class="navbar-side" id="navbarSide">
					<li v-for="link in links" class="navbar-side-item">
						<a v-on:click="navigateTo(link.page),closeMenu()" href="#" class="side-link"><i v-bind:class="link.icon"></i> {{ link.title }}</a>
					</li>
				</ul>
				<div v-show="isActive" v-on:click="isActive = !isActive" class="overlay"></div>
		</nav>
		<button v-on:click="takeScreenshot()" class="btn btn-primary btn-circle" title="Take a screenshot">
			<i class="fas fa-lg fa-camera"></i>
		</button>
	</div>
</template>

<script>
/* eslint-disable */
import html2canvas from 'html2canvas'

export default {
	data() {
		return {
			title: "VueJS Sandbox",
			isActive: false,
			links: [
				{icon: 'fa-fw fab fa-blogger', title: 'Welcome', page: 'page-welcome'},
				{icon: 'fa-fw fab fa-blogger', title: 'Blog', page: 'add-blog'}
			]
		}
	},
	methods: {
		clickAction() {
			this.isActive = !this.isActive
		},
		navigateTo(pageTitle) {
			this.$emit('clicked', pageTitle)
		},
		closeMenu() {
			this.isActive = false
		},
		takeScreenshot() {
			/*html2canvas(document.body).then(function(canvas) {
				document.body.appendChild(canvas)
			})*/
			html2canvas(document.body).then(function(canvas) {
				var img = canvas.toDataURL("image/png")
				console.log(img)
				// window.open(img);
			})
		}
	}
}
</script>

<style scoped>
#hacked>img {
	height: 50%;
	width: auto;
}
.btn-circle.btn-xl {
		width: 70px;
		height: 70px;
		padding: 10px 16px;
		border-radius: 35px;
		font-size: 24px;
		line-height: 1.33;
}

.btn-circle {
		width: 30px;
		height: 30px;
		padding: 6px 0px;
		border-radius: 15px;
		text-align: center;
		font-size: 12px;
		line-height: 1.42857;
}
a {
	color: #D6C9D1;
}
a:hover,a:focus {
	color: #AD93A4;
	text-decoration: none;
}
/*top navbar*/
.navbar-inverse {
	background-color: #5A2648;
	border: none;
	height: 50px;
}
.navbar-inverse .navbar-brand {
	color: #D6C9D1;
}
/*side navbar*/
#navbarSideButton {
	color: #D6C9D1;
}
.navbar-side {
	height: 100%;
	width: 25%;
	position: fixed;
	top: 50px;
	right: 0;
	padding: 0;
	list-style: none;
	border-left: 2px solid #AD93A4;
	background-color: #431C36;
	overflow: scroll;
	z-index: 1000;
	/*open menu animation*/
	-webkit-transform: translateX(100%);
	-ms-transform: translateX(100%);
	transform: translateX(100%);
	-webkit-transition: 300ms ease;
	transition: 300ms ease;
}

/*Extra small devices (portrait phones, less than 576px)*/
@media (max-width: 575px) { .navbar-side { width: 90% } }

/*Small devices (landscape phones, less than 768px)*/
@media (max-width: 767px) { .navbar-side { width: 85% } }

/*Medium devices (tablets, less than 992px)*/
@media (max-width: 991px) { .navbar-side { width: 50% } }

.navbar-side-item {
	padding: 1rem 0;
	margin: 0;
	border-bottom: 2px solid #AD93A4;
	height: 4rem;
}
.navbar-side-item:hover,.navbar-side-item:focus {
	background-color: #5A2648;
}
.side-link {
	padding-left: 2rem;
}
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	cursor: pointer;
	background-color: #ccc;
	opacity: 0.6;
	z-index: 990;
}
/*Add class when navbar button is clicked to show the menu*/
.reveal {
 -webkit-transform: translateX(0%);
 -ms-transform: translateX(0%);
 transform: translateX(0%);
 -webkit-transition: 300ms ease;
 transition: 300ms ease;
}
</style>
