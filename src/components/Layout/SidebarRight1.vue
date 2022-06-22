<template>
    <robo-grid-item media-mobile="collapse-right" collapse-icon="user" collapse-text="Account">
        <robo-grid offset="x0">
                <robo-card outlined>
                    <robo-card-label>
                        <robo-card-label-section><robo-icon  icon="user" /></robo-card-label-section>
                        <robo-card-label-section>Your accounts</robo-card-label-section>
                    </robo-card-label>
                    <robo-card-section><robo-section>
                            <robo-text size="tiny">
                                Balance:
                            </robo-text>

                            <robo-balance 
                                :balance = "[
                                {
                                    account: 'polkadot',
                                    quantity: 250.40948493
                                }
                                ]"

                                currency = "xrt"
                            />
                        </robo-section>
                    </robo-card-section>

                    <robo-card-section>
                        <robo-section>
                            <robo-text size="tiny">
                                Polkadot ecosystem:
                            </robo-text>
                            <robo-text size="small" weight="bold" gap>
                                <robo-account-polkadot  
                                    short 
                                    extensionAllowShift
                                    extensionShowIcon
                                    selectable
                                />
                            </robo-text>
                            <template v-if="$store.state.robonomicsUIvue.polkadot.address">
                                <robo-text size="tiny">
                                    Chain format:
                                </robo-text>
                                <robo-text size="small" weight="bold">
                                    <robo-account-polkadot-chain />
                                </robo-text>
                            </template>
                        </robo-section>

                    </robo-card-section>
                </robo-card>


                <robo-card outlined>
                    <robo-card-label>
                        <robo-card-label-section><robo-icon icon="signal" /></robo-card-label-section>
                        <robo-card-label-section>Statuses</robo-card-label-section>
                    </robo-card-label>

                    <robo-card-section>
                        <robo-text size="small" weight="bold">
                            <robo-status 
                                type="success"
                                textRight="IPFS PubSub connected"
                            />
                        </robo-text>
                    </robo-card-section>
                    
                </robo-card>

                <robo-card outlined>
                    <robo-card-label>
                        <robo-card-label-section><robo-icon  icon="comment" /></robo-card-label-section>
                        <robo-card-label-section>Support</robo-card-label-section>
                    </robo-card-label>

                    <robo-card-section>
                        <robo-text size="small" weight="bold">
                            <robo-grid embed gap="x05">
                                <robo-link to="https://github.com/airalab/dapp.robonomics.network/issues">Open issue on GitHub</robo-link>
                                <robo-link to="https://wiki.robonomics.network/">Read Robonomics WIKI</robo-link>
                                <robo-link to="https://discord.com/invite/5UWNGNaAUf">Chat in Discord</robo-link>
                            </robo-grid>
                        </robo-text>
                    </robo-card-section>
                </robo-card>
        </robo-grid>

    </robo-grid-item>
</template>