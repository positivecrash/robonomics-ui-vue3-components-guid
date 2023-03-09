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

import datalog from '../../data/shtab/telemetry.json'
import config from '../../data/shtab/config.json'

import dappHeader from '../../components/example/Header.vue'

let onUpdateTest = (updateStatus) => {
  console.log('onUpdateTest')
  updateStatus('ok')
  // updateStatus('error')
}
</script>