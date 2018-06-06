<template>
  <div id="heroes">
    <ul>
      <li v-for="hero in heroes" v-on:click="hero.show = !hero.show" class="bordered-div">
        <h3>{{ hero.name }}</h3>
        <h4 v-show="hero.show">{{ hero.role }}</h4>
        <p v-show="hero.show">
          {{ hero.ultimate }}
        </p>
      </li>
    </ul>
    <button v-on:click="deleteHero" class="btn btn-aubergine">Delete Hero</button>
  </div>
</template>

<script>
export default {
  /*Receive props layout above*/
  props: {
    heroes: {
      type: Array, /*Validates that data is certain type*/
      required: true /*Will fail if the heroes prop is not handed down*/
    }
  },
  data() {
    return {
      /*Define data to plug in to template on each component*/
    }
  },
  methods: {
    deleteHero: function() {
      this.heroes.pop();
    }
  }
}
</script>

<style scoped>
#heroes {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  cursor: pointer;
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  /*border: 1px solid #222;*/
  margin: 10px;
  background-color: #fff;
}
ul li h3 {
  color: #5a2648;
}
ul li h4 {
  color: #ad93a4;
}
</style>
