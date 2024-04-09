<template>
    <robo-layout>
        <dapp-header title="Buy RWS subscription" />

        <robo-layout-section>
          <robo-template-rws-buy 
            price="1.0000001"
            activationtime="2"
            available="7"

            :chainInfoUploaded="chainInfoStatus"
            :rwsExpiration="expiredate"
            @on-activate="activateRWS"
          />
        </robo-layout-section>

    </robo-layout>

</template>

<script>
  export default { name: 'ExampleRwsbuy' }
</script>

<script setup>
import { onMounted, watch, ref } from 'vue'
import dappHeader from '../../components/Header.vue'
import { useStore } from 'vuex'
const store = useStore()

const expiredate = ref(null)
const chainInfoStatus = ref(false)

onMounted( async () => {

  /*
  Проверка загрузки данных из чейна. Если все загрузилось, то ставим true.
  Можно оставить setTimeout всегда, чтобы лоадер сильно не мерцал, если данные быстро загрузились.
  */

  setTimeout(() => {
    chainInfoStatus.value = true
  }, 1000)
  
  /*
  При загрузке надо проверить есть ли подписка для подключенного адреса (store.state.robonomicsUIvue.polkadot.address)
  Если подписка есть (даже просроченная), то надо в библиотеку передать дату в prop rwsExpiration. Если подписки нет, передавай null 
  */

  expiredate.value = new Date('2024-02-05').getTime()

  /*
  Если подключенный полкадот адрес меняется, то надо опять проверить для этого адреса подписку и так же передать в prop rwsExpiration
  */

  watch( () => store.state.robonomicsUIvue.polkadot.address, () => {
    expiredate.value = new Date('2024-01-05').getTime()
    // expiredate.value = null
    // ну или дата окончания подписки для этого адреса
  })
})

let activateRWS = (responce) => {

  /*
  При активации подписки, пробуем активировать её для подключенного адреса;
  результат передаем с помощью функции responce(status, message)
  status - 'ok' или 'error'
  message - не обязательное поле, лучше только при ошибке что-то существенное писать, что поможет человеку понять что не так

  setTimeout здесь у меня для визуальной задержки. Если этот процесс сам по себе не быстрый, setTimeout можно убрать

  Потом если активация подписки прошла успешно, то надо передать в библиотеку дату таким образом: store.commit('rws/setExpiredate', дата окончания подписки) 
  */

  setTimeout(() => {
    responce('ok')
    // store.commit('rws/setExpiredate', new Date('2024-02-05').getTime())
  }, 1000)
}

</script>