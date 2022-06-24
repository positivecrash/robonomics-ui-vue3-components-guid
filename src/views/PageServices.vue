<template>
    <robo-layout screen footer>
        <layout-header :items="items" />

        <robo-layout-section>
            <robo-grid columns-template="left-center-right">
                <layout-sidebar-left />

                <robo-grid-item>
                    <robo-card>
                        <robo-card-label>
                            <robo-card-label-section>Services</robo-card-label-section>
                            <robo-card-label-section info>
                                Robonomics contains a complete set of tools for developing 
                                IoT applications, both on the robotics and the user 
                                interface sides. Communication between the user and 
                                device happens using the most successful technologies 
                                from the Web3 world – IPFS, Ethereum, and Polkadot. 
                                Thus, developers can create modern and secure 
                                applications for Smart Cities and Industry 4.0.
                                <robo-link href="https://robonomics.network/">Learn more</robo-link>
                            </robo-card-label-section>
                        </robo-card-label>

                        <robo-card-section>
                            
                            <robo-grid columnsRepeat="3" offset="x0">

                                <robo-template-services-item 
                                    href="#"
                                    label="demo"
                                    picture="./images/services-lights-up.jpg"
                                    :providers="[{
                                        name: 'Robonomics Core Team',
                                        link: 'https://robonomics.network'
                                    }]"
                                    title="Lights up!"
                                >
                                    Set color for smart lamp via Robonomics Subscription - Decentrilized IoT cloud alternative.
                                </robo-template-services-item>

                                <robo-template-services-item 
                                    href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.rpc.robonomics.network%2F#/explorer"
                                    picture="./images/services-kusama-parachain.jpg"
                                    :providers="[{
                                        name: 'Robonomics Core Team',
                                        link: 'https://robonomics.network'
                                    }]"
                                    title="Robonomics Kusama Parachain"
                                >
                                    Robonomics won parachain slot in Kusama. Kusama parachain 
                                    is great opportunity for Robonomics to scale network up to 
                                    1 million IoT systems connected in real-time without any 
                                    centrilized regulators.
                                </robo-template-services-item>

                                <robo-template-services-item 
                                    href="#"
                                    picture="./images/services-kusama-parachain.jpg"
                                    :providers="[
                                    {
                                        name: 'Robonomics Core Team',
                                        link: 'https://robonomics.network'
                                    },
                                    {
                                        name: 'Airalab Rus',
                                        link: 'https://airalab.org/en/'
                                    }
                                    ]"
                                    title="Decentrilized sensors map"
                                >
                                    Robonomics won parachain slot in Kusama. Kusama parachain 
                                    is great opportunity for Robonomics to scale network up to 
                                    1 million IoT systems connected in real-time without any 
                                    centrilized regulators.
                                </robo-template-services-item>

                            </robo-grid>
                        </robo-card-section>
                    </robo-card>
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
    name: 'PageServices',

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
                text: 'Services',
                active: true,
                href: 'services',
                },
            ]
        }
    },
})
</script>