import Nav from "@/components/Nav.vue";
import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/index/Index.vue';

const routes = [
  {
    path: '/',
    component: Nav,
    children: [
      {
        path: '', // This redirect for /
        component: Index
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
