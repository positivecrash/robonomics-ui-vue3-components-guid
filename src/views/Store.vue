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
      :title = "'Использование значений'"
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
            <li>
                <p><b>Объект с методами подключенного расширения Polkadot</b></p>
                <p>При установке записывается в localStorage <code>robonomicsUIPolkadotExtensionObj</code> в виде строки. Устанавливается каждый раз, когда обновляется список аккаунтов.</p>
                <section>
                    <pre v-highlightjs><code class="javascript">$store.state.robonomicsUIvue.polkadot.extensionObj</code></pre>

                    <p v-if="$store.state.robonomicsUIvue.polkadot.extensionObj">{{ $store.state.robonomicsUIvue.polkadot.extensionObj }}</p>
                    <p v-else>no extension object</p>
                </section>
            </li>
            <li>
                <p><b>Аккаунты Polkadot из подключенного расширения</b></p>
                <p>При установке записывается в localStorage <code>robonomicsUIPolkadotAccounts</code> в виде строки</p>
                <section>
                    <pre v-highlightjs><code class="javascript">$store.state.robonomicsUIvue.polkadot.accounts</code></pre>

                    <p v-if="$store.state.robonomicsUIvue.polkadot.accounts">{{ $store.state.robonomicsUIvue.polkadot.accounts }}</p>
                    <p v-else><robo-account-polkadot extensionAllowShift extensionShowIcon short /></p>
                </section>
            </li>
        </ol>
    </guide-section>


    <guide-section
      :title = "'Установка значений'"
    >
        <ol>
            <li>
                <p><b>Текущий адрес polkadot</b></p>
                <section>
                    <pre v-highlightjs>
                        <code class="javascript">
$store.commit('robonomicsUIvue/setPolkadotAddress', this.testAddressSet, {root: true }) 
                        </code>
                    </pre>
                </section>
                <section>
                    <p>Test: <input type="text" v-model="testAddressSet" @change="changeAddress"/></p>
                    <i>{{$store.state.robonomicsUIvue.polkadot.address}}</i>
                </section>
            </li>
            <li>
                <p><b>Текущее расширение polkadot</b></p>
                <section>
                    <pre v-highlightjs>
                        <code class="javascript">
$store.commit('robonomicsUIvue/setPolkadotExtension', this.testExtension, {root: true }) 
                        </code>
                    </pre>
                </section>
                <section>
                    <p>Test:
                        <robo-select 
                            v-model="testExtension"
                            :options="['polkadot-js','talisman', 'subwallet-js']"
                            @change="changeExtension"
                        />
                    </p>
                    <i>{{$store.state.robonomicsUIvue.polkadot.extension}}</i>
                </section>
            </li>
            <li>
                <p><b>Chain polkadot для формата адреса пользователя</b></p>
                <section>
                    <pre v-highlightjs>
                        <code class="javascript">
$store.commit('robonomicsUIvue/setPolkadotChain', this.testChain, {root: true }) 
                        </code>
                    </pre>
                </section>
                <section>
                    <p>Test:
                        <robo-select 
                            v-model="testChain"
                            :values="['32','2', '0']"
                            :options="['Robonomics', 'Kusama', 'Polkadot']"
                            @change="changeChain"
                        />
                    </p>

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

  data() {
      return {
          testAddressSet: this.$store.state.robonomicsUIvue.polkadot.address ? this.$store.state.robonomicsUIvue.polkadot.address : '',
          testExtension: 'polkadot-js',
          testChain: 32
      }
  },

  methods: {
    changeAddress() {
        this.$store.commit('robonomicsUIvue/setPolkadotAddress', this.testAddressSet, {root: true })
    },

    changeExtension() {
        this.$store.commit('robonomicsUIvue/setPolkadotExtension', this.testExtension, {root: true }) 
    },

    changeChain() {
        this.$store.commit('robonomicsUIvue/setPolkadotChain', this.testChain, {root: true })
    }
  }
})
</script>
