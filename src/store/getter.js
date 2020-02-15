// 引入本地存储
import {
  getLocalStore,
  setLocalStore,
  removeLocalStore
} from 'config/global'

export default {
  // 性别
  userSex (state) {
    if(state.userInfo.sex == '1') {
      return '美女'
    } else if (state.userInfo.sex == '2'){
      return '帅哥'
    }else {
      return '未填写'
    }
  }
}
