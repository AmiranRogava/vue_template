<template>
  <div>
    <div class="actions">
        <slot></slot>
    </div>
  
    <div class="product">
      <h2>{{ prod.title }}</h2>
      <p>{{ prod.description }}</p>
      <button v-if="!cart" @click="addToCart">add to cart</button>

      <img :src="prod.image" alt="" />
    </div>
  </div>
</template>

<script>
export default{
    props:{
        prod:Object,
        cart:Boolean
    },
    methods: {
      addToCart() {
        this.$store.commit('addToCart', this.prod);
      }
    }
}
</script>

<style scoped>
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

.actions{
  display: flex;
  width: 100%;
  gap: 20px;
}


</style>
