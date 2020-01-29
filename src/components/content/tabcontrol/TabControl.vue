<template>
  <div  class="tab-control">
    <div class="tab-control-item" 
         v-for="(item,index) in titles" 
         :key='index'
         :class="{active: index === currentIndex}"
         @click="itemClick(index)"
         >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index;
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-control > .tab-control-item {
    flex: 1;
  }
  .active {
    color: var(--color-high-text);
    
  }
  .active > span {
    border-bottom: 2px solid var(--color-tint);
    padding: 10px;
  }
</style>