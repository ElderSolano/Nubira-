<template>
  <div id="app">
    <!-- Navbar (Solo para Inicio y Login) -->
    <main class="main-content position-relative max-height-vh-100 h-100">
      <!-- Muestra NavbarComponent solo en la ruta raíz (Inicio) y Login -->
      <navbar-component
        v-if="isInicioRoute || isLoginRoute"
        :minNav="navbarMinimize"
      />

      <!-- Muestra el Navbar global (default) para otras vistas -->
      <navbar
        v-if="!isInicioRoute && !isLoginRoute"
        :minNav="navbarMinimize"
      />
    </main>

    <!-- Landing Page solo en la ruta raíz (Inicio) -->
    <landing-component v-if="isInicioRoute" />

    <router-view />

    <!-- Sidebar, solo en Dashboard y Mantenimiento -->
    <sidenav
      v-if="isDashboardRoute || isMantenimientoRoute"
      :custom_class="this.$store.state.mcolor"
    />
  </div>
</template>


<script>
import Sidenav from "./examples/Sidenav";
import Navbar from "@/examples/Navbars/Navbar.vue";
import NavbarComponent from "@/components/Navbar.vue"; // Importamos el navbar específico
import LandingComponent from "@/components/LandingPage.vue"; // Importamos el componente de la landing page
import { mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
    Sidenav,
    Navbar,
    NavbarComponent,  // Registrar el Navbar específico
    LandingComponent,  // Registrar el componente de la landing page
  },
  data() {
    return {
      // Checamos si la ruta actual es la raíz (inicio), Login, Dashboard o Mantenimiento
      isInicioRoute: this.$route.path === '/',  // Ruta raíz
      isLoginRoute: this.$route.name === 'Login',
      isDashboardRoute: this.$route.name === 'Dashboard',
      isMantenimientoRoute: this.$route.name === 'Mantenimiento',
    };
  },
  methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  },
  watch: {
    '$route'(to) {
      // Verifica la ruta cuando se cambie y actualiza las condiciones
      this.isInicioRoute = to.path === '/'; // Ruta raíz
      this.isLoginRoute = to.name === 'Login';  // Ajusta el nombre según sea necesario
      this.isDashboardRoute = to.name === 'Dashboard';
      this.isMantenimientoRoute = to.name === 'Mantenimiento';
    },
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>

