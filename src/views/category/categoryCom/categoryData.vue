<template>
  <div class="categorydata" v-if="subCategory">
    <div class="category-item" v-for="(item,index) in subCategory" :key="index"> 
    <a class="category-item-link" :href="item.link">
      <img :src="item.image" :alt="item.title" @load="imgLoad">
    </a>
    <span class="category-item-title">{{item.title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    }
  },
  props: {
    subCategory: {
      type: Array
    }
  },
  components: {
    scroll
  },
  methods: {
    imgLoad () {
      this.$emit('imgload')
    }
  }
}
</script>

<style scoped>
 .categorydata{
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   width: 100%;
   text-align: center;
   justify-items: center;
   align-items: center;
   height: 100%;
 }
 .category-item {
   width: 33%;
   height: 100%;
 }
 .category-item-link img {
   width: 75%;
   padding: 10px 0;
 }
 .category-item-title {
   display: block;
   font-size: 12px;
 }
</style>
