<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand ms-5" href="#">
          <img src="../assets/images/Version monocromatica 2 1.png" alt="Logo" height="70">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto"> 
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="#">Sobre Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Contacto</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Planes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Iniciar Sesión</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style>
.navbar {
  background-color: rgb(90, 36, 234); /* Color de fondo del navbar */
}

.navbar-nav .nav-link {
  color: white; /* Color normal por defecto */
}

.navbar-nav .nav-link:hover {
  color: rgb(245, 47, 0) !important; /* Color al pasar el cursor */
}

.nav-item {
  margin-left: 80px; /* Separación entre los elementos */
}

.navbar-nav {
  margin-right: 100px; /* Separación desde el borde derecho del navbar */
  margin-left: 160px;
}
</style>
