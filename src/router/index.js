import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AccountPolkadot from '../views/AccountPolkadot.vue'
import Buttons from '../views/Buttons.vue'
import Loaders from '../views/Loaders.vue'
import Logo from '../views/Logo.vue'
import Breadcrumbs from '../views/Breadcrumbs.vue'
import Icons from '../views/Icons.vue'
import Sidebar from '../views/Sidebar.vue'
import Cards from '../views/Cards.vue'
import Progress from '../views/Progress.vue'
import Select from '../views/Select.vue'
import Layouts from '../views/Layouts.vue'
import Grid from '../views/Grid.vue'
import PageDappLoading from '../views/PageDappLoading.vue'
import PageDappLayoutLoading from '../views/PageDappLayoutLoading.vue'
import PageDappSections from '../views/PageDappSections.vue'
import PageDappSections2 from '../views/PageDappSections-2.vue'
import PageDappNewSubsription from '../views/PageDappNewSubsription.vue'
import PageDappSubsriptionManage from '../views/PageDappSubsriptionManage.vue'
import PageDappDevices from '../views/PageDappDevices.vue'
import PageServices from '../views/PageServices.vue'
import Store from '../views/Store.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account-polkadot',
    name: 'AccountPolkadot',
    component: AccountPolkadot
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
  {
    path: '/cards',
    name: 'Cards',
    component: Cards
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress
  },
  {
    path: '/select',
    name: 'Select',
    component: Select
  },
  {
    path: '/layouts',
    name: 'Layouts',
    component: Layouts
  },
  {
    path: '/grid',
    name: 'Grid',
    component: Grid
  },
  {
    path: '/page-dapp-loading',
    name: 'PageDappLoading',
    component: PageDappLoading,
    meta: {
      layout: 'Example'
    },
  },
  {
    path: '/page-dapp-layout-loading',
    name: 'PageDappLayoutLoading',
    component: PageDappLayoutLoading,
    meta: {
      layout: 'Example'
    },
  },
  {
    path: '/page-dapp-sections',
    name: 'PageDappSections',
    component: PageDappSections,
    meta: {
      layout: 'Example'
    },
  },
  {
    path: '/page-dapp-sections-2',
    name: 'PageDappSections2',
    component: PageDappSections2,
    meta: {
      layout: 'Example'
    },
  },
  {
    path: '/page-dapp-new-subsription',
    name: 'PageDappNewSubsription',
    component: PageDappNewSubsription,
    meta: {
      layout: 'Example'
    },
  },
  {
    path: '/page-dapp-subsription-manage',
    name: 'PageDappSubsriptionManage',
    component: PageDappSubsriptionManage,
    meta: {
      layout: 'Example'
    },
  },
  {
    path: '/page-dapp-devices',
    name: 'PageDappDevices',
    component: PageDappDevices,
    meta: {
      layout: 'Example'
    },
  },
  {
    path: '/page-services',
    name: 'PageServices',
    component: PageServices,
    meta: {
      layout: 'Example'
    },
  },
  {
    path: '/store',
    name: 'Store',
    component: Store
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
