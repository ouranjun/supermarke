import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/category.vue')
const Shopcartome = () => import('views/shopcart/shopcart.vue')
const Profile = () => import('views/profile/profile.vue')
const Detail = () => import('views/detail/Detail.vue')

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
    meta: {showTab: true}
  },
  {
    path: '/profile',
    component: Profile,
    meta: {showTab: true}
  },
  {
    path: '/detail/:iid',
    component: Detail,
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
