<template>
    <robo-layout>
        <dapp-header title="Smart devices" />

        <robo-template-devices-layout 
          :beforeUpdate = "beforeUpdateTest"
          :onUpdate = "onUpdateTest"
          :afterUpdate = "afterUpdateTest"

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

let beforeUpdateTest = () => {
  console.log('beforeUpdateTest')
}

let onUpdateTest = () => {
  console.log('onUpdateTest')
}

let afterUpdateTest = (updateStatus) => {
  console.log('afterUpdateTest')
  updateStatus('ok')
  // updateStatus('error')
}
</script>