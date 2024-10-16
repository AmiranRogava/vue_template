<template>
  <BaseLayout>
    <!-- Slot content for the header -->
         
    <template v-slot:header>
      <h1>header content</h1>
    </template>

    
    <template v-slot:main>
      <h1>main slot content</h1>
    </template>


    <!-- Default slot content -->
    <p>This is the main content of the page.</p>

    
  </BaseLayout>
</template>

<script>
import BaseLayout from './components/child.vue';

export default {
  components: {
    BaseLayout
  }
}
</script>
