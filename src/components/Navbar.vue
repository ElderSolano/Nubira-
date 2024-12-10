<template>
 <header>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand ms-5" href="/">
            <img src="../assets/images/Version monocromatica 2 1.png" alt="Logo" height="70">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active text-white" href="#sobre-nosotros">Sobre Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#contacto">Contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#planes">Planes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" @click.prevent="goToLogin">Iniciar Sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
  name: 'NavbarComponent',
  methods: {
    goToLogin() {
      this.$router.push('/login');
    }
  }
}
</script>

<style>
.navbar {
  background-color: rgb(90, 36, 234); 
}

.navbar-nav .nav-link {
  color: white; 
}

.navbar-nav .nav-link:hover {
  color: rgb(245, 47, 0) !important; 
}

.nav-item {
  margin-left: 80px; 
}

.navbar-nav {
  margin-right: 100px; 
  margin-left: 160px;
}
.navbar-toggler-icon {
  background-color: white; /* Cambia el color del ícono */
  border-radius: 2px; /* Opcional: un toque de estilo */
}
</style>
