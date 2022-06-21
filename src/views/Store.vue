<template>
    <h1>$store</h1>

    <p>В компонентах созданы vuex значения, которые позволяют в любом месте обратиться к некоторым нужным данным.</p>
    <p>Чтобы ими воспользоваться, нужно для начала инициализировать store в даппе:</p>

    <ol>
        <li>
            Создать <code>./store.js</code>, если vuex не инициализировано в проекте:
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
      </pre>
</li>
<li>
      <p>И подключить в <code>main.js</code>:</p>
      <pre v-highlightjs>
        <code class="javascript">
import store from "./store"

const app = createApp(App)

app
    .use(store)
    .use(robonomicsUI, { store })
        </code>
      </pre>
</li>
    </ol>


    <guide-section
      :title = "'Использование'"
    >
        <ol>
            <li>
                <p><b>Текущий выбранный адрес polkadot</b></p>
                <p>По умолчанию null, при установке записывается в localStorage <code>robonomicsUIPolkadotAddress</code></p>
                <section>
                    <pre v-highlightjs><code class="javascript">$store.state.robonomicsUIvue.polkadot.address</code></pre>
                    <i>{{$store.state.robonomicsUIvue.polkadot.address}}</i>
                </section>
            </li>
            <li>
                <p><b>Текущий выбранный extension polkadot</b></p>
                <p>По умолчанию null, при установке записывается в localStorage <code>robonomicsUIPolkadotExtension</code></p>
                <section>
                    <pre v-highlightjs><code class="javascript">$store.state.robonomicsUIvue.polkadot.extension</code></pre>
                    <i>{{$store.state.robonomicsUIvue.polkadot.extension}}</i>
                </section>
            </li>
            <li>
                <p><b>Текущий выбранный формат chain polkadot</b></p>
                <p>По умолчанию 32, при установке записывается в localStorage <code>robonomicsUIPolkadotChain</code></p>
                <section>
                    <pre v-highlightjs><code class="javascript">$store.state.robonomicsUIvue.polkadot.chain</code></pre>
                    <i>{{$store.state.robonomicsUIvue.polkadot.chain}}</i>
                </section>
            </li>
        </ol>
    </guide-section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Store',
})
</script>
