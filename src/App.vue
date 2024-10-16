<template>
  <div>
    <child>
       <p class="active">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam, ipsam odit porro eaque nihil! Quisquam veniam quia veritatis, laudantium nobis officiis qui, fuga quae at voluptate amet ex. Dolorem?</p>
    </child>
  </div>
</template>

<script>
import child from './components/child.vue';

export default {
  components: {
    child
  },
  data(){
    return{
      data:1
    }
  }

}
</script>
<style scoped>
.active{
  color: green;
}
</style>