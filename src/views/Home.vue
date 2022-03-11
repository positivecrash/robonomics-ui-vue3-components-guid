<template>
  <div class="home">
    <h1>Intro</h1>

    <guide-section
      :title = "'Установка'"
    >

<pre v-highlightjs>
<code class="bash">
npm install robonomics-ui
</code>
</pre>

      <p>или</p>

<pre v-highlightjs>
<code class="bash">
yarn add robonomics-ui
</code>
</pre>
     
    </guide-section>


    <guide-section
      :title = "'Глобальное подключение всех компонентов'"
    >

    <p><b>main.js</b></p>
<pre v-highlightjs>
<code class="javascript">
import { createApp } from 'vue'
import App from './App.vue'

import { RoboUi } from 'robonomics-ui'
import 'robonomics-ui/lib.css'

createApp(App).use(RoboUi)
</code>
</pre>
     
    </guide-section>


    <guide-section
      :title = "'Покомпонентное подключение'"
    >

      <p><b>main.js</b></p>
<pre v-highlightjs>
<code class="javascript">
import 'robonomics-ui/lib.css'
</code>
</pre>

    <p><b>Your template file:</b></p>

<pre v-highlightjs>
<code class="javascript">
import { componentName } from 'robonomics-ui'
      
export default {
    components: { componentName }
}
</code>
</pre>
     
    </guide-section>

    <section>
      <h2>Компоненты</h2>

      <section>
        <h3>Примитивы, основные элементы</h3>

        <div>
          <router-link to="/buttons">Buttons</router-link>
        </div>

        <div>
          <router-link to="/loaders">Loaders</router-link>
        </div>

        <div>
          <router-link to="/logo">Logo</router-link>
        </div>

        <div>
          <router-link to="/breadcrumbs">Breadcrumbs</router-link>
        </div>

        <div>
          <router-link to="/icons">Icons</router-link>
        </div>

        <div>
          <router-link to="/sidebar">Sidebar</router-link>
        </div>

        <div>
          <router-link to="/cards">Cards</router-link>
        </div>

        <div>
          <router-link to="/progress">Progress</router-link>
        </div>

        <div>
          <router-link to="/form-elements">Form elements</router-link>
        </div>

      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
