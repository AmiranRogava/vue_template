<template>
  <div>
    <MyComponent v-slot="slotProps">
      <!-- Display the values passed from MyComponent -->
      <p>{{ slotProps.text }} - Count: {{ slotProps.count }}</p>
    </MyComponent>
  </div>
</template>

<script>
import MyComponent from './components/child.vue';

export default {
  components: {
    MyComponent
  }
}
</script>

<style scoped>
p {
  font-size: 18px;
  color: #333;
}
</style>
