import Vue from 'vue'

import app from './app.vue'
import './lib/mui/css/mui.css'
import { Header } from 'mint-ui';

Vue.component(Header.name, Header);

var vue = new Vue({
  el:'#app',
  render:c => c(app)
})