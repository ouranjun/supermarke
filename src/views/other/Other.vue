<template>
  <div id="other">
    <nav-bar class="nav-bar">
      <div slot="left" @click="back">
        <icon name="arrow-left" />
      </div><div slot="center">我的订单</div>
    </nav-bar>
    <tabs v-model="active" 
          swipeable
          sticky
          type='line'
          :border='false'
          :offset-top="47"
          color="#28BE57"
          title-active-color="#28BE57"
          animated
          animated:yes
          >
      <!-- 全部 -->
      <tab title="全部">
        <OrderType :orderTypeDataArray='typeArray' />
      </tab>
      <!-- 待付款 -->
      <tab title="待付款">
        <OrderType :orderTypeDataArray='typeArray' />
      </tab>
      <!-- 待收货 -->
      <tab title="待收货">
        <OrderType :orderTypeDataArray='typeArray' />
      </tab>
      <!-- 评价 -->
      <tab title="评价">
        <OrderType :orderTypeDataArray='typeArray' />
      </tab>
    </tabs>
    </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import OrderType from './chilren/OrderType'
import { Icon, Tab, Tabs } from 'vant'
export default {
  name: 'other',
  data () {
    return {
      active: this.$route.params.active,
      typeArray: [],
    }
  },
  components: {
    NavBar,
    Icon,
    Tabs,
    Tab,
    OrderType
  },
  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
  #other {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #f5f5f5;
    z-index: 999;
  }
</style>