<template>
<div id="userCenter" v-if="userInfo">
  <nav-bar class="nav-bar">
      <div slot="left" @click="back">
        <icon name="arrow-left" />
      </div><div slot="center">个人资料</div>
    </nav-bar>
  <div class="icon">
    <span class="title">头像</span>
    <img src="https://img.yzcdn.cn/vant/cat.jpeg" alt="头像">
  </div>
  <cell-group>
    <cell title='昵称' 
          is-link
          :value='userInfo.user_name'
          @click="goToChangeNickName"/>
    <cell title='性别' 
          is-link
          clickable
          :value='userSex'
          @click="onChangeSex" />  
    <cell title='生日' 
          is-link
          @click='selectBrithday'
          :value='userInfo.brithday ? userInfo.brithday : " "'/>
    <cell title='手机号码' 
          :value='userInfo.phone'/>
  </cell-group>
  <vanButton size=large
             style="margin-top:1rem"
             @click="UserloginOut"
            >退出登录</vanButton>
  <!-- 性别选择器 -->
  <popup v-model="showChooseSex"
         position='bottom'
         :style="{height: '25%'}">
    <radio-group v-model="userInfo.sex">
      <cell-group style="margin-top:2rem"
                  @click='clickCell(radio)'>
        <cell title="美女"
              clickable
              @click="radio = '1'">
        <radio slot="right-icon"
               name='1'
               checked-color='#7c160' />
        </cell>
        <cell title="帅哥"
              clickable
              @click="radio = '2'">
        <radio slot="right-icon"
               name='2'
               checked-color='#7c160' />
        </cell>
      </cell-group>
    </radio-group>
  </popup>
  <!-- 时间选择器 -->
  <popup v-model="showDateTimePopView"
          round
          position='bottom'>
    <datetime-picker v-model="currenDate"
                      type='date'
                      @confirm='confirm'
                      @cancel='cancel'
                      :formatter='formatter'
                      :max-date='maxDate'
                      :min-date='minDate' />
  </popup>
  <!-- 路由出口 -->
    <transition name="router-change" mode="out-in">
      <router-view />
    </transition>
</div>

</template>

<script>
import NavBar from 'common/navbar/NavBar'
import { Icon, Dialog, CellGroup, Cell, Button, Radio, Toast, Popup, RadioGroup, DatetimePicker } from 'vant'
import { mapState, mapMutations, mapGetters } from 'vuex'
import Moment from 'moment'
export default {
  name: 'userInfo',
  data () {
    return {
      showDateTimePopView: false,
      showChooseSex: false,
      currenDate: new Date('1989/01/01'),
      // 最小时间
      minDate: new Date('1949/01/01'),
      maxDate: new Date('2020/12/31')
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    },
    ...mapGetters({
      userSex: 'userSex'
    })
  },
  components: {
    NavBar,
    Icon,
    CellGroup,
    Cell,
    Radio,
    vanButton: Button,
    Popup,
    RadioGroup,
    DatetimePicker
  },
  methods: {
    ...mapMutations(['userInfoBrithday', 'loginOut', 'userInfoSex']),
    back () {
      this.$router.back()
    },
    // 修改昵称
    goToChangeNickName () {
      this.$router.push({
        name: 'ChangeNickName',
        params: {
          nickName: this.userInfo.user_name
        }
      })
    },
    // 修改性别
    onChangeSex () {
      this.showChooseSex = true
    },
    clickCell (radio) {
      let sex = radio
      this.userInfoSex({sex})
      setTimeout(() => {
        this.showChooseSex = false
        Toast({
          message: '修改成功',
          duration: 800
        })
      }, 300);
    },
    // 修改生日
    selectBrithday () {
      this.showDateTimePopView = true
    },
    // 格式化DateTime pickView
    formatter (type, value) {
      if (type === 'year') {
        return `${value}`
      }else if (type === 'month') {
        return `${value}`
      }else if (type === 'day') {
        return `${value}`
      }
      return value
    },
    // DateTimt pickView 确定
    confirm (value) {
      let brithday = Moment(value).format('YYYY-MM-DD')
      this.brithdayText = brithday
      this.userInfoBrithday({brithday})
      this.showDateTimePopView = false
      Toast({
        message: '设置成功',
        duration: 800
      })
    },
    // DateTimt pickView 取消
    cancel () {
      this.showDateTimePopView = false
    },
    // 退出登录
    UserloginOut () {
      Dialog.confirm({
        message: '确定要退出吗？'
      }).then(() => {
        this.loginOut()
        Toast({
          message: '退出成功',
          duration: 800
        })
        this.$router.back()
      }).catch(() => {

      })
    }
  }
}
</script>

<style scoped>
  #userCenter {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #f5f5f5;
    z-index: 999;
  }
  .icon {
    display: flex;
    height: 3rem;
    width: 100%;
    margin-top: 1rem;
    padding: 0 16px;
    background-color: #fff;
    align-items: center
  }
  .icon .title {
    height: 3rem;
    line-height: 3rem;
    color: #323233;
    font-size: 14px
  }
  .icon img {
    position: absolute;
    right: 1.6rem;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%
  }
  .nav-bar {
    background-color: #fff;
  }
   /* 转场动画 */
  .router-change-enter-active,
  .router-change-leave-active {
    transition: all 0.3s
  }
  .router-change-enter,
  .router-change-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
</style>
