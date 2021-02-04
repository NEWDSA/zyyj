import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/utils/global' //全局
import echarts from 'echarts'  //引入echarts
import ChartUtils from './utils/ChartUtil'
//控制路由表的js文件
import '@/permission.js'
Vue.prototype.$echarts=echarts;
Vue.prototype.$ChartUtils=ChartUtils;
Vue.config.productionTip = false;
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
