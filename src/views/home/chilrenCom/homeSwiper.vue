<template>
<div id="hy-swiper">
  <swipe :autoplay="3000" indicator-color="white" class="my-swipe" :stop-propagation='false'>
  <swipe-item class="my-swipe-item" v-for="item in banners" :key="item.link" >
    <a :href="item.link">
      <img :src="item.image" alt="" @load="swiperImageLoad">
    </a>
  </swipe-item>
  </swipe> 
</div>
</template>

<script>
// import {Swiper, SwiperItem} from 'common/swiper/index.js'
import {Swipe, SwipeItem} from 'vant'

export default {
  name: 'homeSwiper',
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    },
    recommends: {
      type: Array,
      default () {
        return []
      }
    },
  },
  data () {
    return {
      isLoad: false
    }
  },
  components: {
    Swipe, 
    SwipeItem
  },
  methods: {
    swiperImageLoad () {
      if (!this.isLoad) {
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style>
  .my-swipe{
    width: 100%;
    height: 200px;
  }

  .my-swipe-item{
    height: 100%;
    width: 100%;
  }

  .my-swipe-item img {
    height: 100%;
    width: 100%;
  }

</style>