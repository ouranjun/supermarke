<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data () {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default () {
        return 0
      }
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    // 创建BScroll对象
    this.scroll = new BScroll (this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 2.监听滚动的位置
    this.scroll.on('scroll', (position) => {
      //console.log(position)
      this.$emit('scroll', position)
    })

    // 3.监听滚动到底部事件
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp', () => {
        this.$emit('pullUpLoad')
      })
    }
    
    this.scroll.refresh()
  },
  methods: {
    scrollTo (x, y, time=100) {
      this.scroll && this.scroll.scrollTo(x, y, time)
    },
    refresh () {
      
      this.scroll && this.scroll.refresh()
    },
    finishPullUp () {
      this.scroll && this.scroll.finishPullUp()
    }

  }
}
</script>

<style>

</style>