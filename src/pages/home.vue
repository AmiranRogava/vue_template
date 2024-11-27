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
    <select v-model="category" @change="search" class="category">
      <option value=""> all</option>

      <option v-for="cat in categories" :key="cat" :value="cat">
        {{ cat }}  
      </option>
    </select>

    <div v-for="(products, category) in grouped" :key="category">
      <h2>{{ category }}</h2>
      <div class="products">
        <Prod
          :prod="prod"
          v-for="(prod, index) in products"
          :key="index"
          @add-to-cart="addToCart"
        ></Prod>
      </div>
    </div>
    
    <!-- <div class="products">
      <Prod
        :prod="prod"
        v-for="(prod, index) in filtered"
        :key="index"
        
        @add-to-cart="addToCart"
      ></Prod>
    </div> -->
    
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
      categories:[],
      grouped: {},
    }
  },
  mounted(){
    this.products = this.$store.getters.get_products
    this.filtered = this.products
    this.categories = [...new Set(this.products.map(p => p.category))]
    this.categorize();
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
      this.$store.commit('addToCart', product);
    },
    categorize() {
      this.categories.forEach((cat) => {
        this.grouped[cat] = this.products.filter((el) => el.category === cat).slice(0, 4);
      });
    },
  }
}
</script>

<style scoped>
.products, section{
  display: flex;
  max-width: 100%;
  padding: 50px;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
  gap: 40px;
}
.products div, section div{
  width: calc(100% / 4 - 30px);
}
input{
  display: block;
  height: 20px;
  width: 200px;
  background-color: purple;
  color: white;
  margin: 10px auto;
  padding: 10px;
  border-radius: 8px;
}
input:hover{
  background-color:#b300b3;
}
input::placeholder {
  color: #cccccc;
}

input:focus::placeholder {
  opacity: 0.4;
}

.category {
  width: 200px;
  height: 20px;
  display: block;
  margin: 10px auto;
  border-radius: 8px;
  background-color: #800080;
  cursor: pointer;
  padding: 0 5px;
}
.category:hover {
  background-color:#b300b3;
}
.category option {
  padding: 10px;
  background-color: purple;
}
h2{
  padding: 0 50px ;
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
