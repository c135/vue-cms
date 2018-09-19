import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import moment from 'moment'

// 按需导入mint-ui组件
import { Header, Swipe, SwipeItem, Button, Lazyload } from 'mint-ui'

import router from './router.js'

// 导入 App 根组件
import app from './app.vue'

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Lazyload)

Vue.http.options.root = ' http://192.168.10.5:9000'
Vue.http.options.emulateJSON = true

Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Header.name, Header)

var vue = new Vue({
  el: '#app',
  render: c => c(app),
  router
})
