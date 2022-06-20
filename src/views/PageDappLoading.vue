<template>
    <robo-layout>
        <robo-grid screen>
            <robo-grid-item valign="center" align="center">
                <robo-logo title animate />
            </robo-grid-item>
        </robo-grid>
    </robo-layout>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'PageDappLoading',

    data() {
        return {
            // code: false
        }
    },
})
</script>