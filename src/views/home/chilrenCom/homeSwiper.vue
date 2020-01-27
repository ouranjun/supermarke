<template>
  <swipe :auto="4000">
  <swipe-item>122222</swipe-item>
  <swipe-item>233333</swipe-item>
  <swipe-item>333333</swipe-item>
  </swipe>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';

import 'mint-ui/lib/style.css'

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
    Swipe, 
    SwipeItem
  }
}
</script>

<style>

</style>