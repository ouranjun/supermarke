<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" >
      </div>
      <div slot="center" class="title">
        <span 
        v-for="(item,index) in titles" 
        :key="index" class="title-item" 
        :class="{active: index == currentIndex}"
        @click="titleClick(index)">
          {{item}}
        </span>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'

export default {
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  created () {

  },
  methods: {
    titleClick (index) {
      this.currentIndex = index
    },
    backClick () {
      this.$router.back()
    }
  },
  components: {
    NavBar
  }
}
</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }
  .title-item {
    flex: 1
  }
  .active {
    color: var(--color-tint)
  }
  .back img {
    margin-top: 11px;
  }

</style>
