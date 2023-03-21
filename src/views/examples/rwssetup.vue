<template>
    <robo-layout>
        <dapp-header title="RWS setup" />
        
        <robo-layout-section>
          <robo-template-rws-setup 
          v-model:owner="ownerNew"
          v-model:controller="controllerNew"
          v-model:scontroller="scontrollerNew"
          v-model:name="nameNew"
          v-model:enddate="enddateNew"

          @on-rws-setup="testOnSetup"
          @owner-changed="setEnddate"
          />
        </robo-layout-section>
    </robo-layout>

</template>

<script>
  export default { name: 'ExampleRwssetup' }
</script>

<script setup>
import dappHeader from '../../components/example/Header.vue'

import { ref } from 'vue'
let ownerNew = ref(null)
let controllerNew = ref(null)
let scontrollerNew = ref(null)
let nameNew = ref('My Smart Devices')
let enddateNew = ref(null)

let setEnddate = () => {
  console.log('test owner-changed')
  enddateNew.value = Date.now()
}

let testOnSetup = (rwsStatus) => {
  console.log('test on-rws-setup')
  // rwsStatus('cancel')
  rwsStatus('ok')
  // rwsStatus('error', 'Your address not found in this subscription')
}
</script>