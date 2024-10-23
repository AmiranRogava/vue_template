<template>
  <div>
    <h2>{{ prod.title }}</h2>
    <p>{{ prod.description }}</p>
    <img :src="prod.image" alt="">
  
  </div>
</template>

<script  >
export default{
    props:{
        prod:Object
    }
}
 
</script>

<style>

</style>