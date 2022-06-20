import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/stackoverflow-light.css'

import { robonomicsUI } from 'robonomics-ui-vue'
import 'robonomics-ui-vue/style.css'

import GuideSection from './components/GuideSection.vue'
import UseComponent from './components/UseComponent.vue'
import Props from './components/Props.vue'

const app = createApp(App)

app
    .use(router)
    .use(store)
    .use(VueHighlightJS)
    .use(robonomicsUI, { store })

app
    .component('GuideSection', GuideSection)
    .component('UseComponent', UseComponent)
    .component('Props', Props)

app.mount('#app')

