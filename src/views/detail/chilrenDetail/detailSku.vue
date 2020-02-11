<template>
    <div>
    <sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :message-config="messageConfig"
      :close-on-click-overlay='overlay'
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    >
    </sku>
    </div>
</template>

<script>
import { Sku } from 'vant';
import 'vant/lib/sku/style'

export default {
  name: 'detailSku',
  data() {
    return {
      Isshow:false,
      overlay: true,
      sku,
      goods: {}
    }
  },
  components: {
    Sku
  },
  props: {
    isshow: {
      type: Boolean,
      default(){
        return true
      }
    },
  },
  methods: {
    onBuyClicked () {
      console.log('已购买');
    },
    onAddCartClicked () {
      console.log('添加横杠');
    }
  }
}
</script>

<style scoped>

</style>
