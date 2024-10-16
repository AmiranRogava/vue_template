<template>
    <div>
      <!-- Provide slot with props -->
      <slot :text="text" :count="count">
        
      </slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
    data() {
      return {
        text: 'Hello, world!',
        count: 42
      };
    }
  }
  </script>
  
  <style scoped>
  div {
    padding: 20px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
  }
  </style>
  