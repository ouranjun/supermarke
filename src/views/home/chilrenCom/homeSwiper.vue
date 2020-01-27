<template>
<div id="hy-swiper">
  <!-- <mt-swipe class="my-swipe" :prevent='true' :auto="4000" :show-indicators="false">
  <mt-swipe-item class="my-swipe-item" v-for="item in banners" :key="item.link">
    <a :href="item.link">
      <img :src="item.image" alt="">
    </a>
  </mt-swipe-item>
  </mt-swipe> -->
  <swiper class="my-swipe">
  <swiper-item class="my-swipe-item" v-for="item in banners" :key="item.link">
    <a :href="item.link">
      <img :src="item.image" alt="">
    </a>
  </swiper-item>
  </swiper> 
</div>
</template>

<script>
import Vue from 'vue'
import {Swiper, SwiperItem} from 'common/swiper/index.js'

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
    }
  },
  components: {
    Swiper, 
    SwiperItem
  }
}
</script>

<style>
/* @import '~mint-ui/lib/style.css'; */
/* 
 #hy-swiper {
    overflow: hidden;
    position: relative;
}
.my-swipe{
	height: 200px;
}
.my-swipe-item{
  width: 100%;
  flex-shrink: 0;
}
.my-swipe img{
	width: 100%;
} */
</style>