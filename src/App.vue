<template>
  <div id="app">
    <router-view />
    <MianTabBar/>
  </div>
</template>

<script>
import MianTabBar from 'common/mainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MianTabBar
  }
}
</script>

<style>
 @import url('~assets/css/base.css');
</style>
