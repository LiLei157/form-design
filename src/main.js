import Vue from 'vue'
import App from './App.vue'
import {Icon} from 'view-design'
import 'view-design/dist/styles/iview.css';

import mView from './packages/index'

Vue.config.productionTip = false
Vue.use(mView)
Vue.component('i-icon',Icon)

new Vue({
  render: h => h(App),
}).$mount('#app')
