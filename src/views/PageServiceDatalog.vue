<template>
    <robo-layout screen footer>
        <layout-header :items="items" />

        <robo-layout-section>
            <robo-grid columns-template="left-center-right">
                <layout-sidebar-left />

                <robo-grid-item>
                    <robo-section>
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>Overview</robo-card-label-section>
                            </robo-card-label>

                            <robo-card-section>
                                Watch your smart home data away from home without third party clouds. This service is a part of Robonomics IoT Subscription.  
                                Read our wiki for <robo-link href="https://wiki.robonomics.network/docs/home-assistant-begin/">more details</robo-link>.
                            </robo-card-section>
                            
                        </robo-card>
                    </robo-section>

                    <robo-section>
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>
                                    Your subscription
                                </robo-card-label-section>
                            </robo-card-label>

                            <robo-card-section>

                                <robo-card-title 
                                    size="3" 
                                    offset="x05"
                                    tooltip="Choose account that owns subsription"
                                    tooltipIcon="circle-question"
                                >
                                   1. Subscription
                                </robo-card-title>

                                <robo-account-polkadot 
                                    extensionAllowShift
                                    selectable
                                    short 
                                    addressType="ed25519"
                                />

                                <robo-notification 
                                    title="Subscription active till 15.09.2022"
                                    type="success"
                                    offset="x1" 
                                />

                                <!-- <robo-notification 
                                    title="No active subsription"
                                    type="warning"
                                    offset="x1" 
                                /> -->

                            </robo-card-section>

                            <robo-card-section>

                                <robo-card-title 
                                    size="3" 
                                    offset="x05"
                                    tooltip="Controller is an account, added in subscription accounts list and is used for decrypting chain data."
                                    tooltipIcon="circle-question"
                                >
                                   2. Controller
                                </robo-card-title>

                                <robo-section offset="x05">
                                    <robo-select 
                                        :options="['4FdCdaD5LFBS8GZ9XBzQT000004kbPPAJ1FpkkocDd9enZY', '4Hd9ahv9X700000har385fqyUFSLbNZ2scg7x6ZWEA9e9EBV', '4CcVUoz3QByNR00000CKeFGHWikCer7zn1xsVTgxD69vfx6k']"
                                        :values="['4FdCdaD5LFBS8GZ9XBzQT000004kbPPAJ1FpkkocDd9enZY', '4Hd9ahv9X700000har385fqyUFSLbNZ2scg7x6ZWEA9e9EBV', '4CcVUoz3QByNR00000CKeFGHWikCer7zn1xsVTgxD69vfx6k']"
                                        v-model="demo"
                                        block
                                    />
                               </robo-section>

                                <robo-section offset="x05">
                                    <robo-input 
                                        label="The seed phrase to encrypt data"
                                        tip="A seed phrase is a series of 12 simple randomized words"
                                        v-model="seed1"
                                        type="password"
                                        :disabled="$store.state.robonomicsUIvue.polkadot.address ? false : true"
                                    />
                                </robo-section>
                            </robo-card-section>

                        </robo-card>
                    </robo-section>


                    <robo-section>
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>
                                    Get telemetry
                                </robo-card-label-section>
                            </robo-card-label>

                            <robo-card-section>

                               <robo-section offset="x05">
                                    <robo-input 
                                        label="IPFS gateway (extended)"
                                        tip="You may insert your gateway for faster download (e.g. http://gateway.pinata.cloud/). Do it only if you know how it works."
                                        v-model="demo2"
                                    />
                               </robo-section>

                               <robo-section offset="x05">
                                <robo-button block>Download telemetry</robo-button>
                               </robo-section>

                            </robo-card-section>
                        </robo-card>
                    </robo-section>


                    <robo-section>
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>
                                    Get telemetry
                                </robo-card-label-section>
                            </robo-card-label>

                            <robo-card-section>

                               <robo-section offset="x05">
                                    <robo-notification 
                                        title="Telemetry succefully downloded"
                                        type="success"
                                        offset="x1" 
                                    />
                               </robo-section>
                               
                               <robo-section offset="x05">
                                    <robo-input 
                                        label="IPFS gateway (extended)"
                                        v-model="demo2"
                                        disabled
                                    />
                               </robo-section>

                               <robo-section offset="x05">
                                <robo-select 
                                    :options="['17.08.2022, 01:00:24', '17.08.2022, 00:50:18', '17.08.2022, 00:40:24']"
                                    :values="['17.08.2022, 01:00:24', '17.08.2022, 00:50:18', '17.08.2022, 00:40:24']"
                                    v-model="demo3"
                                    block
                                />
                                </robo-section>
                                
                            </robo-card-section>
                        </robo-card>
                    </robo-section>

                    <robo-section>
                        <robo-template-telemetry :data="demo4" />
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
    name: 'PageServiceDatalog',

    components: {
        layoutHeader,
        layoutSidebarLeft,
        layoutSidebarRight,
    },

    data() {
        return {
            items: [
                // {
                // text: 'Dashboard',
                // href: 'dashboard',
                // },
                {
                text: 'Services',
                href: 'services',
                },
                {
                text: 'Smart Home Telemetry',
                active: true,
                href: '/page-services-datalog',
                },
            ],
            seed1: '',
            subscriptionOwnerAddress: ' ',
            password: '',
            password2: '',
            errorPasswordCreate: false,
            passwordsFields: [
                {
                    key: 'created',
                    label: 'Created'
                },
                {
                    key: 'pass',
                    label: 'Password'
                },
                {
                    key: 'actions',
                    label: 'Actions',
                    align: 'right'
                }
            ],
            passwordsItems: [
                { created: '16.08.2022, 15:14:42', pass: '···', actions: '' },
                { created: '12.08.2022, 15:14:42', pass: '···', actions: '' },
            ],
            showPasswordPressed: [false, false],
            showPasswordPressedAll: false,
            demo: '4FdCdaD5LFBS8GZ9XBzQT000004kbPPAJ1FpkkocDd9enZY',
            demo2: 'https://ipfs.io/ipfs/',
            demo3: '17.08.2022, 01:00:24',
            demo4: '{ "a26a120b7403fa213b00e0dcc94722dd": { "name": "Forecast", "entities": { "weather.forecast_positivecrash_iphone_assistant": { "units": "None", "state": "partlycloudy" } } }, "bba9a1c61ba6c9721988b71a0cb84f24": { "name": "0x00158d00056f2c0a", "entities": { "sensor.0x00158d00056f2c0a_battery": { "units": "%", "state": "47" }, "sensor.0x00158d00056f2c0a_temperature": { "units": "°C", "state": "27.64" }, "sensor.0x00158d00056f2c0a_humidity": { "units": "%", "state": "42.69" } } }, "e7518f2e3aa3347ed4cdd1bc71e6c186": { "name": "0x00158d0003cf2044", "entities": { "sensor.0x00158d0003cf2044_battery": { "units": "%", "state": "None" }, "binary_sensor.0x00158d0003cf2044_occupancy": { "units": "None", "state": "off" }, "sensor.0x00158d0003cf2044_power_outage_count": { "units": "None", "state": "None" } } }, "e7af31b7803e05c6e31563b061fae184": { "name": "0xbc33acfffe4c626a", "entities": { "binary_sensor.0xbc33acfffe4c626a_water_leak": { "units": "None", "state": "off" }, "binary_sensor.0xbc33acfffe4c626a_battery_low": { "units": "None", "state": "off" }, "sensor.0xbc33acfffe4c626a_battery": { "units": "%", "state": "57" } } }, "ee11e74a68265f8cfe1951a67a515d93": { "name": "0xbc33acfffe4c5655", "entities": { "sensor.0xbc33acfffe4c5655_battery": { "units": "%", "state": "100" }, "sensor.0xbc33acfffe4c5655_action": { "units": "None", "state": "None" } } } }'
        }
    },

    methods: {
        checkPassword() {
            if( this.password == this.password2) {
                this.errorPasswordCreate = false
            } else {
                this.errorPasswordCreate = true
            }
        }
    }
})
</script>