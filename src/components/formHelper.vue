<template>
  <div class="div-block text-center">
    <slot name="title"></slot>
    <h1>This is a Form Helper</h1>
    <slot name="text"></slot>
  </div>
</template>

<script>


export default {
  components: {

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
h1{
  color: #5a2648;
}
</style>
