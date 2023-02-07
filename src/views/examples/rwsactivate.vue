<template>
    <robo-layout>
        <dapp-header title="RWS activation" />
        <robo-layout-section width="narrow">
          <robo-template-rws-activate 
          price="1.0000001"
          activationtime="2"
          available="7"

          @before-rws-activate = "beforeActivate"
          @on-rws-activate = "onActivate"
          @after-rws-activate = "afterActivate"
          />
        </robo-layout-section>
    </robo-layout>

</template>

<script>
  export default { name: 'ExampleRwsactivate' }
</script>

<script setup>
import dappHeader from '../../components/example/Header.vue'

let beforeActivate = () => {
  console.log('beforeActivate test')
}

let onActivate = () => {
  console.log('onActivate test')
}

let afterActivate = (rwsStatus) => {
  console.log('afterActivate test')
  rwsStatus('ok')
  // rwsStatus('error', 'Subscription can not be activated due to unsuffcicient XRT balance')
}
</script>