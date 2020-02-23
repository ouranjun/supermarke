<template>
  <div class="login">
   <nav-bar  class="navbar">
      <div slot="left" @click="back">
        <icon name="arrow-left" />
      </div>
      <div slot="center">登录中心</div>
    </nav-bar>
    <div>
      <cell-group>
        <field 
          v-model="tel"
          type='tel'
          size='large'
          label="手机号"
          placeholder="请输入手机号"
          ref="tel"
          :error-message='errorMessage'
          @blur='telBlur'
          @input='input'
         />
        <field
          type='number'
          v-model="sms"
          size='large'
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
        >
      <van-button :disabled="disabled" @click="start"  round  slot="button" size="small" type="primary">
        <span  v-if="!sended">发送验证码</span>
        <count-down @finish='finish'  v-show="sended" ref="countDown" :auto-start="false" format='ss秒' :time="time">
        </count-down>
        </van-button>
      </field>
      </cell-group>
      <van-button round @click="loginBtn"  class="login_btn" type="primary" size="large">登录</van-button>
    </div>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import { Icon, Toast, Field, Button, CellGroup, CountDown, Dialog  } from 'vant';
import 'vant/lib/field/style'
import { mapState, mapActions, mapMutations } from 'vuex'
// 引入API调用接口
import { phoneCaptchaLogin } from 'network/login'

export default {
  name: 'login',
  data () {
    return {
      tel: '',
      sms: '',
      time: 30000,
      sended: false,
      disabled: false,
      errorMessage: '',
      newCode: ''
    }
  },
  computed:{
    telStr () {
      return /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
    },
  },
  components: {
    NavBar,
    Icon,
    Field,
    CellGroup,
    CountDown,
    'van-button': Button,
    [Dialog.Component.name]: Dialog.Component
  },
  methods: {
    // 0.mapActions 同步用户信息
    ...mapActions(['syncuserInfo']),
    back () {
      this.$router.back()
    },
    start () {
      if(this.telStr.test(this.tel)){
        this.sended = !this.sended
        this.disabled = true
        this.$refs.countDown.start();
        let code = Math.floor(Math.random()*9*9999)
        this.getCode (code)
        
      }else {
        Dialog.alert({
          message: '请输入正确的手机号码'
        })
      }
      
    },
    finish () {
      this.sended = !this.sended
      this.disabled = false
      this.$refs.countDown.reset()
    },
    telBlur () {
      if (!(this.telStr.test(this.tel))) {
        this.errorMessage = '手机号码格式不正确'
      }else {
        this.errorMessage = ''
      }

    },
    input () {
      this.errorMessage = ''
    },
    getCode (code) {
      Dialog.alert({
          message: '验证码:'+ code
        }).then(() => {
          this.newCode = code
        });
    },
    async loginBtn () {
      if(!(this.telStr.test(this.tel))){
        Dialog.alert({
          message: '请输入正确的手机号'
        })
        return false
      }else if (this.sms == '') {
        Dialog.alert({
          message: '请输入验证码'
        })
        return false
      }else if (this.newCode == this.sms){
         Dialog.alert({
          message: '登录成功'
        }).then(async () => {
          let ref = await phoneCaptchaLogin(this.tel)
          console.log(ref.data);
          this.syncuserInfo(ref.data)
          this.$router.replace('/profile')
        });
      }else {
        Dialog.alert({
          message: '验证码有误'
        }).then(() => {
           return false
        });
      }
    }
  }
}
</script>

<style scoped>
  
  .login_btn {
    margin-top: 20px;
    padding: 0 10px; 
  }
  
</style>