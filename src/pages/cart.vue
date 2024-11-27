<template>
  <h1>Shopping Cart</h1>
  <div v-if="cart.length > 0" class="cart">
    <div>
      <p>Items </p>
      <p>Total Cost: <span>{{ totalCost }} Gel </span> </p>
    </div>
    <div class="products" v-if="cart.length > 0">
      <Prod v-for="item in cart" :key="item.id" :prod="item" :cart="true">
        <button @click="remove(item)">remove</button>
        <button @click.stop="decrease(item.id)">decrease</button>
        <button @click="increase(item)">Increase</button>
        <span>Count: {{ item.count }}</span>
      </Prod>
    </div>


  </div>
  <div v-else class="empty">
    <p>Your cart is empty.</p>
  </div>
</template>

<script>
import Prod from "../components/product.vue";

export default {
  data() {
    return {
      totalCost: 0
    }
  },
  components: {
    Prod,
  },

  computed: {

    cart() {
      // Retrieve cart data from the store and convert to an array
      const cartData = this.$store.getters.get_cart; 
      this.totalCost = this.$store.getters.get_cost;
      return Object.values(cartData).filter(item => item !== null);
    },
  },
  methods: {
    decrease(itemId) {
      this.$store.commit("decrease", itemId);
    },
    increase(item) {

      this.$store.commit('addToCart', item);
    },
    remove(item) {

      this.$store.commit('removeItem', item.id);
    },
  }
};
</script>

<style scoped>
.cart>div:first-child {
  display: flex;
  justify-content: space-between;
  height: fit-content;
  padding: 20px 50px;
}

.cart>div:first-child P {
  color: white;
  font-size: 20px;
}

.cart>div:first-child p span {
  color: red;
}
.products{
  display: flex;
  max-width: 100%;
  padding: 50px;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
  gap: 40px;
}
.products div{
  width: calc(100% / 4 - 30px);
}
.products span,
.products button {
  width: fit-content;
  display: block;
  background-color: grey;
  color: lime;
  border-radius: 10px;
  padding: 5px 5px;
}

.products button:first-child {
  color: white;
  background-color: red;

}

/* decrease */
.products button+button {
  background-color: blueviolet;
  color: white;
}

.products button+button+button {
  background-color: rgba(0, 255, 0, 0.84);
  color: white;
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
.empty {
  padding: 20px 50px;
}
</style>
