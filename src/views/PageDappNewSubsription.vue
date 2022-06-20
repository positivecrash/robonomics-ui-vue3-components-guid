<template>
    <robo-layout screen footer>
        <layout-header :items="items" />

        <robo-layout-section>
            <robo-grid columns-template="left-center-right">
                <layout-sidebar-left />

                <robo-grid-item>
                    <robo-card>
                        <robo-card-label>
                            <robo-card-label-section>New subscription</robo-card-label-section>
                            <robo-card-label-section info>With this subscription you can interact with smart devices and robots via Robonomics parachain instead of centilized cloud services and providers.</robo-card-label-section>
                        </robo-card-label>
                        <robo-card-section>

                            <!-- <robo-card-title>
                                New subscription
                            </robo-card-title> -->
                            <robo-list>
                                <robo-list-item>
                                    <robo-text size="small">Choose plan:</robo-text>
                                    <robo-text size="medium" highlight="link">
                                        <robo-select 
                                            :options="['1 month']"
                                            v-model="plan"
                                            clean
                                        />
                                    </robo-text>
                                </robo-list-item>
                                <robo-list-item>
                                    <robo-text size="small">Check owner account:</robo-text>
                                    <robo-text weight="light" size="tiny">[Polkadot ecosystem]</robo-text>
                                    <!-- {{$store.state.robonomicsUIvue.polkadot.address}} -->
                                    <robo-text gap size="medium" highlight="link">
                                        <robo-account-polkadot short />
                                    </robo-text>
                                </robo-list-item>
                                <robo-list-item>
                                    <robo-section>
                                        <robo-text size="small" gap>Price and terms:</robo-text>
                                        <robo-grid columnsRepeat="3" align="fit-content" embed>
                                            <robo-grid-item>
                                                <robo-text weight="light" size="small">Price from</robo-text>
                                                <robo-text weight="bold" size="medium">0.5 XRT</robo-text>
                                            </robo-grid-item>
                                            <robo-grid-item>
                                                <robo-text weight="light" size="small">Activation time ~</robo-text>
                                                <robo-text weight="bold" size="medium">2 min</robo-text>
                                            </robo-grid-item>
                                            <robo-grid-item>
                                                <robo-text weight="light" size="small">Available subscriptions</robo-text>
                                                <robo-text weight="bold" size="medium">5</robo-text>
                                            </robo-grid-item>
                                        </robo-grid>
                                    </robo-section>

                                    <robo-section>
                                        <robo-text size="small" gap>By activating the subscription, the address of any of your devices will have the right to priority transactions in the Robonomics parachain, which guarantees the ability to send transactions stably every block.</robo-text>
                                        <robo-text size="small" gap>During the entire period of active subscription, the device can send one transaction to the block for free.</robo-text>
                                    </robo-section>
                                </robo-list-item>

                                <!-- + successful submition -->
                                <!-- <robo-list-item>
                                    <robo-text weight="bold" size="medium">Please wait for activation <robo-loader /></robo-text>
                                </robo-list-item> -->
                                <!-- - successful submition -->
                            </robo-list>
                            <robo-button block size="big">Submit</robo-button>

                            <!-- + submition is in progress + loading attr for robo-card tag -->
                            <!-- <robo-button block size="big" disabled="disabled">Submitting</robo-button> -->
                            <!-- - submition is in progress -->

                            <!-- + successful submition -->
                            <!-- <robo-button block size="big" disabled="success">Submitted</robo-button> -->
                            <!-- - successful submition -->
                        </robo-card-section>
                    </robo-card>
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
    name: 'PageDappLayoutLoading',

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
            chainformat: 'Robonomics',
            plan: '1 month'
        }
    }
})
</script>