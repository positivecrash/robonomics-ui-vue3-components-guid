<template>
    <robo-layout screen footer>
        <layout-header :items="items"/>

        <robo-layout-section>
            <robo-grid columns-template="left-center-right">
                <layout-sidebar-left />

                <robo-grid-item>
                    <robo-card backColor="lightblue" backImage="images/card-back-sample.png" backPosition="100% 100%" backSize="contain">
                        
                        <robo-card-label>
                            <robo-card-label-section>Your subscription</robo-card-label-section>
                            <robo-card-label-section info>With this subscription you can interact with smart devices and robots via Robonomics parachain instead of centilized cloud services and providers.</robo-card-label-section>
                        </robo-card-label>
                        <!-- <robo-card-section maxWidth="80%"> -->
                        <robo-card-section>
                            <robo-card-title>Use Decentralized IoT</robo-card-title>
                            <!-- <div style="display:flex;gap:calc(var(--space)*4);margin-bottom:calc(var(--space)*2);">
                                <div>
                                    <small style="font-size:80%;font-weight:300">Price from</small><br/>
                                    <b style="font-size:120%">0.5XRT</b>
                                </div>
                                <div>
                                    <small style="font-size:80%;font-weight:300">Activation time ~</small><br/>
                                    <b style="font-size:120%">2 min</b>
                                </div>
                                <div>
                                    <small style="font-size:80%;font-weight:300">Limited subscriptions</small>
                                    <br/>
                                    <b style="font-size:120%">5 available</b>
                                </div>
                            </div> -->
                            <robo-list fullLine>
                                <robo-list-item>
                                    <small>Price from</small>
                                    <h3>0.5XRT</h3>
                                </robo-list-item>
                                <robo-list-item>
                                    <small>Activation time ~</small>
                                    <h3>2 min</h3>
                                </robo-list-item>
                                <robo-list-item>
                                    <small>Available</small>
                                    <h3>5 subscriptions</h3>
                                </robo-list-item>
                            </robo-list>
                            <robo-button href="/subscription" icon-left="rss">Activate subscription</robo-button>
                        </robo-card-section>
                    </robo-card>

                    <robo-grid columnsRepeat="2" mediaMobile="transfer">
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