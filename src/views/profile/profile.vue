<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">个人中心</div>
    </nav-bar>
    <!-- 未登录状态 -->
    <div class="personMsg">
      <van-image
        class="van-image"
        round
        fit="cover"
        width="5rem"
        height="5rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="personInfo">
        <div>
          <span @click="openLogin" v-if="userInfoShow">登录/注册</span>
          <span @click="openUserInfo" v-else>{{userInfo.user_name}}</span>
        </div>
        <span v-if="userInfoShow" class="tag">暂未绑定手机号码</span>
        <span v-else class="tag">手机号码：{{userInfo.phone}}</span>
        <icon @click="openUserInfo" class="arrow" name="arrow" />
      </div>
    </div>
    <CellGroup>
        <cell title="我的订单" @click="openOther(-1)" is-link value="查看全部订单" />
    </CellGroup>
    <grid icon-size='30px'>
      <grid-item @click="openOther(0)" icon="cart-circle-o" text="待付款" />
      <grid-item @click="openOther(1)" icon="gift-o" text="待收货" />
      <grid-item @click="openOther(2)" icon="chat-o" text="待评价" />
      <grid-item icon="manager-o" text="售后/退款"  />
    </grid>
    <CellGroup>
        <cell @click="openCoupon" title="我的优惠券" icon="coupon" is-link  />
        <cell title="我的地址"  icon="location" is-link @click="openAddress" />
    </CellGroup>
    <CellGroup>
        <cell title="联系客服" value="客服时间: 9:00-18:00" icon="phone-circle" is-link  />
        <cell title="意见反馈" icon="good-job" is-link  />
        <cell title="设置" icon="setting" is-link  />
    </CellGroup>
    <!-- 路由出口 -->
    <transition name="router-slider" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import { Cell, CellGroup, Image, Icon, Grid, GridItem, Dialog } from 'vant';
import 'vant/lib/cell-group/style'
import 'vant/lib/cell/style'
import state from '@/store/state';
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'profile',
  components: {
    NavBar,
    Cell,
    CellGroup,
    Icon,
    'van-image':Image,
    Grid,
    GridItem
  },
  computed: {
    ...mapState(['userInfo']),
    userInfoShow () {
      return Object.keys(this.userInfo).length === 0 ? true : false
    }
  },
  methods: {
    openLogin () {
      this.$router.push('/login')
    },
    openAddress () {
      if (state.userInfo && state.userInfo.token) {
        this.$router.push('/addresslist')
      }else {
        Dialog.alert({
          message: '请先登录'
        }).then(() => {
           this.$router.push('/login')
        });

      }
    },
    openUserInfo () {
      this.$router.push('/profile/userInfo') 
    },
    openOther (index) {
      if (state.userInfo && state.userInfo.token) {
         if(index !==3){
        return this.$router.push({name:'other', params: {active: index+1}})
      }
      }else {
        Dialog.alert({
          message: '请先登录'
        }).then(() => {
           this.$router.push('/login')
        });
      }
    },
    openCoupon () {
      this.$router.push('/profile/coupon')
    }
  }
}
</script>

<style scoped>
 
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .personMsg {
    margin-top: 43px;
    width: 100%;
    height: 100px;
    background-color: var(--color-tint);
    position: relative;
    z-index: 998;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 1px rgba(0,0,0,0.2)
  }
  .van-image {
    margin: 0 15px
  }
  .personInfo {
    color: #fff;
    display: flex;
    align-items: center;
    flex-direction:column
  }
  .personInfo > .tag {
    display: block;
    font-size: 12px;
    margin-top: 5px;
  }
  .personInfo  .arrow{
    display: block;
    position: absolute;
    right: 10px;
  }
  /* 转场动画 */
  .router-slider-enter-active,
  .router-slider-leave-active {
    transition: all 0.3s
  }
  .router-slider-enter,
  .router-slider-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
</style>
