<template>
    <div class="app">
        <h1 class="app_h1">
            Notes App
        </h1>
    <router-view>

    </router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faBackspace, faAnchor, faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faAnchor, faEdit, faBackspace, faCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)
import { store } from "./store";
export default {
    created() {
        this.$store.commit('loadNotes');
    },
  router,
  name: 'App',
  store
}
</script>

<style>
    .app_h1 {
        font-size: 30px;
        font-family: Charter;
        text-align: center;
    }
    .app {
        max-width: 800px;
        margin: 0 auto;
    }
</style>
