<template>
    <div>
      <!-- Dynamically named slot -->
      <slot name="custom"></slot>
  
      <!-- Default Slot -->
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseLayout'
  }
  </script>
  
  <style scoped>
  div {
    padding: 20px;
    border: 1px solid #ddd;
    margin: 10px 0;
  }
  </style>
  