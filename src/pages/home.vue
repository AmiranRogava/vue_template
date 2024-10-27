<template>
  <div>
        <h1>home</h1>
        <button @click="openInner(name)">open</button>
    <div class="products">
      <Prod  :prod="prod" v-for="prod, in products"></Prod> 

    </div>
  </div>
</template>

<script  >
import Prod from "../components/product.vue"

export default{
    components:{
      Prod
    }
  ,
  data() {
    return {
      name:"gela",
      products: []
    }
  },
  mounted(){
    this.products = this.$store.getters.get_products

  },
  methods:{
    openInner(name){
      this.$router.push({ name: 'Inner', params: { name } });
    }
  
  }
}
</script>


<style scoped>
.products{
  display: flex;
  padding: 100px 50px;
  gap: 50px;
  flex-direction: row;

  flex-wrap: wrap;
}

</style>