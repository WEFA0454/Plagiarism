import { createRouter, createWebHistory } from 'vue-router';
import Submit from '../views/SubmitCode/Submit.vue'

const routes = [
  {
    path: '/submit',
    name: 'Submit',
    component: Submit
  },
  // 其他路由配置...
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;