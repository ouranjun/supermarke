<template>
  <div class="shopcart">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar"><div slot="center">购物车({{cartLength}})</div></nav-bar>
    <shop-cart-list class="cart-list" />
    <shop-cart-bottom-bar class="bottom-bar" />
  </div>
</template>

<script>
import navBar from 'common/navbar/NavBar'
import shopCartList from './childrenCart/shopCartList'
import shopCartBottomBar from './childrenCart/shopCartBottomBar'
export default {
  name: 'shopcart',
  components: {
    navBar,
    shopCartList,
    shopCartBottomBar
  },
  computed: {
    cartLength () {
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style scoped>
  .shopcart{  
    height: 100vh;
  }
 .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
 }
 .cart-list {
    position: absolute;
    top: 44px; 
    bottom: 40px; 
    width: 100%; 
    
  }

</style>