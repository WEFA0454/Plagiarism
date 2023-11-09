import{createWebHashHistory}from 'vue-router'
import Login from '../views/Login.Vue'
import { createRouter } from "vue-router"

const routes = [
    {path:'/',component:Login},
]
const router =  createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router