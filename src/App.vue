<template>
  <div>
    <navbar-top @clicked="navigateToPage"></navbar-top>
    <form-helper>
      <h2 slot="title">{{ title }}</h2>
      <p slot="text">
        <em>This is my sandbox.</em>
      </p>
    </form-helper>
    <keep-alive>
      <component v-bind:is="page" class="bordered-div div-block"></component>
    </keep-alive>
    <!--<app-heroes v-bind:heroes="heroes"></app-heroes>-->
    <!--<add-blog></add-blog>-->
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
/* Imports html from components to be used locally */
import Navbar from './components/navbar-top.vue'
import Header from './components/Header.vue'
import Heroes from './components/overwatch.vue'
import Footer from './components/footer.vue'
import formHelper from './components/formHelper.vue'
import Welcome from './components/welcome.vue'
import addBlog from './components/addBlog.vue'

export default {
  components: {
    'navbar-top': Navbar,
    'app-header': Header,
    'app-heroes': Heroes,
    'app-footer': Footer,
    'form-helper': formHelper,
    'page-welcome': Welcome,
    'add-blog': addBlog
  },
  data () {
    return {
      page: '',
      heroes: [
        {name:'Soldier 76',role:'Offense',ultimate:'Tactical Visor',show:false},
        {name:'Sombra',role:'Offense',ultimate:'EMP',show:false},
        {name:'Mercy',role:'Support',ultimate:'Valkyrie',show:false},
        {name:'Ana',role:'Support',ultimate:'Nano Boost',show:false},
        {name:'Widowmaker',role:'Defense',ultimate:'Infra-Sight',show:false},
        {name:'Zarya',role:'Tank',ultimate:'Graviton Surge',show:false}
      ],
      title: "VueJS Sandbox"
    }
  },
  methods: {
    navigateToPage (value) {
      this.page = value
    }
  }
}
</script>

<style scoped>
  h1,h2 {
    color: #431C36;
  }
</style>

<style>
  /* Created new button to match color scheme */
  .btn-aubergine {
    color: #D6C9D1;
    background-color: #5A2648;
    border-color: #5A2648
  }
  .btn-aubergine:hover {
    color: #AD93A4;
    background-color: #431C36;
    border-color: #2D1324
  }
  .btn-aubergine.focus,
  .btn-aubergine:focus {
    box-shadow: 0 0 0 .2rem rgba(90, 38, 72, .5)
  }
  .btn-aubergine.disabled,
  .btn-aubergine:disabled {
    background-color: #007bff;
    border-color: #007bff
  }
  .btn-aubergine:not([disabled]):not(.disabled).active,
  .btn-aubergine:not([disabled]):not(.disabled):active,
  .show>.btn-aubergine.dropdown-toggle {
    color: #fff;
    background-color: #431C36;
    border-color: #431C36;
    box-shadow: 0 0 0 .2rem rgba(90, 38, 72, .5)
  }
/***********************************************************/
  body {
    background-color: #FFFFFF;
    background-image: url("assets/road.jpg");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    font: 18px Calibri;
    color: #210e1b;
    padding-top: 65px;
  }
  ::-webkit-scrollbar {
      width: 0px;  /* remove scrollbar space */
      background: transparent;  /* optional: just make scrollbar invisible */
  }
  body > .container-fluid {
    padding-top: 10px;
    overflow: scroll;
  }

  hr {
    height: 2px;
    background-color: #5A2648;
    color: #5A2648;
    border: 0 none;
  }

  .bordered-div {
    border: 2px solid #5a2648;
    border-radius: 10px;
  }
  .div-block {
    background-color: #FFFFFF;
    padding: 15px 15px 30px;
    position: relative;
    width: 80%;
    margin: 0 auto;
    overflow: scroll;
  }

  #canvas {
    width: 300px;
    padding: 100px 20px;
    text-align: center;
    border: 1px solid #333;
    margin: 5% auto;
  }
</style>
