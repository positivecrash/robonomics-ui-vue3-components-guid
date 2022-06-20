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
      <li>Создать <code>./store.js</code>, если vuex не инициализировано в проекте:
      <pre v-highlightjs>
        <code class="javascript">
import { createStore } from "vuex" 

const store = createStore({
   state:{
      name: "Vue"
   }
})

export default store
      </code>
      </pre></li>

      <li>
        Подключить в ./main.js (пока подключение доступно только глобальное):
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
      <li><router-link to="/page-dapp-loading">Dapp Loading</router-link></li>
      <li><router-link to="/page-dapp-layout-loading">Dapp layout loading content</router-link></li>
      <li><router-link to="/page-dapp-sections">Dapp sections test: dashboard no subscription</router-link></li>
      <li><router-link to="/page-dapp-sections-2">Dapp sections test: dashboard with subscription</router-link></li>
      <li><router-link to="/page-dapp-new-subsription">Dapp sections test: new subscription</router-link></li>
      <li><router-link to="/page-dapp-subsription-manage">Dapp sections test: subscription manage</router-link></li>
      <li><router-link to="/page-dapp-subsription-manage">Dapp sections test: subscription manage</router-link></li>
      <li><router-link to="/page-dapp-devices">Dapp sections test: devices manage</router-link></li>
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
