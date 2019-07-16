import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'

import router from './router/index'
import store from './store/index'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(MuseUI)

const ToastOption = {
  position: 'top', // 弹出的位置
  time: 2000, // 显示的时长
  closeIcon: 'close', // 关闭的图标
  close: true, // 是否显示关闭按钮
  successIcon: 'check_circle', // 成功信息图标
  infoIcon: 'info', // 信息信息图标
  warningIcon: 'priority_high', // 提醒信息图标
  errorIcon: 'warning' // 错误信息图标
}
import Toast from 'muse-ui-toast';
Vue.use(Toast, ToastOption);

import Message from 'muse-ui-message';
import 'muse-ui-message/dist/muse-ui-message.css';
Vue.use(Message);

export const vueInstance = new Vue({
  router,
  store,
  ...App
}).$mount('#app')
