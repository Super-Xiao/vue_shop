import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);




axios.defaults.baseURL = "https://lianghj.top:8888/api/private/v1/"


axios.interceptors.request.use(config=>{
  // console.log(config);
  
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
