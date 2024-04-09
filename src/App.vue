<template>
  <Default />
</template>

<script setup>
import Default from "@/layouts/Default"

import { onMounted, watch } from 'vue'
import { useStore } from 'vuex'
const store = useStore()


let setExpireDate = () => {
  if(store.state.robonomicsUIvue.rws.active) {
    // записываем timestamp окончания подписки для подписки с владельцем active, если дата есть
    store.commit('rws/setExpiredate', new Date('2024-01-5').getTime())
    // Если подписка не находится совсем, то возращаем null
    // store.commit('rws/setExpiredate', null)
  }
}

onMounted( () => {

  // global data for the app
 
  store.commit('rws/setKey', process.env.VUE_APP_ROBONOMICS_UI_KEY)
  store.dispatch('rws/init')
  
  store.commit('rws/setLinkActivate', '/rwsbuy')
  store.commit('rws/setLinkSetup', '/rwssetup')
  store.commit('rws/setLinkSetupnew', '/rwssetupnew')
  store.commit('rws/setLinkDevices', '/telemetry')
  store.commit('ipfs/setGateways', ['https://ipfs.io/ipfs/', 'https://ipfs.io/ipfs2/'])
  
  store.commit('polkadot/setBalanceXRT', 1000)
  // Нужно обновлять это значение всегда, когда обновляется это store.state.robonomicsUIvue.polkadot.address
  // это можно сделать так:
  
  watch(() => store.state.robonomicsUIvue.polkadot.address, value => {
      // console.log лучше убрать, это я технически вставила, чтобы ошибок при сборке у меня не было
      console.log('from app', value)
      // получить баланс для value, то есть нового адреса и записать вот так:
      store.commit('polkadot/setBalanceXRT', 500)
  })

  // Нужно для выбранной подписки обновить её срок
  setExpireDate()
  watch(() => store.state.robonomicsUIvue.rws.active , () => {
    setExpireDate()
  })

})

</script>