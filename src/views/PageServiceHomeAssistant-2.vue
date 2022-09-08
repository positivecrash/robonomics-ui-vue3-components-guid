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
                                <robo-section offset="x1">
                                        <robo-text weight="normal-italic" offset="x1" hyphen>Any parachain account added in Robonomics subscription by Subscription Owner may interact with smart home in Home Assistant local panel. This is the way to add users to Home assistant without third party servers. Only user can access to all smart home data & services by encrypting it with seed phrase.</robo-text>
                                        <robo-text weight="normal-italic" offset="x1" hyphen>Here you may create or restore Home Assistant password for user added in subscription.</robo-text>
                                    </robo-section>
                            </robo-card-section>
                            
                        </robo-card>
                    </robo-section>

                    <robo-section>
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>
                                    Verify your identity
                                </robo-card-label-section>
                                <robo-card-label-section info>
                                    Enter all the credits below to create or restore your password.
                                </robo-card-label-section>
                            </robo-card-label>

                            <robo-card-section>
                                <robo-section offset="x2">
                                    <robo-text weight="bold" size="small" offset="x05">All Parachain accounts should be ED25519 type. Check <robo-link href="https://wiki.robonomics.network/docs/iot-sub-setup/#create-accounts">how to create ED25519 type account</robo-link>.</robo-text>
                                    <robo-text weight="bold" size="small" offset="x05">All accounts used here must be a Controller (control actions related) to avoid risks, do not keep all the funds on it!</robo-text>
                                </robo-section>

                                <robo-section offset="x2">
                                    <robo-section>
                                        <robo-card-title 
                                            size="3" 
                                            offset="x05"
                                            tooltip="Must be added to subscription by subscription owner. You will use it as login in Home Assistant."
                                            tooltipIcon="circle-question"
                                        >
                                           1. Parachain account for HA user
                                        </robo-card-title>

                                        <robo-account-polkadot 
                                            extensionAllowShift
                                            selectable
                                            short 
                                            addressType="ed25519"
                                        />
                                        <robo-input 
                                            label="The seed phrase to encrypt data"
                                            tip="A seed phrase is a series of 12 simple randomized words"
                                            v-model="seed1"
                                            type="password"
                                            :disabled="$store.state.robonomicsUIvue.polkadot.address ? false : true"
                                        />
                                    </robo-section>

                                    <robo-section>
                                        <robo-card-title 
                                            size="3" 
                                            offset="x05"
                                            tooltip="Ask your administrator of local smart device system"
                                            tooltipIcon="circle-question"
                                        >
                                           2. Administrator Credits
                                        </robo-card-title>

                                        <robo-section offset="x05">
                                            <robo-account-polkadot 
                                                :addressLocal="subscriptionOwnerAddress"
                                                addressLocalAllowEdit
                                                inputLabel="Subscription owner"
                                                inputTip="ED25519 type Parachain account address"
                                                v-model="subscriptionOwnerAddress"
                                            />
                                        </robo-section>

                                        <robo-section offset="x05">
                                            <robo-account-polkadot 
                                                :addressLocal="subscriptionOwnerAddress"
                                                addressLocalAllowEdit
                                                inputLabel="Subscription controller"
                                                inputTip="ED25519 type Parachain account address"
                                                v-model="subscriptionOwnerAddress"
                                            />
                                        </robo-section>
                                    </robo-section>

                                    <robo-section>
                                        <robo-card-title 
                                            size="3" 
                                            offset="x05"
                                            tooltip="If you have troubles in verification process, please, ask Robonomics community in Discord or create an issue on Github"
                                            tooltipIcon="circle-question"
                                        >
                                           3. Verification status
                                        </robo-card-title>

                                        <robo-notification 
                                            title="Not verified yet"
                                            type="warning" 
                                        />

                                    </robo-section>
                                </robo-section>

                            </robo-card-section>
                        </robo-card>
                    </robo-section>


                    <robo-section>
                        <!-- <robo-card disabled> -->
                        <robo-card>
                            <robo-card-label>
                                <robo-card-label-section>
                                    Your Home Assistant password
                                </robo-card-label-section>
                                <robo-card-label-section info>
                                    You may create or restore your password by writing or reading datalog. Notice that datalog data can be encrypted only by your parachain account with secure seed phrase.
                                </robo-card-label-section>
                            </robo-card-label>

                            <robo-card-section>
                                <robo-tabs>
                                    <robo-tab label="Create">
                                        <form>
                                            <robo-input 
                                                label="Create password"
                                                v-model="password"
                                                type="password"
                                                required
                                            />
                                            <robo-input 
                                                label="Repeat password"
                                                v-model="password2"
                                                type="password"
                                                required
                                            />

                                            <robo-button @click="checkPassword">
                                                Create password
                                            </robo-button>

                                            <robo-notification 
                                                v-if="errorPasswordCreate" 
                                                title="Passwords are not equal"
                                                type="error" 
                                            />
                                        </form>
                                    </robo-tab>

                                    <robo-tab label="Restore">
                                        <robo-table 
                                            :columns="passwordsFields"
                                            :rows="passwordsItems"
                                            layout="fixed"
                                        >
                                            <template #row(actions)>
                                                <robo-section offset="x0">
                                                    <robo-button 
                                                        @click="showPasswordPressedAll = !showPasswordPressedAll"
                                                        :iconLeft="showPasswordPressedAll ? 'eye-slash' : 'eye'" 
                                                        clean
                                                        size="small"
                                                    >
                                                        <template v-if="!showPasswordPressedAll">show all</template>
                                                        <template v-else>hide all</template>
                                                    </robo-button>
                                                </robo-section>
                                            </template>


                                            <template #cell(actions)="{i}">
                                                <robo-button 
                                                    @click="showPasswordPressed[i] = !showPasswordPressed[i]"
                                                    :iconLeft="showPasswordPressed[i] ? 'eye-slash' : 'eye'" 
                                                    clean
                                                >
                                                    <template v-if="!showPasswordPressed[i]">show</template>
                                                    <template v-else>hide</template>
                                                </robo-button>
                                            </template>

                                            <!-- вот такой пример ещё, какие данные можно получить из слота ячейки -->
                                            <!-- <template #cell(actions)="{row, i}">
                                                {{row}}
                                            </template> -->

                                        </robo-table>
                                    </robo-tab>
                                </robo-tabs>
                                
                            </robo-card-section>
                        </robo-card>
                    </robo-section>


                    <robo-section>
                        <robo-section backColor="rgb(16, 202, 249)" backImage="images/ha-logo.png" backSize="contain" textColor="#ffffff" offset="x0" backPosition="100% 10%">
                            <robo-card-title size="2" offset="x0">Home Assistant local</robo-card-title>
                        </robo-section>

                        <robo-section backColor="rgb(16, 202, 249)" textColor="#ffffff" offset="x1">
                            <robo-section offset="x05">
                                <robo-text weight="bold" inline>URL: </robo-text> 
                                <robo-text weight="normal-italic" inline>http://YOUR_LOCAL_ADDRESS:8123/ [Get exact address from your administrator or read <robo-link href="https://wiki.robonomics.network/docs/home-assistant-begin/">our wiki guide</robo-link>]</robo-text>
                            </robo-section>
                            <robo-section offset="x05">
                                <robo-text weight="bold" inline>Login: </robo-text> 
                                <robo-text weight="normal-italic" inline>your Parachain Address added in subscription</robo-text>
                            </robo-section>
                            <robo-section offset="x05">
                                <robo-text weight="bold" inline>Password: </robo-text> 
                                <robo-text weight="normal-italic" inline>use password created here</robo-text>
                            </robo-section>
                        </robo-section>
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
                text: 'Services',
                href: 'services',
                },
                {
                text: 'Home Assistant Account',
                active: true,
                href: 'home-assistant-account-2',
                },
            ],
            seed1: '',
            subscriptionOwnerAddress: '',
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
            showPasswordPressedAll: false
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