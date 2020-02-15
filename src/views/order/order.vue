<template>
  <div id="order">
    <!-- 头部信息 -->
    <nav-bar class="nav-bar">
      <div slot="left" @click="back">
        <icon name="arrow-left" />
      </div><div slot="center">订单确认</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
    <!-- 收货地址 -->
    <ContactCard 
      :type='cardType'
      :name='address_name'
      :tel='address_phone'
      add-text='选择收获地址'
      @click="onAdd"
    />
    <!-- 支付方式 -->
    <radio-group v-model="radio">
      <cell-group :title="payMethod">
        <!-- 微信支付 -->
        <cell clickable
              @click="radio = '1' ">
          <template slot="title">
            <img src="./img/wx.png" 
                 alt=""
                 style=" vertical-align: middle;padding-right:5px" />
            <span>微信支付</span>
          </template>
          <radio slot="right-icon"
                 name='1'
                 checked-color='#07c160' />
        </cell>
        <!-- 支付宝支付 -->
        <cell clickable
              @click="radio = '2' ">
          <template slot="title">
            <img src="./img/zfb.png" 
                 alt=""
                 style=" vertical-align: middle;padding-right:5px" />
            <span>支付宝支付</span>
          </template>
          <radio slot="right-icon"
                 name='2'
                 checked-color='#07c160' />
        </cell>
        <!-- 花呗支付 -->
        <cell clickable
              @click="radio = '3' ">
          <template slot="title">
            <img src="./img/hb.png" 
                 alt=""
                 style=" vertical-align: middle;padding-right:5px" />
            <span>花呗支付</span>
          </template>
          <radio slot="right-icon"
                 name='3'
                 checked-color='#07c160' />
        </cell>
      </cell-group>
    </radio-group>
    <!-- 商品略缩图 -->
    <div class="goods" v-for="(item,index) in goods " :key="index">
      <card 
        :num="item.count"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.image"
      />
    </div>
    </scroll>
    <!-- 提交订单栏 -->
    <submit-bar
      :price="ALLprice"
      button-text="提交订单"
      @submit="onSubmit"
    />
    <!-- 路由出口 -->
    <transition name="router-slider" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import { Icon, ContactCard, Card, SubmitBar, Radio, RadioGroup,Cell,CellGroup } from 'vant'
import scroll from 'common/scroll/Scroll'

// 引入发布订阅
import { CHOOSE_USER_ADDRESS } from 'config/pubsub_type'
import PubSub from 'pubsub-js'

export default {
  data () {
    return {
      cardType: 'add',   //地址卡片类型
      address_name: null,  //收货人
      address_phone: null,  //收获人电话
      address_id: null,     //收获人地址Id

      radio: '1',  //支付方式默认值
      payMethod: '请选择支付方式' , //标题
      goods: null,
    }
  },
  computed: {
  },
  components: {
    NavBar,
    Icon,
    ContactCard,
    SubmitBar,
    Radio,
    RadioGroup,
    Cell,
    CellGroup,
    Card,
    scroll
    
  },
  methods: {
    back () {
      this.$router.back()
    },
    onAdd (event) {
      this.$router.push('/order/addresslist')
    },
    onSubmit () {
      console.log('onsubmit');
      
    }
  },
  mounted () {
    PubSub.subscribe(CHOOSE_USER_ADDRESS, (msg, data) => {
      if(msg == CHOOSE_USER_ADDRESS ){
        // 修改卡片信息
        this.cardType = 'edit'
        this.address_name = data.name
        this.address_phone = data.tel
        this.address_id = data.id
      }
    }),
    // 处理路由传过来的数据
    this.goods = this.$route.params.goods
  },
  computed: {
    ALLprice () {
      let sum = 0
      for (let item in this.goods) {
        sum += this.goods[item].price*100*this.goods[item].count
      }
      return sum
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
  .goods {
    margin-top: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .content {
    margin-top: 49px;
    overflow: hidden;
    height: calc(100vh - 44px - 49px - 40px);
  }
  
</style>