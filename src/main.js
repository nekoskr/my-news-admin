import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.$axios = axios
