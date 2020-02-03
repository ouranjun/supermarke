<template>
  <div id="detail">
    <detail-item class="detail-item" @scrollY='scrollY' ref='nav' />
    <scroll :probeType='3' class="content" ref="scroll" @scroll='scroll'>
    <detail-swiper :topImages='topImage' />
    <detail-base-info :goodsInfo='goodsInfo' />
    <detail-shop-info :shopInfo='shopInfo' />
    <detail-goods-info :detail-info='detailInfo' @imageLoad='imageLoad' />
    <detail-param-info ref="params" :param-info='paramInfo' />
    <detailCommentInfo ref="comment" :commentInfo='commentInfo'/>
    <p class='recommends-text'>-为你推荐-</p>
    <goods-list ref="recommend" :goods='recommends' /> 
  </scroll> 
    <back-top @click.native="backTop" v-show="backTopisShow"/>
    <detailBottomBar />
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
import detailBottomBar from './chilrenDetail/detailBottomBar'
import GoodsList from 'content/goods/GoodsList'

import Scroll from 'common/scroll/Scroll'
import backTop from 'common/backtop/backTop'

import { getDetailId, GoodsInfo, ShopInfo, ParamInfo, getRecommend } from 'network/detail'
import { debounce } from '@/common/utils.js'


export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      topImage: null,
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends:[],
      themeTopY: [],
      getThemeTopY: null,
      backTopisShow: false
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
    detailBottomBar,
    Scroll,
    backTop,
    GoodsList
  },
  created () {
    this.iid = this.$route.params.iid;
    getDetailId(this.iid).then(res => {
      // 1.获取详情图片
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
      // 6. 获取评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0]
      }
    })
    // 请求推荐数据
    getRecommend().then(res => {
      this.recommends = res.data.list
    })
  },
  methods: {
    imageLoad () {
      this.$refs.scroll.refresh();
      this.themeTopY = []
        this.themeTopY.push(0)
        this.themeTopY.push(this.$refs.params.$el.offsetTop)
        this.themeTopY.push(this.$refs.comment.$el.offsetTop)
        this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
    },
    scroll (position) {
      const positionY = -position.y
      let length = this.themeTopY.length;
        if(positionY>this.themeTopY[0] && positionY<this.themeTopY[1]){
          this.$refs.nav.currentIndex = 0
        }else if (positionY>=this.themeTopY[1] && positionY<this.themeTopY[2]){
          this.$refs.nav.currentIndex = 1
        }else if (positionY>=this.themeTopY[2] && positionY<this.themeTopY[3]){
          this.$refs.nav.currentIndex = 2
        }else if (positionY>=this.themeTopY[3]){
          this.$refs.nav.currentIndex = 3
        }
        // 判断内容上拉离开距离
      if(positionY > 800){
        this.backTopisShow = true
      }else{
        this.backTopisShow = false
      }
    },
    scrollY (index) {
      this.$refs.scroll.scrollTo(0,-(this.themeTopY[index]),200) 
    },
    // 回到顶部
    backTop () {
      this.$refs.scroll.scrollTo(0,0,200) 
    }
  },
  mounted () {
    // 防抖动
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    // 监听item中图片加载完成
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })
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
  .recommends-text {
    color: #666;
    font-size: 14px;
    text-align: center;
    padding: 10px;

  }

</style>