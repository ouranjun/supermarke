<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'

export default {
  name: 'home',
  components: {
    NavBar
  }
}
</script>

<style scoped>
.nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
</style>
