<template>
  <sidebar v-model="activeKey" @change="onChange">
    <sidebar-item 
    v-for="(item,index) in CategoryTitle" 
    :key="index" 
    :title="item.title"
    :class="{'color-pink': activeKey === index}" />
  </sidebar>
</template>

<script>
import { getCategory } from 'network/category'
import { Sidebar, SidebarItem } from 'vant'

import 'vant/lib/sidebar/style'
import 'vant/lib/sidebar-item/style'

export default {
  name: 'categorySidebar',
  data () {
    return {
      activeKey: 0,
      isActive: false
    }
  },
  props: {
    CategoryTitle: {
      type: Array
    }
  },
  components: {
    Sidebar,
    SidebarItem
  },
  methods: {
    // 监听侧边栏切换
    onChange (index) {
      this.$emit('onChange', index)
    }
  }
}
</script>

<style scoped>
  .color-pink {
    color: red
  }
</style>>
