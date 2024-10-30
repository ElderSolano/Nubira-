<template>
  <div id="app">
    <NavbarComponent /> 
    <LandingComponent /> 
  </div>
</template>

<script>
import NavbarComponent from './components/Navbar.vue';
import LandingComponent from './components/LandingPage.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent,
    LandingComponent
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(90, 36, 234);
  margin: 0;
}

</style>
