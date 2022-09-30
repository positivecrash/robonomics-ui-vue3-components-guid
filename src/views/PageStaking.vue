<template>
    <robo-layout screen footer>
        <layout-header :items="items" />

        <robo-layout-section>
            <robo-grid columns-template="left-center-right">
                <layout-sidebar-left />

                <robo-grid-item>


                    <robo-section>
                        <robo-details block open :contentCloseOutOfFocus="false">
                            <template #summary>
                                <robo-section backColor="rgb(16, 118, 249)" textColor="#ffffff" offset="x0">
                                    <robo-card-title size="2" offset="x0">Stake your Parachain XRT and get rewards</robo-card-title>
                                </robo-section>
                            </template>

                            <robo-section backColor="rgb(0, 159, 253)" textColor="#ffffff" offset="x1">
                                <robo-text weight="normal-italic" offset="x1" hyphen>During 1st year of Kusama Slot lease by Robonomics it is allowed to stake XRT for token holders. These tokens take part in a pool of <robo-link router="/">IoT subscriptions</robo-link>.</robo-text>
                                <robo-text weight="bold-italic" offset="x0" hyphen>Rewards Distribution = 40Wn * XRT / block</robo-text>
                                <robo-text weight="bold-italic" offset="x0" hyphen>Increased Rewards Distribution = 200Wn * XRT / block</robo-text>
                                <robo-text weight="normal-italic" offset="x1" hyphen>1Wn = 1 XRT * 10-9</robo-text>
                            </robo-section>
                        </robo-details>
                    </robo-section>

                    <!-- <robo-section>
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>Overview</robo-card-label-section>
                            </robo-card-label>

                            <robo-card-section>
                                <robo-text weight="normal-italic" offset="x1" hyphen>Stake your Parachain XRT and get rewards.</robo-text>
                                <robo-text weight="normal-italic" offset="x1" hyphen>During 1st year of Kusama Slot lease by Robonomics it is allowed to stake XRT for token holders. These tokens take part in a pool of <robo-link router="/">IoT subscriptions</robo-link>.</robo-text>
                                <robo-text weight="bold-italic" offset="x0" hyphen>Rewards Distribution = 40Wn * XRT / block</robo-text>
                                <robo-text weight="bold-italic" offset="x0" hyphen>Increased Rewards Distribution = 200Wn * XRT / block</robo-text>
                                <robo-text weight="normal-italic" offset="x1" hyphen>1Wn = 1 XRT * 10-9</robo-text>
                            </robo-card-section>
                            
                        </robo-card>
                    </robo-section> -->

                    <robo-section>
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>Your bondings</robo-card-label-section>
                            </robo-card-label>

                            <robo-card-section>
                                <!-- <robo-table 
                                    :columns="bondingCols"
                                    :rows="bondingRows"
                                    layout="fixed"
                                >
 
                                    <template #cell(account)="{i}">
                                        <robo-text size="large">
                                            <robo-account-polkadot 
                                                :addressLocal="bondAccounts[i]" 
                                                chain="32" 
                                                short 
                                                inline 
                                            />
                                        </robo-text>
                                    </template>

                                </robo-table> -->

                                <robo-grid columnsRepeat="3" offset="x1" gap="x0" mediaMobile="transfer">
                                    <robo-section offset="x05">
                                        <robo-text size="small">Account</robo-text>
                                        <robo-text size="large" weight="bold">
                                            <robo-account-polkadot addressLocal="4CD6k39D3WZphu5aEwGDwZ3bFFZKvHK21Kof1DgdsL9a5agS" chain="32" short inline />
                                        </robo-text>
                                    </robo-section>
                                    
                                    <robo-section offset="x05">
                                        <robo-text size="small">Bonded</robo-text>
                                        <robo-text size="large" weight="bold">2.0000 XRT</robo-text>
                                    </robo-section>

                                    <robo-section offset="x05">
                                        <robo-text size="small">Rewards</robo-text>
                                        <robo-text size="large" weight="bold" highlight="success">0.0262 XRT</robo-text>
                                    </robo-section>
                                    
                                </robo-grid>

                                <robo-grid columnsRepeat="3" offset="x1" gap="x0" mediaMobile="transfer">
                                    <robo-section offset="x05">
                                        <robo-text size="small">Account</robo-text>
                                        <robo-text size="large" weight="bold">
                                            <robo-account-polkadot addressLocal="4GfqRUpa6i54YTTiSAYShFyQfRVPSYhTZ4RMK5naw31rGisd" chain="32" short inline />
                                        </robo-text>
                                    </robo-section>
                                    
                                    <robo-section offset="x05">
                                        <robo-text size="small">Bonded</robo-text>
                                        <robo-text size="large" weight="bold">0.4000 XRT</robo-text>
                                    </robo-section>

                                    <robo-section offset="x05">
                                        <robo-text size="small">Rewards</robo-text>
                                        <robo-text size="large" weight="bold" highlight="success">0.0008 XRT</robo-text>
                                    </robo-section>
                                    
                                </robo-grid>

                                <robo-section offset="x1">
                                    <robo-button block size="big" type="ok">Get rewards</robo-button>
                                </robo-section>
                                
                            </robo-card-section>
                            
                        </robo-card>
                    </robo-section>

                    <robo-section>
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>
                                    Control section
                                </robo-card-label-section>
                            </robo-card-label>

                            <robo-card-section>

                                <robo-section offset="x1">
                                    <robo-account-polkadot chain="32" short />
                                </robo-section>

                                <robo-section offset="x1">
                                    <robo-select 
                                        :options="['Unbond', 'Bond more', 'Get Rewards']"
                                        v-model="selectAction"
                                        block
                                    />
                                </robo-section>

                                <robo-section offset="x1">
                                    
                                    <robo-input 
                                        v-if="selectAction == 'Unbond'"
                                        label="How much XRT"
                                    />
                                    
                                    <robo-input 
                                        v-if="selectAction == 'Bond more'"
                                        label="How much XRT"
                                        tip="Please save some XRT tokens for transaction fees, don't bond all your XRT. You will need it to operate with bonded tokens in the future: claim rewards, bond more, unbond."
                                    />

                                    <robo-input 
                                        v-if="selectAction == 'Get Rewards'"
                                        label="Available XRT rewards"
                                        v-model="rewardsQty"
                                        disabled
                                    />

                                </robo-section>

                                <robo-section offset="x1">
                                    <robo-button block size="big">Submit</robo-button>

                                    <!-- process -->
                                    <!-- <robo-button block size="big" loading>Submitting...</robo-button> -->

                                    <!-- ok -->
                                    <!-- <robo-button block size="big" disabled="ok">Submited</robo-button> -->

                                    <!-- rewards transferred -->
                                    <!-- <robo-button block size="big" disabled>Submit</robo-button>
                                    <robo-notification type="success" title="Rewards successfully transferred" /> -->

                                    <!-- warning (that can be fixed by user) -->
                                    <!-- <robo-button block size="big">Submit</robo-button>
                                    <robo-notification type="warning" title="Insufficient balance on choosen account">It needs to be at least the value you specified here plus supposed transaction fee.</robo-notification> -->

                                    <!-- error (that can NOT be fixed by user) -->
                                    <!-- <robo-button block size="big">Submit</robo-button>
                                    <robo-notification type="error" title="Some error occured during submitting">For troubleshooting use <robo-link href="https://github.com/airalab/dapp.robonomics.network/issues">GitHub issues</robo-link>. Do not send private messages in any app to avoid scammers.</robo-notification> -->
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
    name: 'PageServiceHomeAssistant',

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
                text: 'Staking',
                active: true,
                href: 'page-staking',
                },
            ],
            seed1: '',
            subscriptionOwnerAddress: '',
            password: '',
            password2: '',
            errorPasswordCreate: false,
            // bondingCols: [
            //     {
            //         key: 'account',
            //         label: 'Account'
            //     },
            //     {
            //         key: 'bonded',
            //         label: 'Bonded'
            //     },
            //     {
            //         key: 'rewards',
            //         label: 'Rewards'
            //     }
            // ],
            // bondingRows: [
            //     { account: '', bonded: '', rewards: '' },
            //     { account: '', bonded: '', rewards: '' },
            // ],
            // bondAccounts: [
            //     '4CD6k39D3WZphu5aEwGDwZ3bFFZKvHK21Kof1DgdsL9a5agS',
            //     '4GfqRUpa6i54YTTiSAYShFyQfRVPSYhTZ4RMK5naw31rGisd'
            // ],
            showPasswordPressed: [false, false],
            showPasswordPressedAll: false,
            selectAction: 'Unbond',
            rewardsQty: '0.0008'
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