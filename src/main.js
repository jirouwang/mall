import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index'
import toast from 'components/common/toast/index'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// vue实例:事件总线$bus
Vue.prototype.$bus = new Vue()

Vue.use(toast)

//fastclick移动端减少300ms延迟
FastClick.attach(document.body)

Vue.use(VueLazyLoad, {
  
})

new Vue({
  render: h => h(App),
  router,
  store,
  toast
}).$mount('#app')
