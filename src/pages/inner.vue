<template>
  <div class="product-detail">
    <h1>{{ product.title }}</h1>
    <img :src="product.image" alt="" />
    <p>{{ product.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
    };
  },
  computed: {
    productId() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.product = this.$store.getters.get_cart.find(
      (item) => item.id === this.productId
    );
  },
};
</script>

<style scoped>
/* Product Component Styles */
.product-detail {
  max-width: 600px;
  margin: auto;
  padding: 50px;
}

.product-detail img {
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.product-detail h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

.product-detail p {
  font-size: 18px;
}
</style>
