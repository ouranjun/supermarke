<template>
  <swipe :autoplay="3000" indicator-color="white" class="my-swipe" :stop-propagation='false'>
    <swipe-item class="swiper-item" v-for="item in topImages" :key="item">
      <img :src="item" alt="">
    </swipe-item>
  </swipe>
</template>

<script>

import {Swipe, SwipeItem} from 'vant'

  export default {
    data () {
      return {

      }
    },
    components: {
      Swipe, 
      SwipeItem
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

<style scoped>
  .my-swipe {
    width: 100%;
  height: 30rem;
    
  }
  .my-swipe img {
    width: 100%;
    height: 100%;
  }
</style>