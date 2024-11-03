<template>
  <div id="app">
    <!---<NavbarComponent /> --> 
    <main
      class="main-content position-relative max-height-vh-100 h-100 border-radius-lg"
      :style="this.$store.state.isRTL ? 'overflow-x: hidden' : ''"
    >
      <!-- nav -->
      <navbar
        :class="[navClasses]"
        :textWhite="this.$store.state.isAbsolute ? 'text-white opacity-8' : ''"
        :minNav="navbarMinimize"
        v-if="this.$store.state.showNavbar"
      />
      
      <configurator
        :toggle="toggleConfigurator"
        :class="[
          this.$store.state.showConfig ? 'show' : '',
          this.$store.state.hideConfigButton ? 'd-none' : '',
        ]"
      />
    </main>
    
    <router-view /> 
    <sidenav
    :custom_class="this.$store.state.mcolor"
    :class="[
      this.$store.state.isTransparent,
      this.$store.state.isRTL ? 'fixed-end' : 'fixed-start',
    ]"
    v-if="this.$store.state.showSidenav"
    />

  </div>
  <app-footer v-show="this.$store.state.showFooter" />
</template>

<script>
//import NavbarComponent from './components/Navbar.vue';

import Sidenav from "./examples/Sidenav";
import Configurator from "@/examples/Configurator.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
import AppFooter from "@/examples/Footer.vue";
import { mapMutations } from "vuex";

export default {
  name: 'App',
  components: {
    //NavbarComponent,
    Sidenav,
    Configurator,
    Navbar,
    AppFooter,
  }, methods: {
    ...mapMutations(["toggleConfigurator", "navbarMinimize"]),
  },
  computed: {
    navClasses() {
      return {
        "position-sticky blur shadow-blur mt-4 left-auto top-1 z-index-sticky": this
          .$store.state.isNavFixed,
        "position-absolute px-4 mx-0 w-100 z-index-2": this.$store.state
          .isAbsolute,
        "px-0 mx-4 mt-4": !this.$store.state.isAbsolute,
      };
    },
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-transparent";
  },
}
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

.main-content {
  flex: 1; /* Toma el espacio restante */
  overflow-y: auto;
  padding-left: 250px; /* Espacio para el Sidenav */
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
</style>
