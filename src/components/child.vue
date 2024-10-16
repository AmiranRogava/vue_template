<template>
    <button class="fancy-btn" @click="onClick">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'FancyButton',
    props: {
      onClick: {
        type: Function,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .fancy-btn {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;
  }
  
  .fancy-btn:hover {
    background-color: #45a049;
  }
  </style>
  