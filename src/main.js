import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入组件库
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'
import '@/styles/basecss/base.css'
import '@/assets/fonts/iconfont.css'
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
