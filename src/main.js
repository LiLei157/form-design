import Vue from 'vue'
import App from './App.vue'
import 'view-design/dist/styles/iview.css';
import useViewUI from './libs/index'
import mView from './packages/index'

//按需加载 view-design组件，抽离组件注册逻辑到单独的文件  /libs/index.js下
useViewUI()

Vue.config.productionTip = false
Vue.use(mView)


new Vue({
  render: h => h(App),
}).$mount('#app')
