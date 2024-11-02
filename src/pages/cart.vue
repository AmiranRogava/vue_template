<template>
  <div>
    <h1>{{ name }}</h1>

    <div class="products" v-if="Object.keys(cart).length > 0">
      <Prod :cart="true"
        v-for="item in cart" 
        :key="item.id" 
        :prod="item" 
        @click="viewProduct(item.id)">
 
        <button class="del" @click.stop="deleteItem(item.id)">Delete</button>
        <span>count: {{ item.count }}</span>
 
      
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
  data() {
    return {
      name: null,
    };
  },
  computed: {
    cart() {
      // Retrieve cart data from the store and convert to an array
      const cartData = this.$store.getters.get_cart;
      return Object.values(cartData).filter(item => item !== null);
    },
  },
  mounted() {
    this.name = this.$route.params.name;
  },
  methods: {
    deleteItem(itemId) {
      this.$store.commit("removeItem", itemId);
    },
    viewProduct(productId) {
      this.$router.push({ name: "Product", params: { id: productId } });
    },
  },
  watch: {
    // Watch the cart computed property for changes
    cart: {
      handler(newCart) {
        console.log("Cart updated:", newCart);
        // Any additional logic when the cart updates can go here
      },
      deep: true, // Enable deep watching to track nested changes
    },
  },
};
</script>

<style scoped>
.products {
  display: flex;
  padding: 100px 50px;
  gap: 50px;
  flex-wrap: wrap;
}



span , .del {
  width: fit-content;
  display: block;
  background-color: grey;
  color: lime;
  border-radius: 10px;
  padding: 5px 10px;
  margin-bottom: 20px;
}
.del{
  background-color: red;
  color: white;
}
</style>
