import { createRouter, createWebHistory } from 'vue-router'
import LoginComponent from '@/components/Login.vue'
import WelcomeComponent from '@/components/PruebaLogin.vue';

import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

import Mantenimiento from "@/components/Mantenimiento.vue";
import Empleados from '@/components/Empleados.vue';
import EmpleadoIndividual from '@/components/EmpleadoIndividual.vue';
import Categorias from '@/components/Categorias.vue';
import Productos from '@/components/Productos.vue';


const routes = [
  {
    path: '/',
    name: 'Landing',
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
  },

  {
    path: "/",
    name: "/",
    redirect: "/dashboard",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
  {
    path : "/mantenimiento",
    component: Mantenimiento,
    name : 'Mantenimiento'
  },
  {
    path: "/mantenimiento/empleados",
    component: Empleados,
    name: 'Empleados'
  },
  {
    path: "/mantenimiento/empleado-individual",
    component : EmpleadoIndividual,
    name : "EmpleadoIndividual"
  },
  {
    path: '/categorias',
    name: 'Categorias',
    component: Categorias
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
