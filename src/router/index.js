import { createRouter, createWebHistory } from 'vue-router'
import LandingComponent from '@/components/LandingPage.vue'
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
import Inventario from '@/components/Inventario.vue';
import Ventas from '@/components/Ventas.vue';
import Factura from '@/components/Factura.vue';
import Estadisticas from '@/components/estadisiticas/Estadisticas.vue';

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
    path: "/dashboard/inventario",
    component : Inventario,
    name : "Inventario",
  },
  {
    path: "/dashboard/ventas",
    component : Ventas,
    name : "Ventas",
  },
  {
    path: "/dashboard/ventas/factura",
    component : Factura,
    name : "Factura",
  },
  {
    path: "/dashboard/estadisticas",
    component : Estadisticas,
    name : "Estadisticas",
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
