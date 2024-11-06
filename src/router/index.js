import { createRouter, createWebHistory } from 'vue-router'
import LandingComponent from '@/components/LandingPage.vue'
import LoginComponent from '@/components/Login.vue'
import WelcomeComponent from '@/components/PruebaLogin.vue';

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
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: WelcomeComponent,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
