<template>
  <div id="app">
    <!-- Navbar (Solo para Inicio y Login) -->
    <main class="main-content position-relative max-height-vh-100 h-100">
      <!-- Muestra NavbarComponent solo en la ruta raíz (Inicio) y Login -->
      <navbar-component
        v-if="isInicioRoute || isLoginRoute"
      >
    </navbar-component>
    <LandingComponent></LandingComponent>
    </main>
  </div>
</template>


<script>
//import Sidenav from "./examples/Sidenav";
//import Navbar from "@/examples/Navbars/Navbar.vue";
import NavbarComponent from "@/components/Navbar.vue"; // Importamos el navbar específico
import LandingComponent from "@/components/LandingPage.vue"; // Importamos el componente de la landing page
import { mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
    //Sidenav,
    //Navbar,
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

  /**Clases extras añadidas */

}

/* Contenedor principal como columna flexible */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que ocupe toda la altura del viewport */
}

/* El main toma el espacio disponible */
.main-content {
  flex: 1; /* Ocupa todo el espacio restante */
  overflow-y: auto;
}

/* Footer */
app-footer {
  background-color: #f8f9fa; /* Color del footer */
  padding: 1rem;
  text-align: center;
}

</style>


.main-content {
  flex: 1; /* Toma el espacio restante */
  overflow-y: auto;
  padding-left: 250px; /* Espacio para el Sidenav */

  /**Clases extras */
  flex: 1; /* Ocupa todo el espacio restante */
  overflow-y: auto;
}

.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

Sidenav {
  width: 250px; /* Ancho del Sidenav */
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1000;
}

/* Footer */
app-footer {
  background-color: #f8f9fa; /* Color del footer */
  padding: 1rem;
  text-align: center;
}




