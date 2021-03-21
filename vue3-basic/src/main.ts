import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.baseURL = 'http://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
    config.params = { ...config.params, icode: 'EDA487AFE20C48FC' }
    store.commit('setLoading', true)
    return config
})

axios.interceptors.response.use(config => {
    setTimeout(() => {
        store.commit('setLoading', false)
    }, 2000)
    return config
})

const app = createApp(App)

app.use(router).use(store).mount('#app')
