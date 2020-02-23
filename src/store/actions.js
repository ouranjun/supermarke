import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations.type.js'
import {
  getLocalStore,
  setLocalStore
} from 'config/global'

export default {
  // context = {state, commit}
  addCart (context, payload) {
    return new Promise((resolve, reject) => {
        // 1.查找是否有相同商品
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // 2.判断oldProduct
      if(oldProduct){
        // oldProduct.count +=1
        oldProduct.count += payload.count
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前的商品数量+'+ payload.count)
      } else {
        // payload.count = 1
        // context.state.cartList.push(payload)
        context.commit(ADD_TO_CART, payload)
        resolve('已添加到购物车')
      }
    })
  },
  // 同步用户信息
  syncuserInfo({commit}, userInfo) {
    commit('userInfo',{userInfo})
  },
  // 如果本地存在Token 那么就自动登录
  aotuLogin({commit}){
    // 从本地获取
    let userInfo = getLocalStore('userInfo')
    if(userInfo){
      commit('userInfo',{
        userInfo
      })
    }
  }
}