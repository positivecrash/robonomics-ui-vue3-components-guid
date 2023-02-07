<template>
    <robo-layout>
        <dapp-header title="Users in your RWS" />

        <robo-layout-section width="narrow" :vcenter="rws?.length < 1" :gcenter="rws?.length < 1">

          <robo-grid offset="x0">

            <robo-template-rws-activeselect 
              v-if="rws?.length > 1" 
              block
              label="Selected RWS"
            />

            <robo-template-rws-users-empty v-if="rws?.length < 1 || !users || users.length < 1" />
            
            <div v-else>
              <robo-grid offset="x1" gap="x1">
                <robo-template-rws-user-listitem 
                  v-for="(user , index) in users" :key="index" 

                  :owner = "rwsactive"
                  v-model:address = "user.address"
                  v-model:name = "user.name"

                  :beforeEdit = "testBeforeSetup"
                  :onEdit = "testOnSetup"
                  :afterEdit = "testAfterSetup"

                  @before-user-delete = "testBeforeDelete"
                  @on-user-delete = "testOnDelete"
                  @after-user-delete = "testAfterDelete"
                />
              </robo-grid>
              <robo-button block :router="store.state.robonomicsUIvue.rws.links.setup">+ Add user</robo-button>
          </div>

          </robo-grid>

        </robo-layout-section>

        <robo-layout-section width="narrow">
          <robo-template-rws-setup-backup />
        </robo-layout-section>

    </robo-layout>

</template>

<script>
  export default { name: 'ExampleRwsuserslist' }
</script>

<script setup>
import dappHeader from '../../components/example/Header.vue'

import { computed } from 'vue'


/* + get rws & users */
import { useStore } from 'vuex'
const store = useStore()

const rws = computed( () => {
  return store.state.robonomicsUIvue.rws.list
})

const rwsactive = computed( () => {
  return store.state.robonomicsUIvue.rws.active
})

const users = computed( () => {
  return store.getters['rws/users']
})
/* - get rws & users */



let testBeforeSetup = () => {
  console.log('test list before-rws-setup')
}

let testOnSetup = () => {
  console.log('test list on-rws-setup')
}

let testAfterSetup = (rwsStatus) => {
  console.log('test list after-rws-setup')
  rwsStatus('ok')
  // rwsStatus('error', 'Please check controller address')
}


let testBeforeDelete = () => {
  console.log('test list before-rws-delete')
}

let testOnDelete = () => {
  console.log('test list on-rws-delete')
}

let testAfterDelete = (userDelete) => {
  console.log('test list after-rws-delete')
  userDelete('ok')
  // rwsDelete('error', 'RWS setup has not been deleted')
}
</script>