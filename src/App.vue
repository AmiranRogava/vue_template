<template>
  <FancyButton @button-clicked="handleClick">
    Click me!
  </FancyButton>
</template>

<script>
import FancyButton from './FancyButton.vue';

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
