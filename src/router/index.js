import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/examples/home.vue'
import Services from '../views/examples/services.vue'
import CrossChain from '../views/examples/crosschain.vue'
import Rwsbuy from '../views/examples/rwsbuy.vue'
import Rwssetup from '../views/examples/rwssetup.vue'
import Rwssetupnew from '../views/examples/rwssetupnew.vue'
import Telemetry from '../views/examples/telemetry.vue'

const routes = [
  {
    path: '/',
    name: 'ExampleHome',
    component: Home
  },
  {
    path: '/cross-chain',
    name: 'ExampleCrossChain',
    component: CrossChain
  },
  {
    path: '/services',
    name: 'ExampleServices',
    component: Services
  },

  {
    path: '/rwsbuy',
    name: 'ExampleRwsbuy',
    component: Rwsbuy
  },

  {
    path: '/rwssetup',
    name: 'ExampleRwssetup',
    component: Rwssetup
  },

  {
    path: '/rwssetupnew',
    name: 'ExampleRwssetupnew',
    component: Rwssetupnew
  },

  {
    path: '/telemetry',
    name: 'ExampleTelemetry',
    component: Telemetry
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
