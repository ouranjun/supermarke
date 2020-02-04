<template>
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
        <span class="item-count right">×{{product.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'content/checkButton/CheckButton'

export default {
  name: 'shopCartListItem',
  props: {
    product: {
      type: Object,
      dafault () {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick () {
      console.log('111');
      
      this.product.checked = !this.product.checked
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

</style>