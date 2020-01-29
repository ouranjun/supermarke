<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 滚动区域 -->
    <scroll class="content" ref="scroll" :probe-type='3' @scroll='scroll'>
    <home-swiper :banners='banners' />
    <recommend-view :recommends='recommends' />
    <feature-view/>
    <tab-control :titles="['流行', '新款', '精选']" class="tab-control" @tabClick='tabClick' />
    <good-list :goods='showGoods' />
    <div class="footer">ㅡㅡㅡ我是有底线的ㅡㅡㅡ</div>
    </scroll>
    <back-top @click.native="backTop" v-show="isShow" />
    
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import homeSwiper from './chilrenCom/homeSwiper'
import recommendView from './chilrenCom/recommendsView'
import FeatureView from './chilrenCom/FeatureView'
import TabControl from 'content/tabcontrol/TabControl'
import GoodList from 'content/goods/GoodsList'
import BackTop from 'common/backtop/backTop'

import { getHomeMultidata, getHomeGoods } from 'network/home'

import Scroll from 'common/scroll/Scroll'

export default {
  name: 'home',
  computed: {
    showGoods () {
      return this.goods[this.currentType].list
    }
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentType: 'pop',
      isShow: false
    }
  },
  components: {
    NavBar,
    homeSwiper,
    recommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  created () {
    // 1. 请求多个数据
    this.getHomeMultidata()
    // 2. 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /**
     * 事件监听处理
     */
    tabClick (index) {
      switch (index) {
        case 0 :
          this.currentType = 'pop';
          break;
        case 1 : 
          this.currentType = 'new';
          break;
        case 2 :
          this.currentType = 'sell';
          break;
      }
  },
    backTop () {
      this.$refs.scroll.scrollTo(0, 0)
    },
    scroll (position) {
      this.isShow = (-position.y) > 1000
    },
    /**
     * 网络请求事件
     */
    // 1. 请求多个数据
    getHomeMultidata () { 
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    // 2. 请求商品数据
    getHomeGoods (type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
      })
    }
  }
}
</script>

<style scoped>
.home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
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
 .tab-control{
   position: sticky;
   top: 43px;
   z-index: 9
 }
 .content {
   overflow: hidden;
   position: absolute;
   top: 44px;
   right: 0;
   bottom: 49px;
   left: 0;
 }
 .footer {
   text-align: center;
   font-size: 13px;
   color: rgba(0, 0, 0, 0.3);
   padding: 20px
 }
</style>
