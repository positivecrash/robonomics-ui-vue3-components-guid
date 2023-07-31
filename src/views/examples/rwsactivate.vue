<template>
    <robo-layout>
        <dapp-header title="RWS activation" />

        <robo-layout-section>
          <robo-template-rws-activate 
            price="1.0000001"
            activationtime="2"
            available="7"
            rwsStatus="renew"
            rwsMessage="Your subscription has been expired, please renew it"
          />
        </robo-layout-section>

        <!-- 
          Примеры статусов и сообщений:

          rwsStatus="new"

          rwsStatus="error"
          rwsMessage="Subscription can not be activated due to unsuffcicient XRT balance"

          rwsStatus="renew"
          rwsMessage="Your subscription has been expired, please renew it"
        -->

    </robo-layout>

</template>

<script>
  export default { name: 'ExampleRwsactivate' }
</script>

<script setup>
import dappHeader from '../../components/example/Header.vue'
</script>