//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
window.isPc = /Windows|Macintosh|Linux/i.test(navigator.userAgent)
const app = createApp(App)

app.use(router)

app.mount('#app')
