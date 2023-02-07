<template>
  <Default />
</template>

<script setup>
import Default from "@/layouts/Default"

import { onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

onMounted( () => {

  // global data for the app
  store.commit('polkadot/setBalanceXRT', 1000)

  store.commit('rws/setKey', process.env.VUE_APP_ROBONOMICS_UI_KEY)
  store.dispatch('rws/init')

  store.commit('rws/setLinkActivate', '/rwsactivate')
  store.commit('rws/setLinkList', '/rwssetupslist')
  store.commit('rws/setLinkSetup', '/rwssetup')
  store.commit('rws/setLinkDevices', '/telemetry')
  store.commit('rws/setLinkUsers', '/rwsuserslist')
  store.commit('rws/setLinkUseractivate', '/rwsusersetup')
  store.commit('ipfs/setGateways', ['https://ipfs.io/ipfs/'])
  

  // usage
  // console.log('rws list', store.state.robonomicsUIvue.rws.list)

})
</script>