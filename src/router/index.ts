import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import(/* webpackChunkName: "detail" */ '../components/Detail.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router