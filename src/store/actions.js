import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations.type.js'

export default {
  // context = {state, commit}
  addCart (context, payload) {
    return new Promise((resolve, reject) => {
        // 1.查找是否有相同商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // 2.判断oldProduct
      if(oldProduct){
        // oldProduct.count +=1
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前的商品数量+1')
      } else {
        // payload.count = 1
        // context.state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve('已添加到购物车')
      }
    })
  }
}