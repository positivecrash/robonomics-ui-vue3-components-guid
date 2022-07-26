<template>
    <h1>Changelog</h1>

    <guide-section
      title = "0.0.1-25"
    >
    <ol>
        <li>
            <h4>Extension object <router-link to="account-polkadot">robo-account-polkadot</router-link></h4>
            <ul>
                <li>Removed <code>$store.state.robonomicsUIvue.polkadot.extensionsList</code></li>
                <li>
                    <p>Added current extension's object</p>
                    vuex - <code>$store.state.robonomicsUIvue.polkadot.extensionObj</code><br/>
                    localStorage - <code>robonomicsUIPolkadotExtensionObj</code>
                </li>
            </ul>
        </li>
    </ol>
    </guide-section>

    <guide-section
      title = "0.0.1-24"
    >
    <ol>
        <li>
            <h4>Added extensions object list <router-link to="account-polkadot">robo-account-polkadot</router-link></h4>
            <p>Vuex - <code>$store.state.robonomicsUIvue.polkadot.extensionsList</code></p>
            <p>localStorage - <code>robonomicsUIPolkadotExtensionsList</code></p>
        </li>
    </ol>
    </guide-section>

    <guide-section
      title = "0.0.1-23"
    >
    <ol>
        <li>
            <h4>Renamed property for <router-link to="account-polkadot">robo-account-polkadot</router-link></h4>
            <code>allowShiftExtensions</code> -> <code>extensionAllowShift</code>
        </li>
        <li>
            <h4>New functionality for <router-link to="account-polkadot">robo-account-polkadot</router-link></h4>
            <ul>
                <li>
                    Forced chain for address
                </li>
                <li>
                    Not linked address
                </li>
                <li>
                    Allow edit not linked address
                </li>
                <li>
                    Callbacks: beforeInjected, afterInjected, onAddressChange
                </li>
                <li>
                    Added <code>$store.state.robonomicsUIvue.polkadot.accounts</code> with all injected accounts (from selected extension)
                </li>
            </ul>
        </li>
    </ol>
    </guide-section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'Changelog',
})
</script>

<style scoped>
h4 {
    text-align: left;
}
</style>