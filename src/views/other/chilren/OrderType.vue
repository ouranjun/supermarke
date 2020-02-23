<template>
  <div id="orderType">
    <div v-if="orderTypeDataArray.length>0">
    </div>
    <div v-else class="noDataPlaceHold">
      <img src="../img/noData.jpeg" alt="">
      <span class="desc">暂无相关订单</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orderTypeDataArray: Array
  }

}
</script>

<style scoped>
  #orderType {
    margin-top: 5rem;
    height: 20rem;
  }
  #orderType .noDataPlaceHold {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #orderType .noDataPlaceHold img {
    width: 60%;
    height: 60%;
  }
  #orderType .noDataPlaceHold .desc {
    color: grey;
    font-size: 0.6rem;
  }
</style>>
