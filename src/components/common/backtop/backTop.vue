<template>
  <div class="back-top">
    <img src="./top.png">
  </div>
</template>

<script>
export default {
  name: 'backTop',
  methods: {
    
  }
}
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 8px;
    bottom: 60px;
    z-index: 9
  }
  .back-top img {
    width: 43px;
    height: 43px;
  }

</style>