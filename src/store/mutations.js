import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations.type.js'
import Vue from 'vue'
import {getLocalStore, setLocalStore, removeLocalStore} from 'config/global'

export default {
  // 数量+1
  [ADD_COUNTER](state, payload){
  },
  // 添加商品
  [ADD_TO_CART](state, payload){
    // payload.count = 1;
    let cartList = state.cartList
    payload.checked = true;
    cartList.push(payload)
  },
  removeFormCar(state, iid) {
    // 根据 iid找到对应的商品id
    state.cartList.some((item,iid) => {
      if(item.iid === iid) {
        state.cartList.splice(iid,1)
        return true
      }
    })
    
    setLocalStore('cartList', state.cartList)
  },
  //商品数量加1
  goodsCurrent(state,payload){
    // 取出购物车
    let cartList = state.cartList
    // 查找相同id的商品
    let item = cartList.find(item => item.iid === payload.iid)
    // 赋值
    item.count = payload.value
    state.cartList = [...cartList];
    setLocalStore('cartList', state.cartList)

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
        if (isDefault){
          isDefault.isDefault = false
        }  
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
  },
  userInfo (state,{userInfo}) {
    // 把外界传来的UserInfo保存到state中的userInfo
    state.userInfo = userInfo
    setLocalStore('userInfo', state.userInfo)
  },
  // 初始化获取用户信息
  inituserInfo(state){
    let initUserInfo = getLocalStore('userInfo')
    if (initUserInfo) {
      state.userInfo = JSON.parse(initUserInfo)
    }
  },
  changeUserNickName(state, {nickName}) {
    // 从state中取出useRInfo
    let userInfo = state.userInfo
    console.log(userInfo);
    // 遍历userInfo的key取出username,替换成Value
    Object.keys(userInfo).forEach((info, index) => {
      if (info == 'user_name'){
        userInfo['user_name'] = nickName
        console.log(nickName);
      }
    })
    state.userInfo = {
      ...userInfo
    }
    setLocalStore('userInfo', state.userInfo)
  },
  // 用户生日
  userInfoBrithday (state, {brithday}) {
    // 取出state中的用户信息
    let userInfo = state.userInfo
    Object.values(userInfo).forEach((info,index) => {
      // 判断是否有brithday
      if(info.brithday){
        info.brithday = brithday
      }else {
        Vue.set(userInfo, 'brithday', brithday)
      }
    })
    state.userInfo = {
      ...userInfo
    }
    setLocalStore('userInfo', state.userInfo)
  },
  // 用户性别
  userInfoSex (state, {sex}) {
    // 取出用户信息
    let userInfo = state.userInfo
    Object.values(userInfo).forEach((info,index) => {
      //判断是否有sex
      if(info.sex){
        info.sex = sex
      }else {
        Vue.set(userInfo, 'sex', sex)
        console.log(sex);
        
      }
    })
    // 同步state数据
    state.userInfo = {
      ...userInfo
    }
    setLocalStore('userInfo', state.userInfo)
  },
  // 退出登录
  loginOut (state) {
    state.userInfo = {}
    state.cartList = []
    state.addressList = []
    removeLocalStore('userInfo')
    removeLocalStore('cartList')
    removeLocalStore('addressList')
  }
  
}