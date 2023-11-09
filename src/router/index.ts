import{createWebHashHistory}from 'vue-router'
import app from '../App.vue'
import { createRouter } from "vue-router"

const routes = [
    {path:'/',component:app},
]
const router =  createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router