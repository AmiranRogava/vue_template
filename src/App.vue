<template>
  <BaseLayout>
    <!-- Using v-slot with dynamic slot name -->

   <template v-slot:[slot_name]>
      <p>This is content for the dynamically named slot: "{{ slot_name }}"</p>
    </template>

    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae laborum est blanditiis esse voluptatem autem? Quis eum minus hic repudiandae laboriosam, ratione voluptatem magni, perferendis reprehenderit, vitae natus? Deserunt, iste?</p>

  </BaseLayout>

  <BaseLayout>
      <!-- Using shorthand # with dynamic slot name -->
      <template #[slot_name]>
        <p>This content also uses the dynamically named slot!</p>
      </template>
      
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae laborum est blanditiis esse voluptatem autem? Quis eum minus hic repudiandae laboriosam, ratione voluptatem magni, perferendis reprehenderit, vitae natus? Deserunt, iste?</p>
  </BaseLayout>
</template>

<script>
import BaseLayout from './components/child.vue';

export default {
  components: {
    BaseLayout
  },
  data() {
    return {
      slot_name: 'custom' // Dynamic slot name, can be changed
    }
  }
}
</script>
