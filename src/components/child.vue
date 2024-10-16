<template>
    <div>
      <!-- Named scoped slots -->
      <slot name="header" :text="headerText" :count="headerCount">
        

      </slot>
  
      <slot name="default" :text="defaultText" :count="defaultCount"></slot>
  
      <slot name="footer" :text="footerText" :count="footerCount"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
    data() {
      return {
        headerText: 'Header Text',
        headerCount: 10,
        defaultText: 'Default Content',
        defaultCount: 20,
        footerText: 'Footer Text',
        footerCount: 30,
      };
    }
  }
  </script>
  
  <style scoped>
  div {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 10px 0;
  }
  </style>
  