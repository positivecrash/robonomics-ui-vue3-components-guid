<template>
    <robo-layout>
        <dapp-header title="Users in your RWS" />

        <robo-layout-section v-if="rws?.length < 1 || !users || users.length < 1" rwsrecover>
          <robo-section width="narrow" gcenter>
            <robo-template-rws-activeselect 
              v-if="rws?.length > 1" 
              block
              label="Selected RWS"
            />
            <robo-template-rws-users-empty />
          </robo-section>
        </robo-layout-section>

        <robo-layout-section v-else rwsrecover rwssave>

          <robo-section offset="x0" width="narrow">
            <robo-grid offset="x1" gap="x1">
                <robo-template-rws-user-listitem 
                  v-for="(user , index) in users" :key="index" 

                  :owner = "rwsactive"
                  v-model:address = "user.address"
                  v-model:name = "user.name"

                  :onEdit = "testOnSetup"
                  @on-user-delete = "testOnDelete"
                />
              </robo-grid>
              <robo-button block :router="store.state.robonomicsUIvue.rws.links.useractivate">+ Add user</robo-button>
          </robo-section>

        </robo-layout-section>



        <!-- <robo-layout-section width="narrow" :vcenter="rws?.length < 1" :gcenter="rws?.length < 1">

          <robo-template-rws-setup-backup position="side-right" />

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

                :onEdit = "testOnSetup"
                @on-user-delete = "testOnDelete"
              />
            </robo-grid>
            <robo-button block :router="store.state.robonomicsUIvue.rws.links.useractivate">+ Add user</robo-button>
        </div>

        </robo-layout-section> -->



    </robo-layout>

</template>

<script>
  export default { name: 'ExampleRwsuserslist' }
</script>

<script setup>
import dappHeader from '../../components/Header.vue'

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


let testOnSetup = (rwsStatus) => {
  console.log('test list on-rws-setup')
  rwsStatus('ok')
  // rwsStatus('error', 'Please check controller address')
}

let testOnDelete = (userDelete) => {
  console.log('test list on-rws-delete')
  userDelete('ok')
  // rwsDelete('error', 'RWS setup has not been deleted')
}
</script>