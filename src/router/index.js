import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/404View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login/:logorsign',
      name: 'login',
      component: Login
    },
    {
      path: "/:catchall(.*)*",
      name: 'notfound',
      component: NotFound
    }
  ]
})

export default router
