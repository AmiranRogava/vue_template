<template>
  <router-view v-slot="{Component}">
    <nav>
      <router-link :to="{path:'/'}"> home </router-link>

      <router-link :to="{path:'/about'}"> about </router-link>
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


