import Vue from 'vue'
import VueRouter from 'vue-router'

import state from '@/store/state';
import { Toast } from 'vant';

// 懒加载
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/category.vue')
const Shopcartome = () => import('views/shopcart/shopcart.vue')
const Profile = () => import('views/profile/profile.vue')
const Detail = () => import('views/detail/Detail.vue')
const AddressList = () => import('views/other/chilren/AddressList')
const AddressEdit = () => import('views/other/chilren/AddressEdit')
const EditAddress = () => import('views/other/chilren/EditAddress')
const Login = () => import('views/login/Login')
const UserInfo = () => import('views/profile/children/userInfo')
const ChangeNickName = () => import('views/profile/children/ChangeNickName')
const Other = () => import('views/other/Other')
const Coupon = () => import('views/profile/children/Coupon')
const Order = () => import('views/order/order')

// 解决多次点击重复路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)


const routes = [
  {
    path: '',
    redirect: '/home',
    meta: {showTab: true}
  },
  {
    path: '/home',
    component: Home,
    meta: {showTab: true}
  },
  {
    path: '/category',
    component: Category,
    meta: {showTab: true}
  },
  {
    path: '/shopcart',
    component: Shopcartome,
    meta: {
      showTab: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {showTab: true},
    children: [
      {
        path: 'userInfo',
        component: UserInfo,
        name: 'userInfo',
        children: [
          {
            path: 'changeNickName',
            name: 'ChangeNickName',
            component: ChangeNickName
          }
          
        ]
      },
      {
        path: 'other',
        component: Other,
        name: 'other'
      },
      {
        path: 'coupon',
        component: Coupon,
        meta: {
          requireAuth: true,
        }
      }
    ]
  },
  {
    path: '/detail/:iid',
    component: Detail,
  },
  {
    path: '/addresslist',
    component: AddressList,
    meta: {
      requireAuth: true,
    },
    children: [
      {
      path: 'editaddress',
      name: 'editaddress',
      component: EditAddress
      }
    ]
  },
  {
    path: '/addressedit',
    component: AddressEdit,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/order',
    component: Order,
    name: 'order',
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: 'addresslist',
        component: AddressList,
        name: 'addresslist'
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

// 路由守卫
router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth) {
    if (state.userInfo && state.userInfo.token) {
      next()
    }else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

export default router
