<template>
  <div class="home">
   
    <guide-section
      :title = "'Установка'"
    >

<pre v-highlightjs>
<code class="bash">
npm install robonomics-ui-vue
</code>
</pre>

      <p>или</p>

<pre v-highlightjs>
<code class="bash">
yarn add robonomics-ui-vue
</code>
</pre>
     
    </guide-section>


<guide-section
      :title = "'Подготовка'"
    >
    <ol>
      <li><router-link to="/store">Подключить store</router-link></li>

      <li>
        Подключить компоненты в ./main.js (пока подключение доступно только глобальное):
<pre v-highlightjs>
<code class="javascript">
import { createApp } from 'vue'
import App from './App.vue'

import { RoboUi } from 'robonomics-ui-vue'
import 'robonomics-ui-vue/style.css'

createApp(App).use(RoboUi)
</code>
</pre>
      </li>
    </ol>
</guide-section>


<guide-section
      :title = "'Использование'"
    >

  <section>
    <h3>Компоненты</h3>

    <ul>
      <li><router-link to="/account-polkadot">Account Polkadot</router-link></li>
      <li><router-link to="/breadcrumbs">Breadcrumbs</router-link></li>
      <li><router-link to="/buttons">Button</router-link></li>
      <li><router-link to="/cards">Cards</router-link></li>
      <li><router-link to="/grid">Grid</router-link></li>
      <li><router-link to="/icons">Icons</router-link></li>
      <li><router-link to="/layouts">Layouts</router-link></li>
      <li><router-link to="/loaders">Loaders</router-link></li>
      <li><router-link to="/logo">Logo</router-link></li>
      <li><router-link to="/progress">Progress</router-link></li>
      <li><router-link to="/select">Select</router-link></li>
      <li><router-link to="/sidebar">Sidebar</router-link></li>
    </ul>
  </section>

  <section>
    <h3>Примеры страниц</h3>
    <ul>
      <li>Dapp loading: <router-link to="/page-dapp-loading">Example</router-link>, <a href="https://github.com/positivecrash/robonomics-ui-vue3-components-guide/blob/main/src/views/PageDappLoading.vue" target="_blank">Source</a></li>
      <li>Layout content loading: <router-link to="/page-dapp-layout-loading">Example</router-link>, <a href="https://github.com/positivecrash/robonomics-ui-vue3-components-guide/blob/main/src/views/PageDappLayoutLoading.vue" target="_blank">Source</a></li>
      <li>Dashboard, no subscription: <router-link to="/page-dapp-sections">Example</router-link>, <a href="https://github.com/positivecrash/robonomics-ui-vue3-components-guide/blob/main/src/views/PageDappSections.vue" target="_blank">Source</a></li>
      <li>Dashboard, with subscription: <router-link to="/page-dapp-sections-2">Example</router-link>, <a href="https://github.com/positivecrash/robonomics-ui-vue3-components-guide/blob/main/src/views/PageDappSections-2.vue" target="_blank">Source</a></li>
      <li>New subscription: <router-link to="/page-dapp-new-subsription">Example</router-link>, <a href="https://github.com/positivecrash/robonomics-ui-vue3-components-guide/blob/main/src/views/PageDappNewSubsription.vue" target="_blank">Source</a></li>
      <li>Subscription manage: <router-link to="/page-dapp-subsription-manage">Example</router-link>, <a href="https://github.com/positivecrash/robonomics-ui-vue3-components-guide/blob/main/src/views/PageDappSubsriptionManage.vue" target="_blank">Source</a></li>
      <li>Services: <router-link to="/page-services">Example</router-link>, <a href="https://github.com/positivecrash/robonomics-ui-vue3-components-guide/blob/main/src/views/PageServices.vue" target="_blank">Source</a></li>
      <!-- <li>Devices manage: <router-link to="/page-dapp-devices">Example</router-link>, <a href="https://github.com/positivecrash/robonomics-ui-vue3-components-guide/blob/main/src/views/PageDappDevices.vue" target="_blank">Source</a></li> -->
    </ul>
  </section>

</guide-section>
   
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
