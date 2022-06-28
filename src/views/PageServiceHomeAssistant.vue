<template>
    <robo-layout screen footer>
        <layout-header :items="items" />

        <robo-layout-section>
            <robo-grid columns-template="left-center-right">
                <layout-sidebar-left />

                <robo-grid-item>
                    <robo-card allowExpand>
                        <robo-card-label>
                            <robo-card-label-section>Home Assistant account</robo-card-label-section>
                            <robo-card-label-section info>
                                Get <robo-link href="https://www.home-assistant.io">Home Assistant</robo-link> account for Robonomics Parachain usage
                            </robo-card-label-section>
                        </robo-card-label>

                        <robo-card-section>

                            <robo-list gap="x2" fullLine>
                                <robo-list-item>
                                    <robo-card-title size="3">Choose an account:</robo-card-title>
                                    <robo-account-polkadot extensionAllowShift inline short />
                                </robo-list-item>

                                <robo-list-item>
                                    <robo-card-title size="3">Get Home Assistant password:</robo-card-title>
                                    <robo-text weight="bold">crypted password:</robo-text>
                                   <robo-text break gap size="small">0x7e83fae1d7b29a6c531a527880dfc0a7e0b8432ef7b5cdd4cf9420b84475326a6be0ad3a86bf8353c22420ea678632214150</robo-text>
                                    <robo-text weight="light">Enter your seed phrase to decrypt the password:</robo-text>
                                    <robo-textarea placeholder="Place your test seed here" offset="x1" v-model="seed" />
                                    <robo-button outlined>Decrypt password</robo-button>
                                </robo-list-item>

                                <robo-list-item>
                                    <robo-card-title size="3">Sign in your Home assistant account using autorization link:</robo-card-title>

                                    <robo-text weight="bold">login:</robo-text>
                                    <robo-text gap size="small"><robo-account-polkadot copy /></robo-text>

                                    <robo-text weight="bold">password:</robo-text>
                                    <robo-text break copy gap size="small">0x7e83fae1d7b29a6c531a527880dfc0a7e0b8432ef7b5cdd4cf9420b84475326a6be0ad3a86bf8353c22420ea678632214150</robo-text>

                                    <robo-text gap><robo-link href="#">Sign in Home Assistant</robo-link></robo-text>
                                </robo-list-item>
                            </robo-list>

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
    name: 'PageServiceHomeAssistant',

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
                text: 'Home Assistant account',
                active: true,
                href: 'home-assistant-account',
                },
            ],
            seed: ''
        }
    },
})
</script>