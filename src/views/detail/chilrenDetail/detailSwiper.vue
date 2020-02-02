<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>

  import {Swiper, SwiperItem} from 'common/swiper/index.js'

  export default {
    data () {
      return {

      }
    },
    components: {
      Swiper, 
      SwiperItem
    },
    props: {
      topImages: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style>
  .detail-swiper {
    height: 300px;
    overflow: hidden;
  }
  .detail-swiper img {
    width: auto;
    height: auto;
    max-height: 100%;
    max-width: 100%;
  }
</style>