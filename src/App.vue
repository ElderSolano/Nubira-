<template>
  <div id="app" style="color:white">
    <!-- Contenedor para Sidebar, solo para rutas diferentes a Login e Inicio -->
    <div v-if="!isLoginRoute && !isInicioRoute" id="sidebar-container">
      <Sidebar />
    </div>
    
    <!-- Contenedor para Navbar, solo para rutas diferentes a Login e Inicio -->
    <div v-if="!isLoginRoute && !isInicioRoute" id="navbar-container">
      <Navbar />
    </div>

    <!-- Main layout -->
    <main
      :class="{
        'main-content': !isInicioRoute && !isLoginRoute,
        'fullscreen-content': isInicioRoute || isLoginRoute,
      }"
    >
      <!-- NavbarComponent solo para Inicio y Login -->
      <navbar-component
        v-if="isInicioRoute || isLoginRoute"
        :minNav="navbarMinimize"
      />

      <!-- Landing Page solo en la ruta raíz (Inicio) -->
      <landing-component v-if="isInicioRoute" />

      <!-- Vista principal de cada ruta, solo si no es la página de inicio -->
      <router-view v-if="!isInicioRoute" />
    </main>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";  // Sidebar para otras rutas
import Navbar from "@/examples/Navbars/Navbar.vue";  // Navbar para otras rutas
import NavbarComponent from "@/components/Navbar.vue"; // Navbar solo para Login/Inicio
import LandingComponent from "@/components/LandingPage.vue"; // Página de Inicio
import { mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
    Sidebar,
    Navbar,
    NavbarComponent,
    LandingComponent,
  },
  data() {
    return {
      // Variables para manejar las rutas
      isInicioRoute: this.$route.path === '/',
      isLoginRoute: this.$route.name === 'Login',
    };
  },
  methods: {
    ...mapMutations(["navbarMinimize"]),
  },
  watch: {
    // Detecta cambios en la ruta y actualiza las variables
    '$route'(to) {
      this.isInicioRoute = to.path === '/';
      this.isLoginRoute = to.name === 'Login';
    },
  },
};
</script>

<style scoped>

body{
  font-family: 'Nunito' !important;
}

#app {
  font-family: 'Nunito'!important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

/* Estilos para el Sidebar */
#sidebar-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px; /* Ancho del sidebar */
  height: 100vh;
  z-index: 999;
  background-color: #2c3e50; /* Color del sidebar */
}

/* Estilos para el Navbar */
#navbar-container {
  position: fixed;
  top: 0;
  left: 250px; /* El navbar debe empezar justo después del sidebar */
  right: 0;
  z-index: 998;
  height: 50px; /* Ajusta esta altura según la de tu navbar */
  background-color: #34495e; /* Color del navbar */
}

/* Estilos generales para rutas con Sidebar y Navbar */
.main-content {
  margin-left:250px; /* Ajuste para que el contenido no se solape con el sidebar */
  margin-top: 90px; /* Ajuste para que el contenido no se solape con el navbar */
  padding: 20px; /* Espaciado adicional para el contenido */
}

/* Estilos para Login y Landing Page (pantalla completa) */
.fullscreen-content {
  margin: 0; /* Sin márgenes para Sidebar o Navbar */
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>