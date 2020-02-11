import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'vant/lib/index.css';

// 解决移动端点击延迟200ms的问题
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    fastclick.attach(document.body);
  }, false);
}


Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './assets/img/common/error.jpg',
  loading: require('./assets/img/common/loading.gif'),
  attempt: 1
})



Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
