<template>
  <router-view v-slot="{Component}">
    <nav>
      <router-link :to="{path:'/'}"> home </router-link>

      <router-link :to="{path:'/about'}"> about </router-link>
      <router-link :to="{path:'/cart'}"> cart </router-link>
    </nav>

    <component :is="Component"></component>
  </router-view>
</template>

<script>
export default{
    created(){
        this.fetch_prods()
    },
    methods:{
        async fetch_prods(){
            if (localStorage.getItem("products")){
                this.$store.commit("updateProds", JSON.parse(localStorage.getItem("products")))
                return;
            }
            try{
                const res = await this.$axios.get("https://fakestoreapi.com/products")
         
                localStorage.setItem("products", JSON.stringify(res)  )

                this.$store.commit("updateProds", res)

            }catch (err){
                console.error("failed to fetch data", err)
            }
   
        }
    }
}
</script>
<style scoped>
nav {
  padding: 10px 50px;
  display: flex;
  gap:10px;
}
a {
    text-decoration: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    transition: background-color 0.3s ease, transform 0.3s ease; 
    color: white;
    background-color: transparent;
  }
  
  a:hover {
    background-color: #b300b3;
    color: white;
    transform: scale(1.05);
  }
  
  a:active {
    background-color: #800080;
    transform: scale(0.98);
  }
</style>

