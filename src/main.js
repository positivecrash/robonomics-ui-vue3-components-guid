import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/stackoverflow-light.css'

import { RoboUi } from 'robonomics-ui'
import 'robonomics-ui/lib.css'

createApp(App)
    .use(router)
    .use(VueHighlightJS)
    .use(RoboUi)
    .mount('#app')