import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations.type.js'

export default {
  // 数量+1
  [ADD_COUNTER](state, payload){
    payload.count++
  },
  // 添加商品
  [ADD_TO_CART](state, payload){
    payload.count = 1;
    payload.checked = true;
    state.cartList.push(payload)
  }
}