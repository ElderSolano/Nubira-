import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "@/components/Login.vue";
import WelcomeComponent from "@/components/PruebaLogin.vue";

import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

import Mantenimiento from "@/components/Mantenimiento.vue";
import Empleados from "@/components/Empleados.vue";
import EmpleadoIndividual from "@/components/EmpleadoIndividual.vue";
import Categorias from "@/components/Categorias.vue";
import Productos from "@/components/Productos.vue";
import Proveedores from "@/components/Proveedores.vue";

import Inventario from "@/components/Inventario.vue";
import Ventas from "@/components/Ventas.vue";
import Factura from "@/components/Factura.vue";
import Estadisticas from "@/components/estadisiticas/Estadisticas.vue";
import LandingPage from "@/components/LandingPage.vue";
import FichasInventario from "@/components/FichasInventario.vue";
import FichasProductos from "@/components/FichasProductos.vue";
import InventarioDisponible from "@/components/InventarioDisponible.vue";
import Perfil from "@/components/Perfil.vue"
import Empresa from "@/components/Empresa.vue"
import CrearFichaInventario from "@/components/CrearFichaInventario.vue";
import CrearFichaProducto from "@/components/CrearFichaProducto.vue";
import Usuarios from "@/components/Usuarios.vue";

const routes = [
  {
    path: "/ventas",
    name: "ventas",
    component: Ventas,
  },
  {
    path: "/",
    name: "Landing",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginComponent,
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: WelcomeComponent,
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
    path: "/mantenimiento",
    component: Mantenimiento,
    name: "Mantenimiento",
  },
  {
    path: "/mantenimiento/empleados",
    component: Empleados,
    name: "Empleados",
  },
  {
    path: "/mantenimiento/empleado-individual",
    component: EmpleadoIndividual,
    name: "EmpleadoIndividual",
  },
  {
    path: "/categorias",
    name: "Categorias",
    component: Categorias,
  },
  {
    path: "/productos",
    name: "Productos",
    component: Productos,
  },
  {
    path: "/proveedores",
    name: "Proveedores",
    component: Proveedores,
  },
  {
    path: "/inventario",
    component: Inventario,
    name: "Inventario",
  },
  {
    path: "/dashboard/ventas",
    component: Ventas,
    name: "Ventas",
  },
  {
    path: "/factura",
    component: Factura,
    name: "Factura",
    props: true,
  },
  {
    path: "/dashboard/estadisticas",
    component: Estadisticas,
    name: "Estadisticas",
  },
  {
    path: "/mantenimiento/inventario/fichasinventario",
    component: FichasInventario,
    name: "FichasInventario",
  },
  {
    path: "/fichasProductos/:id",
    component: FichasProductos,
    name: "FichasProductos",
 //   props: true,
  },
  {
    path: "/mantenimiento/inventario/inventario-disponible",
    component: InventarioDisponible,
    name: "InventarioDisponible"
  },
  {
    path: "/mantenimiento/perfil",
    component: Perfil,
    name: "Perfil"
  },
  {
    path: "/mantenimiento/empresa",
    component: Empresa,
    name: "Empresa"
  },
  {
    path: '/crear-ficha',
    name: 'CrearFichaInventario',
    component: CrearFichaInventario
  },
  {
    path: '/crear-ficha-producto',
    name: 'CrearFichaProducto',
    component: CrearFichaProducto,
    props: route => ({ idProveedor: route.query.idProveedor })
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: Usuarios,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
