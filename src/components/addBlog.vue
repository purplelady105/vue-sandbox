<template>
  <div id="add-blog">
    <h2>Add a New Blog Post</h2>
    <form>
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
        <label>Offense</label>
        <input type="checkbox" value="offense" v-model="blog.categories" />
        <label>Defense</label>
        <input type="checkbox" value="defense" v-model="blog.categories" />
        <label>Tank</label>
        <input type="checkbox" value="tank" v-model="blog.categories" />
        <label>Support</label>
        <input type="checkbox" value="support" v-model="blog.categories" />
      </div>
      <label>Author:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>
    </form>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Author: {{ blog.author }}</p>
      <p>Blog Categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
      },
      authors: [
        'Allison Broughton',
        'The Purple Lady',
        'The Spectacular Spider-Girl'
      ]
    }
  },
  methods: {

  }
}
</script>

<style>

label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h2 {
  text-align: center;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
