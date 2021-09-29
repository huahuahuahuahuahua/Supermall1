import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'
// import toast from './components/common/toast'
// createApp(App).mount('#app')
// Vue.prototype.$bus=new Vue()
 // createApp().config.globalProperties.bus
// app.config.globalProperties.$bus=bus
const app = createApp(App)
FastClick.attach(document.body)
// app.use(LazyLoad,{
//   // preLoad: 1.3,
//   // error: require('./assets/img/common/error.png'),
//   loading: require('./assets/img/common/placeholder.png')
// })

app.use(router)
app.mount('#app')
app.use(store)
// app.use(toast)
// app.use(router)
