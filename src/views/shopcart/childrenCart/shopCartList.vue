<template>
  <div class="cart-list">
    <scroll ref="scroll" class="content">
    <shopCartListItem v-for="(item,index) in cartList" :key="index" :product='item' />
    </scroll>
  </div>
</template>

<script>
import shopCartListItem from './shopCartListItem'

import scroll from 'common/scroll/Scroll'

export default {
  name: 'shopCartList',
  computed: {
    cartList () {
      return this.$store.state.cartList
    }
  },
  components: {
    shopCartListItem,
    scroll
  },
  activated () {
    this.$refs.scroll.refresh();
    console.log('---');
    
  }
}
</script>

<style scoped>
  .cart-list {
    height: calc(100% -44px -49px -40px);
  }
  .content {
    overflow: hidden;
    height: 100%;
   
  } 
</style>