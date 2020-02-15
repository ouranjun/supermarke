<template>
<SwipeCell >
  <div id="shop-item">
    <div class='item-selector' >
      <check-button :isChecked='product.checked' @click.native="checkClick" />
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">商品描述：{{product.desc}}</div>
      <div class="info-bottom">
        <span class="item-price left">￥{{product.price}}</span>
        <stepper class="right" 
                 v-model="value"
                 @change="onChange(product.iid,value)" />
      </div>
    </div>
  </div>
  <Button
    slot="right"
    square
    text="删除"
    type="danger"
    class="delete-button"
    @click="close(product.iid,index)"
  />
</SwipeCell>
</template>

<script>
import CheckButton from 'content/checkButton/CheckButton'
import { SwipeCell,Button, Stepper } from 'vant';
import 'vant/lib/swipe-cell/style'
import 'vant/lib/button/style'
import 'vant/lib/stepper/style'

export default {
  name: 'shopCartListItem',
  data () {
    return {
      value: 1
    }
  },
  props: {
    product: {
      type: Object,
      dafault () {
        return {}
      }
    },
    index: {
      type: Number
    }
  },
  components: {
    CheckButton,
    SwipeCell,
    Button,
    Stepper
  },
  created () {
    this.value = this.product.count
  },
  methods: {
    checkClick () {
      this.product.checked = !this.product.checked
    },
    close (iid,index) {
      this.$emit('remove',index)
      this.$store.commit('removeFormCar',iid)
    },
    onChange (iid,value) {
       this.$store.commit('goodsCurrent',{iid,value})
    }

  }
}
</script>

<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
    position: relative;
  }

  .item-selector {
    width: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item-img {
    padding: 5px;
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-info {
    font-size: 17px;
    color:#333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-title, .item-desc  {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }

  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom:10px;
    left: 10px;
    right: 10px;
  }

  .info-bottom .item-price {
    color: orangered;
  }
  .delete-button {
    height: 100%;
  }

</style>