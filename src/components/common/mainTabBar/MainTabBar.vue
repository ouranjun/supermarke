<template>
  <tab-bar>
      <tab-bar-item path='/home'>
        <span slot="item-icon" class="iconfont icon-shouye"></span>
        <span slot="item-text" class="text">首页</span>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <span slot="item-icon" class="iconfont icon-fenlei"></span>
        <span slot="item-text" class="text">分类</span>
      </tab-bar-item>
      <tab-bar-item path='/shopcart'>
        <span slot="item-icon" class="iconfont icon-gouwuche"></span>
        <span slot="item-text" class="text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <span slot="item-icon" class="iconfont icon-profile"></span>
        <span slot="item-text" class="text">我的</span>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'common/tabbar/TabBar'
import TabBarItem from 'common/tabbar/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
