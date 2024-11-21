<template>
  <div id="app" style="color:white">
    <!-- Main layout -->
    <main class="main-content position-relative max-height-vh-100 h-100">
      <!-- NavbarComponent solo para Inicio y Login -->
      <navbar-component
        v-if="isInicioRoute || isLoginRoute"
        :minNav="navbarMinimize"
      />

      <!-- Navbar global para otras vistas -->
      <navbar
        v-if="!isInicioRoute && !isLoginRoute"
        :minNav="navbarMinimize"
      />

      <!-- Sidebar solo en Dashboard y Mantenimiento -->
      

      <!-- Landing Page solo en la ruta raíz (Inicio) -->
      <landing-component v-if="isInicioRoute" />

      <!-- Vista principal de cada ruta -->
      <router-view />
    </main>
  </div>
</template>

<script>
//import Sidenav from "./examples/Sidenav";
import Navbar from "@/examples/Navbars/Navbar.vue";
import NavbarComponent from "@/components/Navbar.vue"; // Navbar para Login/Inicio
import LandingComponent from "@/components/LandingPage.vue"; // Página de Inicio
import { mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
    //Sidenav,
    Navbar,
    NavbarComponent,
    LandingComponent,
  },
  data() {
    return {
      // Variables para manejar las rutas
      isInicioRoute: this.$route.path === '/',
      isLoginRoute: this.$route.name === 'Login',
      isDashboardRoute: this.$route.name === 'Dashboard',
      isMantenimientoRoute: this.$route.name === 'Mantenimiento',
    };
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  beforeMount() {
    // Configuración inicial para el estado del navbar
    this.$store.state.isTransparent = "bg-transparent";
  },
  watch: {
    // Detecta cambios en la ruta y actualiza las variables
    '$route'(to) {
      this.isInicioRoute = to.path === '/';
      this.isLoginRoute = to.name === 'Login';
      this.isDashboardRoute = to.name === 'Dashboard';
      this.isMantenimientoRoute = to.name === 'Mantenimiento';
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}


</style>



