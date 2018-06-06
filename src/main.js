import Vue from 'vue'
import App from './App.vue'

/*Globally register component from Ninjas.vue*/
//Vue.component('ninjas', Ninjas)

new Vue({
  el: '#app',
  render: h => h(App)
})
