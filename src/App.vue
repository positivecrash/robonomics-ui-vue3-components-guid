<template>
  <Default />
</template>

<script setup>
import Default from "@/layouts/Default"

import { onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

let checkStatus = (owner, enddate) => {
  /* get enddate and update it */
  console.log(owner, enddate)

  /* посчитать нам нужно тянуть дату из блокчейна или нет */
  const now = new Date()
  const end = new Date(enddate)

  if( now && end && (end.getTime() - now.getTime()) < 0 ) {
    /* получаем дату окончания подписки для owner и возвращаем */
    return '10/20/2023'
  } else {
    return enddate
  }
  
}

onMounted( () => {

  // global data for the app

  // Нужно обновлять это значение всегда, когда обновляется это store.state.robonomicsUIvue.polkadot.address
  store.commit('polkadot/setBalanceXRT', 1000)
 
  store.commit('rws/setKey', process.env.VUE_APP_ROBONOMICS_UI_KEY)
  store.dispatch('rws/init')


  if( store.state.robonomicsUIvue.rws.list && store.state.robonomicsUIvue.rws.list.length > 0 ) {
    
    const arr = store.state.robonomicsUIvue.rws.list.map((item) => ({
          ...item, 
          enddate: checkStatus(item.owner, item.enddate)
    }))

    store.dispatch('rws/rewrite', arr)
  }
  
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