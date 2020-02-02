<template>
  <div id="detail">
    <detail-item class="detail-item" />
    <scroll class="content" ref="scroll" @scroll='scroll'>
    <detail-swiper :topImages='topImage' />
    <detail-base-info :goodsInfo='goodsInfo' />
    <detail-shop-info :shopInfo='shopInfo' />
    <detail-goods-info :detail-info='detailInfo' @imageLoad='imageLoad' />
    <detail-param-info :param-info='paramInfo' />
    </scroll>
    
  </div>
</template>

<script>
import detailItem from './chilrenDetail/detaiItem'
import detailSwiper from './chilrenDetail/detailSwiper'
import detailBaseInfo from './chilrenDetail/detailBaseInfo'
import detailShopInfo from './chilrenDetail/detailShopInfo'
import detailGoodsInfo from './chilrenDetail/detailGoodsInfo' 
import detailParamInfo from './chilrenDetail/detailParamInfo'
import detailCommentInfo from './chilrenDetail/detailCommentInfo'
import detailRecommendInfo from './chilrenDetail/detailRecommendInfo'

import Scroll from 'common/scroll/Scroll'

import { getDetailId, GoodsInfo, ShopInfo, ParamInfo } from 'network/detail'


export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      topImage: null,
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {}
    }
  },
  components: {
    detailItem,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    detailRecommendInfo, 
    Scroll
  },
  created () {
    this.iid = this.$route.params.iid;
    getDetailId(this.iid).then(res => {
      // 1.获取详情图片
      console.log(res);
      const data = res.result
      this.topImage = data.itemInfo.topImages
      // 2.获取商品信息
      this.goodsInfo = new GoodsInfo (data.itemInfo, data.columns, data.shopInfo.services)
       // 3.获取商家信息
      this.shopInfo = new ShopInfo (data.shopInfo)
      // 4.获取商品详情
      this.detailInfo = data.detailInfo 
      // 5.获取参数信息
      this.paramInfo = new ParamInfo (data.itemParams.info, data.itemParams.rule)
    })
  },
  methods: {
    imageLoad () {
      console.log('1111')
      this.$refs.scroll.refresh();
      
    },
    scroll (position) {
      console.log(position)
    }
  }
}
</script>

<style scoped>
   #detail {
    position: relative;
    z-index: 9;
    background: #fff;
    height: 100vh;
  }
  .detail-item {
    position: relative;
    z-index: 9;
    background-color: #fff;
  } 
  .content {
    height: calc(100% - 44px);
  } 
 

</style>