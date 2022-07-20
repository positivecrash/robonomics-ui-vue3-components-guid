<template>
    <robo-layout screen footer>
        <layout-header :items="items"/>

        <robo-layout-section>
            <robo-grid columns-template="left-center-right">
                <layout-sidebar-left />

                <robo-grid-item>
                    <robo-section>
                        <robo-card back-image="images/card-back-sample.png" back-position="100% 100%" back-size="contain">
                            <robo-card-label>
                                <robo-card-label-section>Subscription summary</robo-card-label-section>
                                <robo-card-label-section info>With this subscription you can interact with smart devices and robots via Robonomics parachain instead of centilized cloud services and providers.</robo-card-label-section>
                            </robo-card-label>
                            <robo-card-section>

                                <robo-card-title>
                                    <robo-status 
                                        type="success"
                                        textRight="1 month"
                                    />
                                </robo-card-title>
                                <robo-list>
                                    <robo-list-item>
                                        <robo-text weight="bold">Active till: 23.12.2022</robo-text>
                                    </robo-list-item>
                                    <robo-list-item>
                                        <robo-text weight="bold">
                                            Owner: 
                                            <robo-account-polkadot short inline />
                                        </robo-text>
                                    </robo-list-item>

                                    <robo-account-polkadot />
                                    <robo-account-polkadot selectable chain="0"/>
                                    <robo-account-polkadot chain="0" short />
                                    <robo-account-polkadot addressLocal="15CzEmZRy5Az2YNADEEuweXVe8XxaHbxHJjVZcd9rGuHuPCg" chain="0" short/>
                                    <robo-account-polkadot addressLocal="15CzEmZRy5Az2YNADEEuweXVe8XxaHbxHJjVZcd9rGuHuPCg" addressLocalAllowEdit chain="32" />
                                </robo-list>
                            </robo-card-section>
                        </robo-card>
                    </robo-section>

                    <robo-section>
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>Manage access</robo-card-label-section>
                            </robo-card-label>
                            <robo-card-section>

                                <robo-section offset="x1">
                                    <robo-text>Manage here addresses that can send transactions using your subscription (Users, IoT devices etc.)</robo-text>
                                </robo-section>

                                <robo-section offset="x1">
                                    
                                    <robo-template-subsription-item 
                                        v-model:address="modelInputTest"
                                        v-model:name="modelInputTest2"
                                        @on-add="addItemSuccess"
                                        @on-delete="deleteItem"

                                        :tipName="tipName2"
                                    />

                                    <robo-template-subsription-item 
                                        v-model:address="modelInputTest"
                                        v-model:name="modelInputTest2"
                                        @on-add="addItemError"

                                        :tipName="tipName2"
                                    />

                                    <robo-template-subsription-item 
                                        v-model:address="modelInputTest"
                                        v-model:name="modelInputTest2"
                                        @on-add="addItemErrorInput"

                                        :tipName="tipName2"
                                    />

                                    <robo-template-subsription-item 
                                        v-model:address="modelInputTest"
                                        v-model:name="modelInputTest2"
                                        status="loading"

                                        :tipName="tipName2"
                                    />

                                    <robo-template-subsription-item 
                                        v-model:address="modelInputTest"
                                        v-model:name="modelInputTest2"
                                        status="added"
                                        @on-add="addItemSuccess"
                                        @on-delete="deleteItem"
                                        @on-edit="editItem"

                                        :tipName="tipName2"
                                    />

                                    <robo-template-subsription-item 
                                        v-model:address="modelInputTest"
                                        v-model:name="modelInputTest2"
                                        :status="statusChangeTest"
                                        @on-add="addItemSuccess"
                                        @on-delete="deleteItem"
                                        @on-edit="editItem2"

                                        :tipName="tipName2"

                                        :disabled="ChangeTest"
                                    />

                                    <select v-model="statusChangeTest">
                                        <option value="new">new</option>
                                        <option value="added">added</option>
                                        <option value="loading">loading</option>
                                        <option value="deleted">deleted</option>
                                    </select>

                                    <select v-model="ChangeTest">
                                        <option :value="true">true</option>
                                        <option :value="false">false</option>
                                    </select>

                                </robo-section>


                            </robo-card-section>
                        </robo-card>
                    </robo-section>

                </robo-grid-item>

                <layout-sidebar-right />

            </robo-grid>
        </robo-layout-section>

        <robo-layout-footer>
            <robo-layout-section>
                <robo-text size="small">
                    Robonomics release v1.2.2 <robo-link href="https://github.com/airalab/robonomics/releases">View changelog</robo-link>
                </robo-text>
            </robo-layout-section>
        </robo-layout-footer>
    </robo-layout>
</template>

<script>
import { defineComponent } from 'vue'

import layoutHeader from '../components/Layout/Header.vue'
import layoutSidebarLeft from '../components/Layout/SidebarLeft.vue'
import layoutSidebarRight from '../components/Layout/SidebarRight1.vue'

export default defineComponent({
    name: 'PageDappSubsriptionManage',

    components: {
        layoutHeader,
        layoutSidebarLeft,
        layoutSidebarRight,
    },

    data() {
        return {
            items: [
                {
                    text: 'Dashboard',
                    href: 'dashboard',
                },
                {
                    text: 'Subscription',
                    active: true,
                    href: 'subscription',
                },
            ],
            modelInputTest: '4GfqRUpa6i54YTTiSAYShFyQfRVPSYhTZ4RMK5naw31rGisd',
            modelInputTest2: "Account 1",
            tipName: "You may take custom name for the account by <a href='https://wiki.polkadot.network/docs/learn-identity' target='_blank'>setting an identity</a>",
            tipName2: "The name will be saved only for this browser",
            statusChangeTest: 'new',
            ChangeTest: false
        }
    },

    methods: {

        addItemSuccess(addStarted, addStatus) {
            addStarted()
            console.log('[Subscripbtion test]: addItem from parent')
            
            setTimeout(
                function() {
                    addStatus(true)
                }
            , 2000)
        },
        addItemError(addStarted, addStatus) {
            addStarted()
            console.log('[Subscripbtion test]: addItem from parent')
            
            setTimeout(
                function(){
                    addStatus(false, 'not added error message')
                }
            , 2000)
        },
        addItemErrorInput(addStarted, addStatus) {
            addStarted()
            setTimeout(
                function(){
                    addStatus(false, 'Check the address, incorrect format')
                }
            , 300)
        },

        deleteItem(deleteStarted, deleteStatus){
            console.log('TEST')
            deleteStarted()
            console.log('[Subscripbtion test]: deleteItem from parent')
            
            setTimeout(
                function() {
                    deleteStatus(true)
                }
            , 500)
        },

        editItem(editStarted, editStatus) {

            editStarted()
            console.log('[Subscripbtion test]: some actions for saving edit')

            setTimeout(
                function() {
                    editStatus(false, 'no connection')
                }
            , 500)
        },

        editItem2(editStarted, editStatus) {

            editStarted()
            console.log('[Subscripbtion test]: some actions for saving edit')

            setTimeout(
                function() {
                    editStatus(true)
                }
            , 500)
        }
    }
})
</script>