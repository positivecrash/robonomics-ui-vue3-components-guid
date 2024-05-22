<template>
  <Default />
</template>

<script setup>
import Default from "@/layouts/Default"

import { onMounted, watch } from 'vue'
import { useStore } from 'vuex'
const store = useStore()


const setExpireDate = () => {
  if(store.state.robonomicsUIvue.rws.active) {
    // записываем timestamp окончания подписки для подписки с владельцем active, если дата есть
    store.commit('rws/setExpiredate', new Date('2024-01-5').getTime())
    // Если подписка не находится совсем, то возращаем null
    // store.commit('rws/setExpiredate', null)
  }
}

const getUsers = (gotusers) => {
  // Пожалуйста, если есть подписка в настройках, запиши мне список добавленных в подписку юзеров
  // и ещё см ниже, watch на активную подписку
  // возможно это будет конфликтовать с rwssetup (там у нас раньше получался этот список), так что нужно будет проверить
  if(store.state.robonomicsUIvue.rws.active) { 
    store.commit('rws/setUsers', gotusers)
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
  getUsers(['4Hd8jjS7MV5trMfPLok3KvpNTHt8frNwTb3ky6RwFzzXVQd7', '4Hd9ahv9X7528S5har385fqyUFSLbNZ2scg7x6ZWEA9e9EBV', '4Cso6mJhXZ2Gs6otXnQUdcxmBNdeqmpZaHguqAMXxNxKUeug', '4CcVUoz3QByNRmrmneCKeFGHWikCer7zn1xsVTgxD69vfx6k', '4GBbqwuDTN8UkpJSdNM12feeLwVvuekR3evZf527riU3zodo'])
  watch(() => store.state.robonomicsUIvue.rws.active , () => {
    setExpireDate()
    getUsers(['4CcVUoz3QByNRmrmneCKeFGHWikCer7zn1xsVTgxD69vfx6k'])
  })

})

</script>