<template>
  <div class="recommends">
    <div v-for="item in recommends" :key="item.link" class="recommends-item">
    <a :href="item.link">
      <img :src="item.image" :alt="item.title">
    </a>
    <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recommendView',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style>
.recommends {
  display: flex;
  text-align: center;
  padding: 10px 0 20px;
  font-size: 12px;

  border-bottom: 5px solid #eeeeee
}
.recommends-item {
  flex: 1;
}

.recommends-item img {
  width: 68.8px;
  height: 68.8px;
  margin-bottom: 5px;
}

</style>
