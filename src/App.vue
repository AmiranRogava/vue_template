<template>
  <div>
    <child @someEvent="handleEvent" />
  </div>
</template>

<script>
import child from './components/child.vue';

export default {
  components: {
    child
  },
  methods: {
    handleEvent(val) {
      alert(val);
    }
  }
}
</script>
