<template>
    <robo-layout>
        <dapp-header title="RWS edit" />
        <robo-layout-section width="narrow">
          <robo-template-rws-setup 
            edit

            v-model:owner="owner"
            v-model:controller="controller"
            v-model:scontroller="scontroller"
            v-model:name="name"

            @before-rws-edit="testBeforeEdit"
            @on-rws-edit="testOnEdit"
            @after-rws-edit="testAfterEdit"
          />
        </robo-layout-section>
    </robo-layout>

</template>

<script>
  export default { name: 'ExampleRwssetupEdit' }
</script>

<script setup>
import dappHeader from '../../components/example/Header.vue'

import { ref } from 'vue'
let owner = ref('5CSbZ7wG456oty4WoiX6a1J88VUbrCXLhrKVJ9q95BsYH4TZ')
let controller = ref('5CSbZ7wG456oty4WoiX6a1J88VUbrCXLhrKVJ9q95BsYH4TZ')
let scontroller = ref('rfkgk fkgkgl rlkgl rlrgl rlrlr, lrltl rlglggltglrg tgrh')
let name = ref('My home')

let testBeforeEdit = () => {
  console.log('test before-rws-edit')
}

let testOnEdit = () => {
  console.log('test on-rws-edit')
}

let testAfterEdit = (rwsStatus) => {
  console.log('test after-rws-edit')
  rwsStatus('ok')
  // rwsStatus('error', 'Please check controller address')
}
</script>