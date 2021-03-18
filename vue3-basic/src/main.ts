import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.baseURL = 'http://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
    config.params = { ...config.params, icode: 'EDA487AFE20C48FC' }
    return config
})

axios.get('columns', { params: { key: 'test' } }).then(res => {
    console.log('res:', res)
})

const app = createApp(App)

app.use(router).use(store).mount('#app')
