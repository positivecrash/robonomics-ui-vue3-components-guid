<template>
    <robo-layout screen footer>
        <layout-header :items="items"/>

        <robo-layout-section>
            <robo-grid columns-template="left-center-right">
                <layout-sidebar-left />

                <robo-grid-item align="center" valign="center">
                    <robo-loader style="width: 4rem" />
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
        }
    }
})
</script>