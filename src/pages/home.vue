<template>
  <div>
        <h1>home</h1>
        <button @click="openInner(name)">open</button>
  </div>
</template>

<script  >
export default{
  data() {
    return {
      name:"gela"
    }
  },
  methods:{
    openInner(name){
      this.$router.push({ name: 'Inner', params: { name } });
    }
  }
}
</script>


<style>

</style>