<template>
  <div id="app">
    <keep-alive include="home">
      <router-view />
    </keep-alive>
    <MianTabBar v-show="showTab"/>
  </div>
</template>

<script>
import MianTabBar from 'common/mainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MianTabBar
  },
  computed: {
    showTab () {
     if (this.$route.meta.showTab)
      return true
    }
  }
}
</script>

<style>
 @import url('~assets/css/base.css');
</style>
