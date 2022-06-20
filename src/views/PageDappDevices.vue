<template>
    <robo-layout screen footer>
        <layout-header :items="items"/>

        <robo-layout-section>
            <robo-grid columns-template="left-center-right">
                <layout-sidebar-left />

                <robo-grid-item>
                    <robo-section>
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>Your subscription</robo-card-label-section>
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
                                </robo-list>
                            </robo-card-section>
                        </robo-card>
                    </robo-section>

                    <robo-section>
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>Your devices</robo-card-label-section>
                            </robo-card-label>
                            <robo-card-section>

                                <robo-section offset="x1">
                                    <robo-text>You may add here one of your robot - ROS-compatibale hardware or simulation model. <robo-link to="https://wiki.robonomics.network/docs/en/ros-smart-projects/">Learn more on WIKI</robo-link>. Control it and use datalog functions via blockchain with no transaction fees per block during the entire period of active subscription.</robo-text>
                                </robo-section>

                                <robo-section offset="x1">
     
                                    <robo-template-subsription-item 
                                        v-model:address="modelInputTest"
                                        v-model:name="modelInputTest2"
                                        status="loading"
                                        type="device"
                                    />

                                    <robo-template-subsription-item 
                                        v-model:address="modelInputTest"
                                        v-model:name="modelInputTest2"
                                        deviceInfoLink="/somelink?id=4GfqRUpa6i54YTTiSAYShFyQfRVPSYhTZ4RMK5naw31rGisd"
                                        status="added"                                        
                                        type="device"
                                    />

                                    <robo-template-subsription-item 
                                        v-model:address="modelInputTestEmpty"
                                        v-model:name="modelInputTestEmpty2"
                                        @on-add="callbackAdded"
                                        type="device"
                                    />

                                    <robo-template-subsription-item 
                                        v-model:address="modelInputTest"
                                        v-model:name="modelInputTest2"
                                        @on-add="callbackAdded"
                                        type="device"
                                    />
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
                    Robonomics release v1.2.2 <robo-link to="https://github.com/airalab/robonomics/releases">View changelog</robo-link>
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
                    text: 'Devices',
                    active: true,
                    href: 'devices',
                },
            ],
            modelInputTest: '4GfqRUpa6i54YTTiSAYShFyQfRVPSYhTZ4RMK5naw31rGisd',
            modelInputTest2: "Device 1",
            modelInputTestEmpty: '',
            modelInputTestEmpty2: ''
        }
    },

    methods: {
        callbackAdded() {
            console.log('DEVICE ADDED')
        },
    }
})
</script>