<template>
  <div>
        <h1>{{name}}</h1>
  </div>
</template>

<script >
export default{
  data(){
    return {
      name:null
    }
  },

  mounted(){
    this.name = this.$route.params.name
  }

}
</script>


<style>

</style>
