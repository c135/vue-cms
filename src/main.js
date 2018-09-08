import Vue from 'vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

import './lib/mui/css/mui.css'

import './lib/mui/css/icons-extra.css'

// 按需导入mint-ui组件
import { Header, Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);

import router from './router.js'

// 导入 App 根组件
import app from './app.vue'



var vue = new Vue({
  el:'#app',
  render:c => c(app),
  router
  
})