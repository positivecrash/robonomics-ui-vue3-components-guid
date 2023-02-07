<template>
    <robo-layout>
        <dapp-header title="RWS add user" />

        <robo-layout-section width="narrow">
          <robo-template-rws-user-setup 
            v-model:address="addressNew"
            v-model:name="nameNew"

            @before-user-setup="testBeforeSetup"
            @on-user-setup="testOnSetup"
            @after-user-setup="testAfterSetup"
          />
        </robo-layout-section>

        <robo-layout-section width="narrow">
          <robo-template-rws-setup-backup />
        </robo-layout-section>
   
    </robo-layout>
    

</template>

<script>
  export default { name: 'ExampleRwsusersetup' }
</script>

<script setup>
import dappHeader from '../../components/example/Header.vue'

import { ref } from 'vue'
let addressNew = ref(null)
let nameNew = ref(null)

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