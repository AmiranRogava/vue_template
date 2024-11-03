<template>
  <div>
    <h1>Shopping Cart</h1>

    <div class="products" v-if="cart.length > 0">
      <Prod 
        v-for="item in cart" 
        :key="item.id" 
        :prod="item" 
        :cart="true"
        
      >
        <button class="del" @click.stop="deleteItem(item.id)">Delete</button>
        <button @click="increase(item)">Increase</button>
        <span>Count: {{ item.count }}</span>
      </Prod>
    </div>

    <div v-else>
      <p>Your cart is empty.</p>
    </div>
  </div>
</template>

<script>
import Prod from "../components/product.vue";

export default {
  components: {
    Prod,
  },
  computed: {
    cart() {
      // Retrieve cart data from the store and convert to an array
      const cartData = this.$store.getters.get_cart;
      return Object.values(cartData).filter(item => item !== null);
    },
  },
  methods: {
    deleteItem(itemId) {
      this.$store.commit("removeItem", itemId);
    },
    increase(item) {
      
      this.$store.commit('addToCart', item);
    },
  }
};
</script>

<style scoped>
.products {
  display: flex;
  padding: 100px 50px;
  gap: 50px;
  flex-wrap: wrap;
}

span, .del, .del + button {
  width: fit-content;
  display: block;
  background-color: grey;
  color: lime;
  border-radius: 10px;
  padding: 5px 10px;
  margin-bottom: 20px;
}
.del {
  background-color: red;
  color: white;
}
.del + button {
  background-color: blueviolet;
  color: white;
}
</style>
