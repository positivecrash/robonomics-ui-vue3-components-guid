<template>
    <robo-layout>
        <dapp-header title="RWS activation" />
        <robo-layout-section width="narrow">
          <robo-template-rws-activate 
          price="1.0000001"
          activationtime="2"
          available="7"

          @on-rws-activate = "onActivate"
          />
        </robo-layout-section>
    </robo-layout>

</template>

<script>
  export default { name: 'ExampleRwsactivate' }
</script>

<script setup>
import dappHeader from '../../components/example/Header.vue'

let onActivate = (rwsStatus) => {
  console.log('onActivate test')
  rwsStatus('ok')
  // rwsStatus('error', 'Subscription can not be activated due to unsuffcicient XRT balance')
}

</script>