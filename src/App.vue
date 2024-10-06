<template>
  <div>
    <h1>hello vue</h1>
    <div class="posts">
      <Post @sorting="sorting" :info="value" :key="i" v-for="(value, i) in post_sort" />
    </div>
  </div>
  <h2>gela</h2>
</template>

<script>
import data from "./data.json"
import Post from "./components/post.vue"

export default {
  components: {
    Post
  },
  data() {
    return {
      posts: []
    }
  },
  created() {
    this.posts = data
  },
  computed: {
    post_sort() {
      return this.posts.sort((a, b) => (b.likes || 0) - (a.likes || 0))
    }
  },
  methods: {
    sorting(post) {
      // console.log(post)
      this.posts.sort((a, b) => b.likes - a.likes)
    }
  }
}
</script>
