<template>
    <robo-layout>
        <dapp-header title="Smart devices" />

        <robo-template-devices-layout 
          :onUpdate = "onUpdateTest"

          :datalog="datalogData"
          :config="configData"
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

import dappHeader from '../../components/example/Header.vue'

let onUpdateTest = (updateStatus) => {
  console.log('onUpdateTest')
  updateStatus('ok')
  // updateStatus('error')
}

/* + test async */
// функция для эмуляции задержки загрузки данных из чейна
let getDatalog = (type) => {
  return new Promise(res => {
    let time = 2000;
    if (type === "config") {
      time = 3000;
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
/* - test async */

/* + get launch command */
import { useStore } from 'vuex'
const store = useStore()

onMounted( async () => {
    watch(() => store.state.robonomicsUIvue.rws.launch, value => {
      console.log('LAUNCH', value)
    })

    /* + test async */
    // первая загрузка данных
    configData.value = await getDatalog("config")
    datalogData.value = await getDatalog("telemetry")

    // обновление данных телеметрии
    setTimeout(async () => {
      datalogData.value = await getDatalog("telemetry2");
    }, 10000)
    /* - test async */
})
/* - get launch command */
</script>