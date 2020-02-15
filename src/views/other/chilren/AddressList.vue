<template>
  <div id="addressList">
    <NavBar>
      <div slot="left" @click="back">
        <icon name="arrow-left" />
      </div>
      <div slot="center">添加地址</div>
    </NavBar>
    <div>
      <address-list
        v-model="chosenAddressId"
        :list="addressList"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="onBackAddress"
      />
    </div>
    <!-- 路由出口 -->
    <transition name='router-slider' mode="out-in">
    <router-view />
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { getLocalStore } from './global'
import NavBar from 'common/navbar/NavBar'
import { AddressList,Toast,Icon } from 'vant';

// 引入发布订阅
import { CHOOSE_USER_ADDRESS } from 'config/pubsub_type'
import PubSub from 'pubsub-js'

import 'vant/lib/address-list/style'

export default {
  name: 'Address',
  data () {
    return {
      chosenAddressId: ''
    }
  },
  created () {
    if (this.$store.state.addressList.length != 0) {
    let isdefault = this.$store.state.addressList.find(item => item.isDefault === true)
    if(isdefault){
     this.chosenAddressId = isdefault.id
    }
     }
  },
  computed: {
    ...mapState(['addressList'])
  },
  components: {
    NavBar,
    AddressList,
    Icon
  },
  methods: {
    ...mapMutations(['init_UserAddress']),
    onAdd() {
      this.$router.push('/addressedit')
    },
    onEdit(item, index) {
      console.log(item)
      this.$router.push({ name: 'editaddress', params: {content: item}})
    },
    back () {
      this.$router.back()
    },
    onBackAddress (item, index) {
    // 发布通知到订单修改值
    PubSub.publish(CHOOSE_USER_ADDRESS, item)
    console.log(item);
    
    this.$router.back()
  }
  },
    mounted () {
      this.init_UserAddress()
  },
}
</script>

<style scoped>
 /*转场动画*/
  .router-slider-enter-active,
  .router-slider-leave-active {
    transition: all 0.3s;
  }
  .router-slider-enter,
  .router-slider-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
  #addressList {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    z-index: 99;
  }

</style>