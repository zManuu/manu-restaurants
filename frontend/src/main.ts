import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './assets/tailwind.css'
import './assets/custom.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import 'floating-vue/dist/style.css'
import FloatingVue from 'floating-vue'
import { fas } from '@fortawesome/free-solid-svg-icons'
import vueTypes from './vue-types'
import { createStore } from 'vuex'

library.add(fas)

export const store = createStore({
    state() {
        return {
            fetching: false
        }
    },
    mutations: {
        setFetching(state: { fetching: boolean }, val: boolean) {
            state.fetching = val
        }
    }
})

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/restaurants',
            component: () => import('@/views/Restaurants.vue')
        }
    ]
})

const app = createApp(App)

app.config.globalProperties.fetch = vueTypes.fetch

app.use(store)
app.use(router)
app.use(FloatingVue)
app.component('fa', FontAwesomeIcon)
app.mount('#app')
