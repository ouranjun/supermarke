<template>
      <div class="tab-bar-item" @click="activeClick">
        <div :style="activeStyle">
          <slot name="item-icon"/>
          <slot name='item-text'/>
        </div>
      </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'palevioletred'
    }
  },
  data () {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive () {
      // console.log(this.$router)
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    activeClick () {
      this.$router.replace(this.path)
    }
  }

}
</script>

<style>
  @import url('~assets/img/tabbar/iconfont.css');
  #tab-bar{
    display: flex;
    background: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1)
  }
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .iconfont{
    font-size: 26px
  }
  .text{
    font-size: 14px;
    display: block;
  }
  /* .active{
    color: palevioletred;
  } */

</style>
