import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import store from './store'
import toast from 'common/toast/index'

Vue.config.productionTip = false

Vue.use(toast)
//Vue.use(MintUI)

Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
