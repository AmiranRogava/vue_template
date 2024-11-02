<template>
  <div>
    <h1>{{name}}</h1>

    <div class="products" v-if="cart.length > 0">

      <div class="product" v-for="(item, index) in cart" :key="index">

        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <button @click="deleteItem(item.id)">Delete</button>
        <img :src="item.image" alt="" />

      </div>

    </div>

    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script >
export default{
  data(){
    return {
      name:null
    }
  },

  computed: {
    cart() {
      return this.$store.getters.get_cart.filter((item, index, self) =>
        index === self.findIndex((t) => t.id === item.id)
      );
    },
  },

  mounted(){
    this.name = this.$route.params.name
  },

  methods: {
  deleteItem(itemId) {
    this.$store.commit('removeItem', itemId);
  },
},


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
.product{
  max-width: 300px;
  position: relative;
  overflow: hidden;

}
.product:hover p,
.product:hover h2, 
.product:hover button {
opacity: 1;

}

p, h2 , button{
  opacity: 0; /* Set the default opacity to 0 */
  transition: opacity 0.3s;
  color: white;
}

p {
  cursor:normal;
  position: absolute;
  bottom: 20px;
  padding: 30px 10px;
  overflow: hidden;        /* Hide any overflow text */
  white-space: wrap;     /* Prevents text from wrapping to a new line */
  text-overflow: ellipsis; /* Adds '...' at the end of the text */
  height: 300px;

  
  transition:  opacity 0.3s;
}
h2{
  display: block;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5); /* Backdrop for better contrast */
  color: white;
  font-size: 24px;
  padding: 30px 10px;
  width: 300px;
  height: 100%;
  backdrop-filter: blur(2px);

}
img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;

}
button{
  position: absolute;
  bottom: 20px;
  left:0;
  right:0;
  width:fit-content;
  margin: auto;
}

</style>
