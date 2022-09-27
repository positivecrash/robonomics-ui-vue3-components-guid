<template>
    <robo-layout screen footer>
        <layout-header :items="items"/>

        <robo-layout-section>
            <robo-grid columns-template="left-center-right">
                <layout-sidebar-left />

                <robo-grid-item>
                    <robo-card>
                        <robo-card-label>
                            <robo-card-label-section>Your subscription</robo-card-label-section>
                            <robo-card-label-section info>With this subscription you can interact with smart devices and robots via Robonomics parachain instead of centilized cloud services and providers.</robo-card-label-section>
                        </robo-card-label>

                        <robo-card-section>
                            <!-- <robo-section>
                                <robo-card-title offset="x0">Use Decentralized Web3 IoT</robo-card-title>
                            </robo-section> -->
                             
                            <robo-grid columnsRepeat="2" offset="x0" valign="center">
                                <!-- Не было и нет активной подписки -->
                                <!-- <div>
                                    <robo-grid flex mediaMobile="transfer" offset="x1">
                                        <div>
                                            <robo-text size="small" weight="light">Price<br/> from</robo-text>
                                            <robo-text weight="bold" nowrap>1 XRT</robo-text>
                                        </div>
                                        <div>
                                            <robo-text size="small" weight="light">Activation time ~</robo-text>
                                            <robo-text weight="bold" nowrap>2 min</robo-text>
                                        </div>
                                        <div>
                                            <robo-text size="small" weight="light">Available subscriptions</robo-text>
                                            <robo-text  weight="bold" nowrap>42</robo-text>
                                        </div>
                                    </robo-grid>

                                    <robo-button href="/subscription" icon-left="rss" type="alarm">Activate subscription</robo-button>
                                </div> -->

                                <!-- Есть активная подписка -->
                                <!-- <div>
                                    <robo-card-title>
                                        <robo-status 
                                            type="success"
                                            textRight="1 month"
                                        />
                                    </robo-card-title>
                                    
                                    <robo-section>
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
                                    </robo-section>

                                    <robo-button href="/subscription" icon-left="rss" type="ok">Manage subscription</robo-button>
                                </div> -->


                                <!-- Подписка просрочена -->
                                <div>
                                    <robo-card-title>
                                        <robo-status 
                                            type="warning"
                                            textRight="Expired"
                                        />
                                    </robo-card-title>
                                    
                                    <robo-section>
                                        <robo-list>
                                            <robo-list-item>
                                                <robo-text weight="bold">Expired on: 23.12.2022</robo-text>
                                            </robo-list-item>
                                            <robo-list-item>
                                                <robo-text weight="bold">
                                                    Owner: 
                                                    <robo-account-polkadot short inline />
                                                </robo-text>
                                            </robo-list-item>
                                        </robo-list>
                                    </robo-section>

                                    <robo-button href="/subscription" icon-left="rss" type="alarm">Re-activate subscription</robo-button>
                                </div>

                                <robo-image src="images/man-subscription.png" aria-hidden="true" max="400px" />
                            </robo-grid>
                        </robo-card-section>
                       
                        <!-- <robo-card-section>
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
                        </robo-card-section> -->
                    </robo-card>

                    <robo-grid columnsRepeat="2" mediaMobile="transfer">
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>Your subscription statistics</robo-card-label-section>
                            </robo-card-label>
                            
                            
                            <robo-card-section>
                                <robo-details
                                    summaryIcon='user'
                                    summaryText='Adresses added: 2'
                                    tooltip
                                >
                                How many address you have added to subscription. <robo-link router="/">Manage it</robo-link>
                                </robo-details>
                            </robo-card-section>

                            <robo-card-section>
                                <robo-details
                                    summaryIcon='floppy-disk'
                                    summaryText='Datalog tx: 2330'
                                    tooltip
                                >
                                How many transactions you used for Datalog service within subscription. <robo-link router="/">Watch datalog</robo-link>
                                </robo-details>
                            </robo-card-section>

                            <robo-card-section>
                                <robo-details
                                    summaryIcon='power-off'
                                    summaryText='Launch tx: 150'
                                    tooltip
                                >
                                How many transactions you used for Launch service within subscription. <robo-link router="/">Switch on/off your smart devices</robo-link>
                                </robo-details>
                            </robo-card-section>

                            <robo-card-section>
                                <robo-details
                                    summaryIcon='right-left'
                                    summaryText='Liability tx: 0'
                                    tooltip
                                >
                                How many transactions you used for Liability service.
                                </robo-details>
                            </robo-card-section>

                            <!-- <robo-list>
                                <robo-list-item>
                                    <robo-text weight="bold">Adresses added: 2</robo-text>
                                </robo-list-item>
                                <robo-list-item>
                                    <robo-text weight="bold">Datalog tx: 2330</robo-text>
                                </robo-list-item>
                                <robo-list-item>
                                    <robo-text weight="bold">Launch tx: 150</robo-text>
                                </robo-list-item>
                                <robo-list-item>
                                    <robo-text weight="bold">Digital twin tx: 0</robo-text>
                                </robo-list-item>
                            </robo-list> -->
                        </robo-card>

                        <robo-card>
                            <robo-card-title size="2">For holders of parachain XRT</robo-card-title>
                            <robo-section>Bond your XRT in Robonomics parachain and earn approx. 10% annual revenue.</robo-section>
                            <robo-button href="#" icon-left="chart-pie" outlined>Stake XRT</robo-button>
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