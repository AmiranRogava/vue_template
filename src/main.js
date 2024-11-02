import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import axios from "axios"
const app = createApp(App)


app.config.globalProperties.$axios = axios

app.use(router)
app.use(store)

store.dispatch('initializeCart');

app.mount('#app')
