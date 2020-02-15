import {ajax} from './request'

// 1. 定义基础路径
const BASE_URL = 'http://api.7-orange.cn:7300/mock/5def6a2d448e330a1116366e/api/'

// 2.手机验证码登录(POST)
// Easy Mock 模拟用户登录
export const phoneCaptchaLogin = (phone) => ajax(BASE_URL + 'login_code', {
  phone
}, 'POST');
