<template>
  <div class="post">
    <h2>{{ info.title }}</h2>
    <p>{{ info.desc }}</p>
    <button @click="increase">like {{ info.likes }}</button>
  </div>
</template>

<script>
export default{
    
    props:{
        info:Object,
        required: true
    },

    methods:{
      increase(){
        this.info.likes++
        this.$emit("sorting", this.info)
      }
    }
}
</script>
