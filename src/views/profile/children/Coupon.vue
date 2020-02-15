<template>
  <div id="coupon">
    <nav-bar class="nav-bar">
      <div slot="left" @click="back">
        <icon name="arrow-left" />
      </div><div slot="center">我的优惠券</div>
    </nav-bar>
    <!-- 优惠券单元格 -->
  <coupon-cell
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    @click="showList = true"
  />
  <!-- 优惠券列表 -->
  <popup
    v-model="showList"
    round
    position="bottom"
    style="height: 90%; padding-top: 4px;"
  >
    <coupon-list
      :coupons="coupons"
      :chosen-coupon="chosenCoupon"
      :disabled-coupons="disabledCoupons"
      @change="onChange"
      @exchange="onExchange"
    />
  </popup>
  </div>
</template>

<script>
import { CouponCell, CouponList, Icon,Popup } from 'vant';
import NavBar from 'common/navbar/NavBar'
import { coupon } from './config'

export default {
  name: '',
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList: false
    }
  },
  components: {
    CouponCell,
    CouponList,
    Icon,
    NavBar,
    Popup
  },
  methods: {
    back () {
      this.$router.back()
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    }
  }
}
</script>

<style scoped>
  #coupon {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #f5f5f5;
    z-index: 999;
  }
</style>
