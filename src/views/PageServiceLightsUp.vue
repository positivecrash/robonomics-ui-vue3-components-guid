<template>
    <robo-layout screen footer>
        <layout-header :items="items" />

        <robo-layout-section>
            <robo-grid columns-template="left-center-right">
                <layout-sidebar-left />

                <robo-grid-item>
                    <robo-card allowExpand>
                        <robo-card-label>
                            <robo-card-label-section>Lights up</robo-card-label-section>
                            <robo-card-label-section info>
                                Set color for smart lamp via Robonomics Subscription - Decentrilized IoT cloud alternative.
                            </robo-card-label-section>
                        </robo-card-label>

                        <robo-card-section>

                            <robo-grid columns="4rem 5fr">

                                <div>
                                    <robo-icon icon="lightbulb" :color="colorLightUp" size="huge" />
                                </div>

                                <robo-list gap="x2" fullLine>
                                    <robo-list-item>
                                        <robo-card-title size="3">Choose an account:</robo-card-title>
                                        <robo-account-polkadot extensionAllowShift inline short />
                                    </robo-list-item>

                                    <robo-list-item>
                                        <robo-card-title size="3">Get IoT Subscription:</robo-card-title>

                                        <!-- + If no subscription -->
                                        <robo-text size="big" weight="bold">
                                            <robo-status 
                                                type="warning"
                                                textRight="No active subscription"
                                            />
                                        </robo-text>
                                        <robo-text>Ask the <robo-link href="#">@robonomics_free_rws</robo-link> Telegram bot to add your account to the Workshop IoT Subscription</robo-text>
                                        <!-- - If no subscription -->

                                        <!-- + If subscription ok -->
                                        <robo-text size="big" weight="bold">
                                            <robo-status 
                                                type="success"
                                                textRight="Your Workshop IoT Subscription is active"
                                            />
                                        </robo-text>
                                        <robo-text><robo-link href="#">@robonomics_free_rws</robo-link></robo-text>
                                        <!-- - If subscription ok -->

                                    </robo-list-item>

                                    <robo-list-item>
                                        <robo-card-title size="3">Choose any color you like:</robo-card-title>
                                        <robo-input inputType="color" v-model="colorLightUp" />
                                    </robo-list-item>

                                    <robo-list-item>
                                        <robo-card-title size="3">Sign and send a transaction to the Robonomics Parachain:</robo-card-title>
                                        <robo-button>Submit a transaction</robo-button>
                                    </robo-list-item>
                                </robo-list>

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
    name: 'PageServiceLightsUp',

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
                href: 'services',
                },
                {
                text: 'Lights Up',
                active: true,
                href: 'lights-up',
                },
            ],

            colorLightUp: '#8CD517'
        }
    },
})
</script>