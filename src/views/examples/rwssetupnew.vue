<template>
  <robo-layout>
      <dapp-header title="New RWS setup" />
      <robo-layout-section>

        <robo-template-rws-setup create :onRwsUpdate="test" />
        
      </robo-layout-section>

      <dapp-footer />
  </robo-layout>

</template>

<script>
  export default { name: 'ExampleRwssetup' }
</script>

<script setup>
import dappHeader from '../../components/Header.vue'
import dappFooter from '../../components/Footer.vue'

let test = (rws, save) => {
  /* Usage:

  1) Check and save in chain some data from `rws`, if needed

  2) Use `save` function with attributes for passing result to lib's component
  save(status, message)
  status может быть 'ok', 'error'
  message любая строка */

  console.log('rws', rws)
  save('ok', 'ПРИВЕТ')
  // save('error', 'Что-то не записалось')
}
</script>