import { createRouter, createWebHistory } from 'vue-router'
import LandingComponent from '@/components/LandingPage.vue'
import LoginComponent from '@/components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
