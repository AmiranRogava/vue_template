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
    prod_id() {
      return this.$route.params.id
    },
  },
  mounted() {
    this.product = this.$store.getters.get_product(this.prod_id)
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
  margin-bottom: 20px;
}

.product-detail h1 {
  font-size: 32px;
  margin-bottom: 20px;
  padding:0;

}

.product-detail p {
  font-size: 18px;
  color: #cccccc;
}
</style>
