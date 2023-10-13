<template>
    <robo-layout>
        <dapp-header title="Cross-chain" />

        <robo-layout-section>
          <robo-section offset="x0" width="narrow">
         
              <robo-text title="2">Cross-chain for XRT</robo-text>

              <robo-grid offset="x0" gap="x1" columns="1">
                <robo-account-polkadot
                    extensionAllowShift
                    extensionShowIcon
                    selectable
                    selectstyle
                    selectblock
                />

                <robo-card>
                  
                    <robo-grid offset="x0" gap="x1" columns="minmax(100px, 1fr) auto minmax(100px, 1fr)">
                      <robo-grid offset="x0" gap="x0" columns="1">
                        <robo-text size="small">From:</robo-text>
                        <robo-grid type="flex" offset="x0" gap="x05" galign="start">
                          <robo-image min="32px" max="32px" :src="chains[chainfrom].logo" />
                          <robo-text>{{chains[chainfrom].name}}</robo-text>
                        </robo-grid>
                      </robo-grid>

                      <robo-grid offset="x0" gap="x0" columns="1">
                        <div></div>
                        <robo-button @click.prevent="changeChain()" clean size="large"><robo-icon icon="right-left"/></robo-button>
                      </robo-grid>

                      <robo-grid offset="x0" gap="x0" columns="1" galign="right">
                        <robo-text size="small">To:</robo-text>
                        <robo-grid type="flex" offset="x0" gap="x05" galign="start">
                          <robo-image min="32px" max="32px" :src="chains[chainto].logo" />
                          <robo-text>{{chains[chainto].name}}</robo-text>
                        </robo-grid>

                      </robo-grid>
                    </robo-grid>

                </robo-card>

                <robo-grid offset="x0" gap="x05">
                  <robo-input label="Select amount of XRT" type="number" required :disabled="status === 'processing'" v-model="amount"/>
                  <robo-input label="Transfer to address" type="text" required :disabled="status === 'processing'" v-model="address"/>
                </robo-grid>

                <robo-button 
                    @click.prevent="transfer()"
                    :disabled="status === 'processing'"
                    :loading="status === 'processing'"
                    :type="buttonstatus"
                    block
                >
                {{buttontext}}
                </robo-button>

              </robo-grid>

  
          </robo-section>
        </robo-layout-section>

        <dapp-footer />

    </robo-layout>

</template>

<script>
  export default { name: 'CrossChain' }
</script>

<script setup>
import { ref } from 'vue'

import dappHeader from '../../components/Header.vue'
import dappFooter from '../../components/Footer.vue'

const chains = [
  {
    name: 'Robonomics',
    logo: 'images/chain-robonomics.svg'
  },
  {
    name: 'Basilisk',
    logo: 'images/chain-basilisk.svg'
  }
]

let status = ref('static')
let buttonstatus = ref('primary')
let buttontext = ref('Submit')
let chainfrom = ref(0)
let chainto = ref(1)
let amount = ref(null)
let address = ref(null)

let changeChain = () => {
  const shift = chainto.value
  chainto.value = chainfrom.value
  chainfrom.value = shift
}

let transfer = () => {
  status.value = 'processing'
  buttonstatus.value = 'na'
  buttontext.value = 'loading'
  
  setTimeout(() => {
    status.value = 'static'
    buttonstatus.value = 'ok'
    buttontext.value = 'Transferred'

    // buttonstatus.value = 'error'
    // buttontext.value = 'Some error ocured'
  }, '2000')

  setTimeout(() => {
    buttonstatus.value = 'primary'
    buttontext.value = 'Submit'
  }, '4000')
}
</script>