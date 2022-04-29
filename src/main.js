import Vue from 'vue'
import App from './App.vue'
import 'view-design/dist/styles/iview.css';
import iView from 'view-design';

import mView from './packages/index'


Vue.config.productionTip = false
Vue.use(iView)
Vue.use(mView)

new Vue({
  render: h => h(App),
}).$mount('#app')
