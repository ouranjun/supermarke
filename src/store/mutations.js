import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations.type.js'
import {getLocalStore, setLocalStore} from 'config/global'

export default {
  // 数量+1
  [ADD_COUNTER](state, payload){
    
  },
  // 添加商品
  [ADD_TO_CART](state, payload){
    // payload.count = 1;
    payload.checked = true;
    state.cartList.push(payload)
  },
  removeFormCar(state, iid) {
    // 根据 iid找到对应的商品id
    state.cartList.some((item,iid) => {
      if(item.iid === iid) {
        state.cartList.splice(iid,1)
        return true
      }
    })
  },
  init_UserAddress (state) {
    let initUsershoppingAddress = getLocalStore('addressList');
        state.addressList = JSON.parse(initUsershoppingAddress) || []
        
  },
  addUserAddress (state, {content}) {
    // 添加用户地址
    if (state.addressList.length !==0) {
      if (content.isDefault){
        let isDefault = state.addressList.find(item => item.isDefault === true)
        isDefault.isDefault = false
      }
    }
    state.addressList = [...state.addressList, content];
    // 将数据存储到本地
    setLocalStore('addressList', state.addressList);
    
  },
  // 修改用户地址信息
  changeUserAddres (state, { content }) {
    // 找到要被修改地址的索引
    const index = state.addressList.findIndex(item => item.id === content.id)
    
    // 默认地址
    if (state.addressList.length !==0) {
      if (content.isDefault){
        let isDefault = state.addressList.find(item => item.isDefault === true)
        isDefault.isDefault = false
      }
    }
    state.addressList.splice(index,1,content)
    // 更新本地数据
    setLocalStore('addressList', state.addressList)
  },
  // 删除用户地址
  deleteUserAddress (state, { id }) {
    // 过滤要删除的地址
    state.addressList = state.addressList.filter(item => item.id != id)
    setLocalStore('addressList', state.addressList)
  }
}