import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/stackoverflow-light.css'

import { robonomicsUI } from 'robonomics-ui-vue'
import 'robonomics-ui-vue/style.css'

const app = createApp(App)

app
    .use(router)
    .use(store)
    .use(VueHighlightJS)
    .use(robonomicsUI, { store })
    // .use(robonomicsUI, { store, key: process.env.VUE_APP_ROBONOMICS_UI_KEY })

app.mount('#app')

