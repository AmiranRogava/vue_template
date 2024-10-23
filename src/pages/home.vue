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
import axios from "axios"
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
 created(){
    this.fetch_prods()
  },
  methods:{
    openInner(name){
      this.$router.push({ name: 'Inner', params: { name } });
    },
    async fetch_prods(){
      const res = await axios.get("https://fakestoreapi.com/products")
      console.log(res)
      this.products = res.data
    }
  }
}
</script>


<style>

</style>