<template>
<div id="hy-swiper">
  <swiper class="my-swipe">
  <swiper-item class="my-swipe-item" v-for="item in banners" :key="item.link" >
    <a :href="item.link">
      <img :src="item.image" alt="" @load="swiperImageLoad">
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
    },
  },
  data () {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper, 
    SwiperItem
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

</style>