<template>
  <FancyButton :onClick="handleClick">
    Click me!
  </FancyButton>
</template>

<script>
import FancyButton from './components/child.vue';

export default {
  components: {
    FancyButton
  },
  methods: {
    handleClick() {
      alert('Button clicked!');
    }
  }
}
</script>
