<template>
  <!-- вариант редактирования подписки на отдельной странице. По сути сейчас не используется -->
    <robo-layout>
        <dapp-header title="RWS edit" />
        
        <robo-layout-section>
          <robo-template-rws-setup 
            edit

            v-model:owner="owner"
            v-model:controller="controller"
            v-model:scontroller="scontroller"
            v-model:name="name"
            v-model:enddate="date"

            @on-rws-edit="testOnEdit"
          />
        </robo-layout-section>
    </robo-layout>

</template>

<script>
  export default { name: 'ExampleRwssetupEdit' }
</script>

<script setup>
import dappHeader from '../../components/Header.vue'

import { ref } from 'vue'
let owner = ref('5CSbZ7wG456oty4WoiX6a1J88VUbrCXLhrKVJ9q95BsYH4TZ')
let controller = ref('5CSbZ7wG456oty4WoiX6a1J88VUbrCXLhrKVJ9q95BsYH4TZ')
let scontroller = ref('rfkgk fkgkgl rlkgl rlrgl rlrlr, lrltl rlglggltglrg tgrh')
let name = ref('My home')
let date = Date.now()

let testOnEdit = (rwsStatus) => {
  console.log('test on-rws-edit')
  rwsStatus('ok')
  // rwsStatus('error', 'Please check controller address')
}

</script>