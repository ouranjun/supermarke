<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners='banners' />
    <recommend-view :recommends='recommends' />
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import homeSwiper from './chilrenCom/homeSwiper'
import recommendView from './chilrenCom/recommendsView'

import {getHomeMultidata} from 'network/home'

export default {
  name: 'home',
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  components: {
    NavBar,
    homeSwiper,
    recommendView
  },
  created () {
    // 1. 请求多个数据
    getHomeMultidata().then(res => {
      // console.log(res);
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
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
