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
    <detailBottomBar @addCart='addCart' @buyGood='buyGood' />
    <sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :close-on-click-overlay='overlay'
      :reset-selected-sku-on-hide = "onHide"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"

    >
    </sku>
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
import detailSku from './chilrenDetail/detailSku'


import Scroll from 'common/scroll/Scroll'
import backTop from 'common/backtop/backTop'
import { Sku, messageConfig } from 'vant';
import { Toast } from 'vant';


import { getDetailId, GoodsInfo, ShopInfo, ParamInfo, getRecommend } from 'network/detail'
import { sku } from './config'
import { debounce } from '@/common/utils.js'
import 'vant/lib/sku/style'
import 'vant/lib/toast/style'


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
      backTopisShow: false,
      show: false,
      sku,
      overlay: true,
      goodsId: '001',
      goods: {
              // 商品标题
              title: '测试商品',
              // 默认商品 sku 缩略图
              picture: 'https://img.yzcdn.cn/1.jpg'
            },
      onHide: true
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
    Sku,
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
      console.log(this.paramInfo);
      
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
    },
    // 加入购物车
    addCart () {
      this.show = true
      /* // 1.获取购物车需要展示的信息
       */
      
      // 选择商品类型
      this.goods.picture = this.topImage[0];
      for (let x = 0; x<this.sku.tree[0].v.length;x++){
        this.sku.tree[0].v[x].imgUrl = this.topImage[x];
        this.sku.tree[0].v[x].previewImgUrl = this.topImage[x];
      }

      for (let i = 0; i<this.sku.list.length; i++) {
        this.sku.list[i].price = this.goodsInfo.realPrice * 100;
      }
      this.sku.price = this.goodsInfo.realPrice
  
      for(let y in this.paramInfo.infos ){
        if (this.paramInfo.infos[y].key == '颜色'){
          const colores = this.paramInfo.infos[y].value.split(',')
          const coloresLen = colores.length
          for (let z = 0; z< coloresLen; z++){
            
            if(z<2){
              this.sku.tree[0].v[z].name = colores[z]
            }
          }
        }
      } 
    },
    // 立即购买回调
    buyGood () {
      this.show = true
    },
    onBuyClicked () {

    },
    onAddCartClicked (skuData) {
      const product = {}
      product.image = this.topImage[0];
      product.title = this.goodsInfo.title;
      product.desc = this.goodsInfo.desc;
      product.price = this.goodsInfo.realPrice;
      product.iid = this.iid;
      product.count = skuData.selectedNum
      // 2.获取商品加入到购物车
      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart', product).then(res => {
        Toast.success(res);
      })

      
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