<template>
    <div class="page-header min-vh-75 relative d-flex"> 
      <span class="mask bg-gradient-dark opacity-4"></span>
      <div class="container left-align mt-5 d-flex"> 
        <div class="col-lg-7 text-start"> 
          <h1 class="text-white font-weight-black pt-3 mt-n5 large-title">¡Bienvenido a <br> NUBIRA!</h1>
          <p class="lead text-white mb-2 large-text">
            El Software que impulsa tu mercadito al siguiente nivel 
            <img src="@/assets/images/Presentación_Manual_de_Identidad_Visual_Verde_Orgánico-removebg-preview 1.png" alt="">
          </p>
          <div class="col-12 mt-4 d-flex">
            <button type="button" class="btn btn-light me-5">Empezar</button>
            <button type="button" class="btn btn-light">Iniciar Sesión</button>
          </div>
          <img src="@/assets/images/Nubira PNG 2 (1).png" alt="Nubira" class="small-image mt-n4" />
        </div>
        <div class="col-lg-5 text-end">
          <img src="@/assets/images/fondo 1.png" alt="Fondo" class="float-end" style="max-width: 110%;">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingComponent'
  }
  </script>
  
  <style>
  /* Ajustes para alinear el contenedor a la izquierda */
  .left-align {
    margin-left: 0; 
  }
  
  /* Opcional: Ajusta el margen superior para separar del navbar */
  .page-header {
    padding-top: 10px; 
  }
  
  /* Ajustes para la imagen pequeña */
  .small-image {
    max-width: 650px; /* Ajusta el valor según el tamaño deseado */
    height: auto; /* Mantiene la proporción de la imagen */
    margin-top: -300px; /* Ajusta este valor para mover la imagen hacia arriba */
    margin-left: -150px; /* Ajuste adicional si es necesario */
  }
  
  /* Ajustes para aumentar el tamaño de las letras */
  .large-title {
    font-size: 6rem; /* Ajusta el tamaño del h1 como desees */
  }
  
  .large-text {
    font-size: 1.5rem; /* Ajusta el tamaño del párrafo como desees */
  }
  </style>
  