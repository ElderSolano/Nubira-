<template>
  <div class="page-header min-vh-75 relative d-flex">
    <span class=""></span>
    <div class="container left-align mt-3 d-flex" style="position: relative; z-index: 1;">
      <div class="col-lg-7 text-start">
        <h1 class="text-white font-weight-black pt-3 mt-n1 large-title">¡Bienvenido a <br> NUBIRA!</h1>
        <p class="lead text-white mb-2 large-text">
          El Software que impulsa tu mercadito al siguiente nivel
          <img src="@/assets/images/Presentación_Manual_de_Identidad_Visual_Verde_Orgánico-removebg-preview 1.png" alt="">
        </p>
        <div class="col-12 mt-4 d-flex">
          <button type="button" class="btn btn-light me-5 "  style="z-index: 10; color: rgb(90, 36, 234);">Empezar</button>
          <button type="button" class="btn btn-light custom-button" @click="goToLogin" style="z-index: 10; color: rgb(90, 36, 234);">Iniciar Sesión</button>
        </div>
        <img src="@/assets/images/Nubira PNG 2 (1).png" alt="Nubira" class="small-image mt-n16" />
      </div>
      <div class="col-lg-5 text-end">
        <img src="@/assets/images/fondo 1.png" alt="Fondo" class="float-end" style="max-width: 115%;">
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'LandingComponent',
  methods: {
    goToLogin() {
      this.$router.push('/login'); // Redirige a la ruta de login
    }
  }
}
</script>

<style>
/* Estilos ajustados como los tenías */
.left-align {
  margin-left: 0;
}
.page-header {
  padding-top: 10px;
  background-color: rgb(90, 36, 234); /* Color de fondo de la landing page */
}
.small-image {
  max-width: 657px;
  height: auto;
  margin-top: -300px;
  margin-left: -120px;
}
.large-title {
  font-size: 6rem;
}
.large-text {
  font-size: 1.5rem;
}
.custom-button {
  color: rgb(90, 36, 234); /* Color del texto */
  background-color: white; /* Fondo blanco */
  border-color: rgb(90, 36, 234); /* Opcional: bordes con el mismo color */
}
</style>
