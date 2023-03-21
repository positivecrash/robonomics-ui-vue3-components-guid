<template>
    <robo-layout>
        <dapp-header title="HA setup" />

        <robo-layout-section>
          
          <robo-section mark="info" offset="x0" width="narrow">
            <robo-text offset="x0">
                You can create a password here to access your local Home Assistant account, if you already have an RWS subscription or have been added as a user to an RWS subscription. <robo-link href="https://wiki.robonomics.network/docs/global-administration#granting-access-to-user">More on Wiki</robo-link>
            </robo-text>
          </robo-section>

          <robo-section width="narrow">
            <form>
                <robo-grid offset="x0" gap="x1" columns="1">

                    <robo-grid-item>
                        <robo-text title="3" offset="x0">User credits</robo-text>
                    </robo-grid-item>

                    <robo-grid-item>
                        <robo-template-rws-activeselect size="small" block label="Choose RWS" />
                    </robo-grid-item>

                    <robo-grid-item>
                        <robo-address-polkadot 
                            v-model:address="address" 
                            chain="32" 
                            label="User address"
                        />
                    </robo-grid-item>

                    <robo-grid-item>
                        <robo-input 
                            label="User seed (12 words)"
                            v-model="seed"
                            type="password"
                            tip="The seed phrase provided here is essential for encrypting your data. We understand the sensitivity of this information and therefore, do not share it with any third parties or store it on our servers. As an extra layer of security, we recommend avoiding storing a large number of tokens in this account to reduce the risk of potential unauthorized access."
                        />
                    </robo-grid-item>

                    <robo-grid-item>
                        <robo-button
                        :type="buttonstatus"
                        block
                        >
                        Check
                        </robo-button>
                    </robo-grid-item>

                    <robo-grid-item>
                      <robo-text highlight="error">
                          <template>Oops! Looks like you missed filling in some required fields. Please fill in all required fields and try again.</template>
                          <template>Oops! It seems like your address has not been added to the RWS subscription.</template>
                      </robo-text>
                  </robo-grid-item>
                </robo-grid>


                <robo-grid offset="x1" gap="x1" columns="1" disabled>

                    <robo-grid-item>
                        <robo-text title="3" offset="x0">Create / restore password</robo-text>
                    </robo-grid-item>

                    <robo-grid-item>
                        <robo-input
                            label="New password"
                            v-model="password"
                            type="password"
                        />
                    </robo-grid-item>

                    <robo-grid-item>
                        <robo-input
                            label="Repeat password"
                            v-model="newpassword"
                            type="password"
                        />
                    </robo-grid-item>

                    <robo-grid-item>
                        <robo-button
                        :type="buttonstatus"
                        block
                        >
                        Submit
                        </robo-button>
                    </robo-grid-item>

                    <robo-grid-item>
                      <robo-text highlight="error">
                          <template>Oops! Something went wrong. Try again or contact us for help.</template>
                      </robo-text>
                    </robo-grid-item>

                </robo-grid>
            </form>
          </robo-section>

          <robo-section mark="question" marktitle="What's next" offset="x0" width="narrow">
            <robo-text offset="x0">
                <p>To open your local Home Assistant panel:</p>
                <p>1. Please enter in browser the following url: http://YOUR_LOCAL_IP:8123</p>
                <p>2. Login: enter your user address</p>
                <p>3. Password: enter password you created here</p>
            </robo-text>
          </robo-section>

        </robo-layout-section>


            
            <!-- <robo-template-ha-setup 
            v-model:owner="ownerNew"
            v-model:controller="controllerNew"
            v-model:scontroller="scontrollerNew"
            v-model:name="nameNew"
            v-model:enddate="enddateNew"

            @on-rws-setup="testOnSetup"
            @owner-changed="setEnddate"
          /> -->
    </robo-layout>

</template>

<script>
  export default { name: 'ExampleHasetup' }
</script>

<script setup>
import dappHeader from '../../components/example/Header.vue'

import { ref } from 'vue'
let address = ref(null)
let seed = ref(null)
let password = ref(null)
let newpassword = ref(null)
</script>