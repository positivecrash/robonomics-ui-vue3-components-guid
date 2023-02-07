<template>
    <robo-layout>
        <dapp-header title="RWS setup" />
        <robo-layout-section width="narrow">
          
          <robo-template-rws-setup 
          v-model:owner="ownerNew"
          v-model:controller="controllerNew"
          v-model:scontroller="scontrollerNew"
          v-model:name="nameNew"
          v-model:enddate="enddateNew"

          @before-rws-setup="testBeforeSetup"
          @on-rws-setup="testOnSetup"
          @after-rws-setup="testAfterSetup"

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
let nameNew = ref(null)
let enddateNew = ref(null)

let setEnddate = () => {
  console.log('test owner-changed')
  enddateNew.value = "02/10/2023"
}

let testBeforeSetup = () => {
  console.log('test before-rws-setup')
}

let testOnSetup = () => {
  console.log('test on-rws-setup')
}

let testAfterSetup = (rwsStatus) => {
  console.log('test after-rws-setup')
  rwsStatus('ok')
  // rwsStatus('error', 'Please check controller address')
}
</script>