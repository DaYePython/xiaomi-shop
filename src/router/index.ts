import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// components
import HomeVue from "@/views/Home.vue"
import indexVue from '@/views/index.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeVue,
        children: [
            {
                path: '/index',
                name: 'index',
                component: indexVue,
                alias: ['']
            }
        ]
    }
] as RouteRecordRaw[]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router