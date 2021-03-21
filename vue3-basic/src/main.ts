import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.baseURL = 'http://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
    store.commit('setLoading', true)
    config.params = { ...config.params, icode: 'EDA487AFE20C48FC' }
    config.data = { ...config.data, icode: 'EDA487AFE20C48FC' }
    return config
})

axios.interceptors.response.use(config => {
    setTimeout(() => {
        store.commit('setLoading', false)
    }, 1000)
    return config
})

const app = createApp(App)

app.use(router).use(store).mount('#app')
