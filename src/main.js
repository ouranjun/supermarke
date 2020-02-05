import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'common/toast/index'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(toast)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/img/common/error.jpg',
  loading: require('./assets/img/common/loading.gif'),
  attempt: 1
})

fastclick.attach(document.body)

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
