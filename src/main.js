// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import FastClick from 'fastclick'
import './permission'
import './mock'
import 'font-awesome/css/font-awesome.min.css'

import loading from './components/LoadingComponent'

FastClick.attach(document.body)
Vue.config.productionTip = false

Vue.use(loading)

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  router,
  store,
  render: h => h(App)
})
