<template>
  <div class="bottom-bar">
    <div class="check-content">
    <CheckButton :isChecked='isSelectAll' @click.native='selectAllButton' class="check-button" />
    <span>全选</span>
    </div>

    <div class="left">
      合计{{totalPrice}}
    </div>
    <div class="right" @click="jiesuan">
      结算<span v-if="checkLength !== 0">({{checkLength}})</span>
    </div>

  </div>
</template>

<script>
import CheckButton from 'content/checkButton/CheckButton'

export default {
  name: 'shopCartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    totalPrice () {
      return '￥'+ this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength () {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll () {
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      return this.checkLength !== 0 && !(this.$store.state.cartList.find(item => !item.checked))
    }
  },
  methods: {
    selectAllButton () {
      if(this.isSelectAll){
       this.$store.state.cartList.forEach(item => item.checked = false)
      }else{
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
      
    },
    jiesuan () {
      if(this.checkLength === 0){
        this.$toast.show('你没有选择宝贝哦',1500)
      }
    }
  }
}
</script>

<style scoped>
  .bottom-bar {
    height: 50px;
    background-color: #eee;
    position: absolute;
    width: 100%;
    bottom: 44px;
    line-height: 50px;
  
    display: flex;
  }
  .check-content {
    display: flex;
    align-items: center;
  
  
  }
  .check-button {
    width: 23px;
    line-height: 18px;
    margin: 0 10px;
  }
  .left {
    font-size: 13px;
    font-weight: 550;
    color: red;
    margin-left: 10px;
  }
  .right{
    width: 100px;
    background-color: red;
    color: #fff;
    text-align: center;
    position: fixed;
    right: 0px;
  }
</style>