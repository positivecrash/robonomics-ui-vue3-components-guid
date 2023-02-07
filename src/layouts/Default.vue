<template>
    <div id="page">
        <div id="sidebar">
            <div id="sidebar-content">
                <div class="sidebar-title">robonomics-ui-vue</div>

                <section>
                    <b>Examples</b>
                    <router-link to="/">Home</router-link>
                    <router-link to="/telemetry">Telemetry</router-link>
                    <router-link to="/rwsactivate">Rws Activation</router-link>
                    <router-link to="/rwssetup">Rws Setup</router-link>
                    <router-link to="/rwssetupslist">Rws Setups List</router-link>
                    <router-link to="/rwsusersetup">Rws User setup</router-link>
                    <router-link to="/rwsuserslist">Rws Users list</router-link>
                </section>
            </div>
        </div>
        <div id="content">
            <router-view/>
        </div>
    </div>
</template>

<style scoped>
    #page {
       display: grid;
       grid-template-columns: 200px auto;
    }

    #sidebar {
        min-height: 100vh;
        background: rgba(255,255,255, .2);
        font-size: 15px;
        line-height: 1.2;
    }

    section a, section b {
        margin-bottom: 15px;
    }

    section {
        margin-bottom: 30px;
    }

    #sidebar-content {
        position: sticky;
        top: 0;
    }

    .sidebar-title {
        font-weight: bold;
        padding: 10px;
        margin-bottom: 30px;
    }

    section {
        padding: 10px;
    }

    section:not(:last-child) {
        margin-bottom: 30px;
    }

    section > * {
        display: block;
        margin-bottom: 5px;
    }

    .router-link-active {
        color: inherit
    }

    @media screen and (max-width: 450px) {
        #sidebar {
            display: none;
        }

        #page {
            grid-template-columns: auto;
        }
    }
</style>
