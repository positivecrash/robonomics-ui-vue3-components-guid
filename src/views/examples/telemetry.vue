<template>
    <robo-layout>
        <dapp-header title="Smart devices" />

        <robo-template-devices-layout 
          :onUpdate = "onUpdateTest"

          :datalog="datalog"
          :config="config"
        />

    </robo-layout>

</template>

<script>
  export default { name: 'ExampleTelemetry' }
</script>

<script setup>
import datalog from '../../data/Alena/telemetry.json'
import config from '../../data/Alena/config.json'

import dappHeader from '../../components/example/Header.vue'

let onUpdateTest = (updateStatus) => {
  console.log('onUpdateTest')
  updateStatus('ok')
  // updateStatus('error')
}

/* + get launch command */
import { useStore } from 'vuex'
const store = useStore()

import { onMounted, watch } from 'vue'
onMounted( () => {
    watch(() => store.state.robonomicsUIvue.rws.launch, value => {
      console.log('LAUNCH', value)
    })
})
/* - get launch command */
</script>