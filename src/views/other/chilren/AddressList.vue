<template>
  <div>
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
    this.chosenAddressId = isdefault.id
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
    }
  },
  mounted () {
    this.init_UserAddress();
   
  }
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

</style>