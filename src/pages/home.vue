<template>
  <div>
    <h1>home</h1>
    <button @click="openInner(name)">open</button>
    <br>
    <input type="text" v-model="query"  @input="search()" name="" id="">
    <div class="products">
      <Prod :prod="prod" v-for="prod, in filtered"></Prod>
    </div>
  </div>
</template>

<script>
import Prod from "../components/product.vue"

export default{
    components:{
      Prod
    }
  ,
  data() {
    return {
      name:"gela",
      products: [],
      filtered: [],
      query: "",
      
    }
  },
  mounted(){
    this.products = this.$store.getters.get_products
    this.filtered = this.products

  },
  methods:{
    openInner(name){
      this.$router.push({ name: 'Inner', params: { name } });
    },
    search(){
      this.filtered = this.query.length != 0 ? this.products.filter(el => el.title.toLowerCase().includes(this.query.toLowerCase())) : this.products;
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
input{
  display: block;
  height: 20px;
  width: 200px;
  background-color: purple;
  color: white;
  margin: 50px auto;    
  padding: 10px;  
}
</style>
