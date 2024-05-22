<template>
  <robo-layout>
      <dapp-header title="RWS setup" />

      <robo-layout-section>

        <robo-template-rws-setup
          :onRwsUpdate="rwsUpdateActions"
          :onUserDelete="removeUser"
          :onUserAdd="addUser"
          :onSaveHapass="saveHapass"
        />

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
import { onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
const store = useStore()

let saveHapass = (passToSave, responsePass) => {
  /*
    сохранение пароля

    нужно сначала проверить user, userseed - есть ли в подписке и тп
    если не все в порядке, возвращай responsePass('error') и можно еще добавить в чем проблема в качестве сообщения 

    USAGE: responsePass(status, message)
    status = 'ok' если пароль для текущего 'user' записался
    status = 'error' если пароль не записался
    message не обязательно
  */

  setTimeout(() => {
    // responsePass('ok')
    // responsePass('error', 'something went wrong during saving')
    responsePass('cancel')
  }, 1000)
}

let rwsUpdateActions = (rws, save) => {
  console.log('app rwsUpdateActions', rws, save)

  /* Usage:

  1) Check and save in chain some data from `rws`, if needed

  2) Use `save` function with attributes for passing result to lib's component
  save(status, message)
  status может быть 'ok', 'error'
  message любая строка */

  console.log('rws', rws)

  save('ok')
  // save('error', 'Что-то не записалось ой-ой-ой')
  // save('cancel')
}



const users = ref(null)

let addUser = (user, setStatus) => {

  /*
  Добавление пользователя.

  setTimeout - я установила себе для тестов, 
  но если есть вероятность, что действие будет происходить моментально, то надо оставить где-то 1000, 
  чтобы пользователю был виден лоадер
  
  add(status, message)
  status - результат действия, 'ok' (пользователь добавлен) или 'error' (пользователь не добавлен)
  message - сообщение, необязательно. Имеет смысл толкьо что-то передавать при ошибке, если есть что сказать.
  */

  setTimeout(() => {

    /* <тут какие-то действия по добавлению пользователя в подписку> */

    // setStatus('ok')
    setStatus('error', 'error message')
    // setStatus('cancel')

    //  у тебя это будет просто та же функция получения юзеров для активной подписки, я тут искусственно добавляю юзера в массив на уровне приложения для теста
    getuserlist('add', user)
  }, 3000)
}


let removeUser = (user, remove) => {
  /*
  Удаление пользователя.

  setTimeout - я установила себе для тестов, 
  но если есть вероятность, что действие будет происходить моментально, то надо оставить где-то 1000, 
  чтобы пользователю был виден лоадер
  
  remove(status, message)
  status - результат действия, 'ok' (пользователь удален) или 'error' (пользователь не удален)
  message - сообщение, необязательно. Имеет смысл толкьо что-то передавать при ошибке, если есть что сказать.
  */

  setTimeout(() => {

    console.log('user test', user)

    /* <тут какие-то действия по удалению пользователя в подписке> */
    
    // remove('ok')
    // remove('cancel')
    remove('error', 'error message')

    //  у тебя это будет просто та же функция получения юзеров для активной подписки, я тут искусственно удаляю юзера из массива на уровне приложения для теста
    // getuserlist('delete', user)
  }, 3000)
}

let getuserlist = (option, user) => {
  /* 
  получаем список юзеров и записываем его в дапп
  setTimeout тут для имитации задержки сети (мне для тестов, в дапп не нужно переносить)

  option, user - это мне для тестов, чтобы имитировать добавление и удаление
  */

  if(store.state.robonomicsUIvue.rws.active) { 
    setTimeout( () => {

      if(option === 'init') {
        users.value = ['4Hd8jjS7MV5trMfPLok3KvpNTHt8frNwTb3ky6RwFzzXVQd7', '4Hd9ahv9X7528S5har385fqyUFSLbNZ2scg7x6ZWEA9e9EBV', '4Cso6mJhXZ2Gs6otXnQUdcxmBNdeqmpZaHguqAMXxNxKUeug']
      }

      if(option === 'add') {
        users.value.push(user)
      }

      if(option === 'delete') {
        const i = users.value.indexOf(user)
        if( i >= 0 ) {
          users.value.splice(i, 1)
        }
      }

      store.commit('rws/setUsers', users.value)
    }, 2000)
  }
}

onMounted( () => {

  getuserlist('init')

  /* Ещё раз обновляем список юзеров, если сменилась активная подписка */
  watch( store.state.robonomicsUIvue.rws.active, () => {
    getuserlist('init')
  })

})


</script>