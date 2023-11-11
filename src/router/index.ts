import{createWebHashHistory}from 'vue-router'
import app from '../App.vue'
import { createRouter } from "vue-router"


const routes = [

    {path:'/',component:app},
    {
        path: '/Login',
        name: 'Login',
        component: () => import('../views/Login/index.vue')
    }
]
const router =  createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router