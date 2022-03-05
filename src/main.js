import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/stackoverflow-light.css'

import { RoboUi } from 'robonomics-ui'
import 'robonomics-ui/lib.css'

import GuideSection from './components/GuideSection.vue'
import UseComponent from './components/UseComponent.vue'
import Props from './components/Props.vue'

const app = createApp(App)

app
    .use(router)
    .use(VueHighlightJS)
    .use(RoboUi)

app
    .component('GuideSection', GuideSection)
    .component('UseComponent', UseComponent)
    .component('Props', Props)

app.mount('#app')