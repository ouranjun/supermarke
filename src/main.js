import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'

Vue.config.productionTip = false

Vue.use(MintUI)
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
