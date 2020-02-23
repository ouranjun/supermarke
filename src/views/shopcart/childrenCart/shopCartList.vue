<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
    <shopCartListItem class="shopCart" @remove='remove' v-for="(item,index) in cartList" :key="index" :index='index' :product='item' />
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
    scroll,
  },
  activated () {
    this.$refs.scroll.refresh();
    console.log('---');
    
  },
  methods: {
    remove (index) {
      this.cartList.splice(index,1)
    }
  }
}
</script>

<style scoped>

  .content {
    overflow: hidden;
    height: calc(100vh - 44px - 49px - 40px);
  } 
  /* .shopCart {
    height: auto;
  } */
</style>