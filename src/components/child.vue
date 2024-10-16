<template>
    <div>
      <!-- Header Slot -->
      <header>
        <slot name="header"></slot>
      </header>
  
      <!-- Default Slot -->
      <main>
        <slot  name="main"></slot>
      </main>
      
      <slot></slot>
      
      <!-- Footer -->
      <footer>
        <p>Footer content goes here</p>
      </footer>
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseLayout'
  }
  </script>
  
  <style scoped>
  header {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
    font-size: 24px;
  }
  
  main {
    padding: 20px;
  }
  
  footer {
    background-color: #f1f1f1;
    padding: 10px;
    text-align: center;
    margin-top: 20px;
  }
  </style>
  