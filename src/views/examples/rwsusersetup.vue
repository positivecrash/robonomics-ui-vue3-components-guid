<template>
    <robo-layout>
        <dapp-header title="RWS add user" />

        <robo-layout-section rwsrecover>

          <robo-template-rws-user-setup 
            v-model:address="addressNew"
            v-model:name="nameNew"

            @on-user-setup="testOnSetup"
          />
          
        </robo-layout-section>
   
    </robo-layout>
    

</template>

<script>
  export default { name: 'ExampleRwsusersetup' }
</script>

<script setup>
import dappHeader from '../../components/Header.vue'

import { ref } from 'vue'
let addressNew = ref(null)
let nameNew = ref(null)

let testOnSetup = (rwsStatus) => {
  console.log('test on-rws-setup')
  rwsStatus('ok')
  // rwsStatus('cancel')
  // rwsStatus('error', 'Please check controller address')
}
</script>