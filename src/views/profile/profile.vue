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
        <div>登录/注册</div>
        <span class="tag">暂未绑定手机号码</span>
        <icon class="arrow" name="arrow" />
      </div>
    </div>
    <CellGroup>
        <cell title="我的订单" is-link value="查看全部订单" />
    </CellGroup>
    <grid icon-size='30px'>
      <grid-item icon="cart-circle-o" text="待付款" />
      <grid-item icon="gift-o" text="待收货" />
      <grid-item icon="chat-o" text="待评价" />
      <grid-item icon="manager-o" text="售后/退款"  />
    </grid>
    <CellGroup>
        <cell title="我的优惠券" icon="coupon" is-link  />
        <cell title="我的地址" icon="location" is-link to='/addresslist'  />
    </CellGroup>
    <CellGroup>
        <cell title="联系客服" value="客服时间: 9:00-18:00" icon="phone-circle" is-link  />
        <cell title="意见反馈" icon="good-job" is-link  />
        <cell title="设置" icon="setting" is-link  />
    </CellGroup>

  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import { Cell, CellGroup, Image, Icon, Grid, GridItem } from 'vant';
import 'vant/lib/cell-group/style'
import 'vant/lib/cell/style'

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
    z-index: 2020;
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
</style>
