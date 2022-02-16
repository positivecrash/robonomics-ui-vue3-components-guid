import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Buttons from '../views/Buttons.vue'
import Loaders from '../views/Loaders.vue'
import Logo from '../views/Logo.vue'
import Breadcrumbs from '../views/Breadcrumbs.vue'
import Icons from '../views/Icons.vue'
import Sidebar from '../views/Sidebar.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "buttons" */ '../views/Buttons.vue')
  },
  {
    path: '/loaders',
    name: 'Loaders',
    component: Loaders
  },
  {
    path: '/logo',
    name: 'Logo',
    component: Logo
  },
  {
    path: '/breadcrumbs',
    name: 'Breadcrumbs',
    component: Breadcrumbs
  },
  {
    path: '/icons',
    name: 'Icons',
    component: Icons
  },
  {
    path: '/sidebar',
    name: 'Sidebar',
    component: Sidebar
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
