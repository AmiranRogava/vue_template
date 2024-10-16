<template>
  <div>
    <MyComponent>
      <!-- Named scoped slot for header -->
      <template #header="{ text, count }">
        <h2>{{ text }} ({{ count }})</h2>
      </template>

      <!-- Named scoped slot for default content -->
      <template #default="{ text, count }">
        <p>{{ text }} ({{ count }})</p>
      </template>

      <!-- Named scoped slot for footer -->
      <template #footer="{ text, count }">
        <footer>{{ text }} ({{ count }})</footer>
      </template>
    </MyComponent>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue';

export default {
  components: {
    MyComponent
  }
}
</script>

<style scoped>
h2 {
  color: #333;
}

p {
  font-size: 18px;
}

footer {
  font-style: italic;
  color: #666;
}
</style>
