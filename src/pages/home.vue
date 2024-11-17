<template>
  <div>
    <h1>home</h1>
    <!-- <button @click="openProduct(name)">open product</button> -->
    <br />
    <input
      type="text"
      v-model="query"
      @input="search()"
      name=""
      id=""
      placeholder="search"
    />
    <select v-model="category" @change="search">
      <option value=""> all</option>

      <option v-for="cat in categories" :key="cat" :value="cat">
        {{ cat }}  
      </option>

    </select>

    <div class="products">
      <Prod
        :prod="prod"
        v-for="(prod, index) in filtered"
        :key="index"
        
        @add-to-cart="addToCart"
      ></Prod>
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
      name:"cart",
      products: [],
      filtered: [],
      query: "",

      category:"",
      categories:[]

    }
  },
  mounted(){
    this.products = this.$store.getters.get_products
    this.filtered = this.products
    this.categories = [...new Set(this.products.map(p => p.category))]
  },
  methods:{
    openProduct(name){
      this.$router.push({ name: 'Product', params: { name } });
    },
    search(){
      this.filtered = this.products.filter(el => {

        const mQuery = el.title.toLowerCase().includes(this.query.toLowerCase())
        const mCat = this.category ? el.category === this.category : true
        return mQuery && mCat

      })

    
    },
    addToCart(product) {
      this.$store.commit('addToCart', product); // Add product to cart in Vuex store
    }
  }
}
</script>

<style scoped>
.products{
  display: flex;
  max-width: 100%;
  padding: 50px;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 50px auto;
  justify-content: space-between;
  gap: 40px;
}
.products div{
  width: calc(100% / 4 - 30px);
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
@media screen and (max-width:1200px) {
  .products div{
    width: calc(100% / 3 - 30px);
  }
}
@media screen and (max-width:900px) {
  .products div{
    width: calc(100% / 2 - 20px);
  }
}

@media screen and (max-width:600px) {
  .products div{
    width: 100%;

  }


}
</style>
