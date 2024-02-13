import{createWebHashHistory}from 'vue-router'
import app from '../App.vue'
import { createRouter } from "vue-router"
import SubmitVue from '../views/SubmitCode/Submit.vue'


const routes = [

    {path:'/',component:app},
    {
        path: '/',
        component: SubmitVue
    }
]
const router =  createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router