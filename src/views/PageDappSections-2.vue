<template>
    <robo-layout screen footer>
        <layout-header :items="items"/>

        <robo-layout-section>
            <robo-grid columns-template="left-center-right">
                <layout-sidebar-left />

                <robo-grid-item>
                    <robo-card back-image="images/card-back-sample.png" back-position="100% 100%" back-size="contain">
                        <robo-card-label>
                            <robo-card-label-section>Your subscription</robo-card-label-section>
                            <robo-card-label-section info>With this subscription you can interact with smart devices and robots via Robonomics parachain instead of centilized cloud services and providers.</robo-card-label-section>
                        </robo-card-label>
                        <robo-card-section>
                            <!-- <robo-details summary-icon="circle-info" summary-text="tip">test</robo-details>
                            <br/>
                            <robo-details summary-text="i" button tooltip="bottom-start">
                                With this subscription you can interact with smart devices and robots via Robonomics parachain instead of centilized cloud services and providers.
                            </robo-details>
                            <br/>
                            <robo-details summary-text="popup" popup>popup</robo-details> -->

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
                                        <robo-account 
                                            type="polkadot" 
                                            status="ready" 
                                            :accounts="['CbJzGu7WnL228wf4xsWcX4qrhGWGnRQM7BiYiPbygJwdvqd']"
                                            name="accountSidebarPolkadot"
                                            short
                                            copy
                                            clean
                                            inline
                                        />
                                    </robo-text>
                                </robo-list-item>    
                            </robo-list>
                            <robo-button href="/subscription" icon-left="rss">Manage subscription</robo-button>
                        </robo-card-section>
                    </robo-card>

                    <robo-grid columnsRepeat="2">
                        <robo-card>
                            <robo-card-title size="2">For holders of parachain XRT</robo-card-title>
                            <robo-section>Bond your XRT in Robonomics parachain and earn approx. 10% annual revenue.</robo-section>
                            <robo-button href="#" icon-left="chart-pie" outlined>Stake XRT</robo-button>
                        </robo-card>
                        <robo-card>
                            <robo-card-title size="2">ERC-20 XRT to parachain XRT</robo-card-title>
                            <robo-section>Take your XRT from Ethereum to Robonomics Parachain.</robo-section>
                            <robo-button href="#" icon-left="right-left" outlined>Request</robo-button>
                        </robo-card>
                    </robo-grid>
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
                active: true,
                href: 'dashboard',
                },
            ],
            chainformat: 'Robonomics'
        }
    },
})
</script>