<template>
  <div>
    <div class="icon-selector" :class="{'selector-active': isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default () {
        return false
      }
    }
  }
}
</script>

<style scoped>
  .icon-selector {
    border-radius: 50%;
    border:2px solid #aaa; 
    overflow: hidden;
  }
  .selector-active {
    border-color: red;
    background: red;
  }
</style>