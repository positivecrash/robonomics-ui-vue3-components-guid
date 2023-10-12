<template>
    <robo-layout>
        <dapp-header title="Smart devices" />

        <robo-template-devices-layout 
          :datalog="datalogData"
          :config="configData"
          :updateTime="updateTime"
        />

    </robo-layout>

</template>

<script>
  export default { name: 'ExampleTelemetry' }
</script>

<script setup>
import { ref, onMounted, watch } from 'vue'
import datalog from '../../data/shtab2/telemetry.json'
import datalog2 from '../../data/shtab2/telemetry2.json'
import config from '../../data/shtab2/config.json'

// import datalog from '../../data/shtab/telemetry.json'
// import datalog2 from '../../data/shtab/telemetry.json'
// import config from '../../data/shtab/config.json'

import dappHeader from '../../components/Header.vue'

// let onUpdateTest = updateStatus => {
//   console.log('onUpdateTest')
//   updateStatus('ok', Date.now())
//   // updateStatus('error')
// }

/* + test async */
// функция для эмуляции задержки загрузки данных из чейна
let getDatalog = (type) => {
  return new Promise(res => {
    let time = 500;
    if (type === "config") {
      time = 1000;
    }
    setTimeout(() => {
      if (type === "config") {
        res(config);
      } else if (type === "telemetry") {
        res(datalog);
      } else {
        res(datalog2);
      }
    }, time);
  });
}

const configData = ref(null)
const datalogData = ref(null)
const updateTime = ref(null)
/* - test async */

/* + get launch command */
import { useStore } from 'vuex'
const store = useStore()

onMounted( async () => {

    watch(() => store.state.robonomicsUIvue.rws.launch, value => {

      // пример обновления статус бара (сообщение будет показываться все время пока не перебьется новым, так как timeout: null)
      store.dispatch('app/setStatus', {value: 'Launch initiated', timeout: null})

      // обновление статуса для лаунч, тест
      // возможные статусы для транзации: 'pending', 'approved', 'declined', 'success', 'error'
      console.log('LAUNCH', value)
      const o = JSON.parse(value)
      
      if(o['tx'].tx_status === 'pending'){
        setTimeout(() => {
          o['tx'].tx_status = 'approved'
          store.commit('rws/setLaunch', JSON.stringify(o))
        }, 1000)

        setTimeout(() => {
          o['tx'].tx_status = 'declined'
          store.commit('rws/setLaunch', JSON.stringify(o))
        }, 3000)

        setTimeout(() => {
          o['tx'].tx_status = 'success'
          store.commit('rws/setLaunch', JSON.stringify(o))
        }, 6000)

        setTimeout(() => {
          o['tx'].tx_status = 'error'
          store.commit('rws/setLaunch', JSON.stringify(o))
        }, 9000)

        setTimeout(() => {
          o['tx'].tx_status = 'none'
          store.commit('rws/setLaunch', JSON.stringify(o))
        }, 12000)

      }
    })

    /* + test async */
    // первая загрузка данных
    configData.value = await getDatalog("config")
    datalogData.value = await getDatalog("telemetry")
    updateTime.value = Date.now()
    store.dispatch('app/setStatus', {value: 'Config & telemetry loaded', timeout: 3000})

    // обновление данных телеметрии
    setTimeout(async () => {
      datalogData.value = await getDatalog("telemetry2")
      updateTime.value = Date.now()
      store.dispatch('app/setStatus', {value: 'Config & telemetry updated', timeout: 3000})

    }, 4000)
    
    /* - test async */
})
/* - get launch command */
</script>