import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';  //引入
import 'element-ui/lib/theme-chalk/index.css';//样式
import axios from 'axios'


Vue.use(ElementUI);//注册使用

import "./assets/css/reset.css"
Vue.config.productionTip = false
Vue.prototype.axios = axios

require('mockjs')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.filter('getYMD', function(input) {

  return input.split(' ')[0];

})