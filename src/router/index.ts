import { createRouter, createWebHistory } from 'vue-router';
import Submit from '../components/Submit.vue'
import Home from '../components/Home.vue'
import Result from '../components/Result.vue';

const routes = [
  {
    path: '/Submit',
    name: 'Submit',
    component: Submit
  },

  {
    path:'/',
    name:'Home',
    component:Home
  },

  {
    path:'/Result',
    name:'Result',
    component:Result
  }
  // 其他路由配置...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;