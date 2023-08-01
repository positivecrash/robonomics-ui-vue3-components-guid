<template>
    <robo-layout>
        <dapp-header title="RWS activation" />

        <robo-layout-section>
          <robo-template-rws-activate 
            price="1.0000001"
            activationtime="2"
            available="7"
            :rwsStatus="status"

            @on-activate="testEmit"
          />
        </robo-layout-section>

        <!-- 
          Примеры статусов и сообщений:

          rwsStatus="new"

          rwsStatus="error"
          rwsMessage="Subscription can not be activated due to unsuffcicient XRT balance"

          rwsStatus="renew"
          rwsMessage="Your subscription has been expired, please renew it"

          rwsStatus="ok"
          rwsMessage="You already have subsription"
        -->

    </robo-layout>

</template>

<script>
  export default { name: 'ExampleRwsactivate' }
</script>

<script setup>
import { ref } from 'vue'
import dappHeader from '../../components/example/Header.vue'

const status = ref('new')

let testEmit = () => {
  console.log('testEmit')
  status.value = 'processing'
  
  setTimeout(() => {
    status.value = 'ok'
  }, 1000)
}
</script>