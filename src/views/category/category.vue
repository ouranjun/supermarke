<template>
  <div class="category">
    <!-- 头部 -->
    <nav-bar class="nav-bar">
      <div slot="center">分类</div>
    </nav-bar>
    <!-- 分类侧边栏 -->
    <div class="sidebar">
    <scroll class="sideContent">
    <categorySidebar 
    :CategoryTitle='CategoryTitle' 
    @onChange='onChange' />
    </scroll>
    <!-- 分类每一项对应内容 -->
    <scroll class="content categoryDate" ref="scroll" :probe-type='3'>
    <categoryData :subCategory='subCategory' @imgload='loadEnd' />
    </scroll>
    </div>
  </div>
</template>

<script>
import categorySidebar from './categoryCom/categorySidebar'
import categoryData from './categoryCom/categoryData'
import NavBar from 'common/navbar/NavBar'
import { getCategory, getSubcategory } from 'network/category'
import scroll from 'common/scroll/Scroll'

export default {
  name: 'category',
  data () {
    return {
      CategoryTitle: [],
      subCategory: []
    }
  },
  components: {
    categorySidebar,
    categoryData,
    NavBar,
    scroll
  },
  created () {
    // _getCategory:侧边栏分类 _getSubcategory:每一项数据
    this._getCategory()
    
  },
  methods: {
    // 获取侧边栏标题
    _getCategory () {
      return getCategory().then(res => {
        this.CategoryTitle = res.data.category.list
        // 请求第一个分类数据
        this._getSubcategory(0)
      })
    },
    // 获取分类每一项的数据
    _getSubcategory (index) {
      this.currentIndex = index
      const maitKey = this.CategoryTitle[index].maitKey
      getSubcategory(maitKey).then(res => {
        this.subCategory = res.data.list
      })
    },
    // 切换侧边栏选项
    onChange (index) {
      if (this.currentIndex === index){
        return null
      }
     this._getSubcategory(index)
    },
    // categoryData子组件传来的事件
    loadEnd () {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
  .sideContent, .content {
    height: calc(100vh - 49px - 100px)
  }
 .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .sidebar {
    width: 100%;
    margin-top: 44px;
    position: relative;
  }
  .categoryDate {
    position: absolute;
    left: 100px;
    top: 5px;
  }
</style>
