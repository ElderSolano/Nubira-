<template>
  <div>
    <!-- Hero Section -->
    <div class="page-header min-vh-75 relative d-flex section">
      <div class="container left-align mt-3 d-flex" style="position: relative; z-index: 1;">
        <div class="col-lg-7 text-start position-relative">
          <h1 class="text-white font-weight-black pt-3 mt-n1 large-title">¡Bienvenido a <br> NUBIRA!</h1>
          <p class="lead text-white mb-2 large-text">
            El Software que impulsa tu mercadito al siguiente nivel
            <img src="@/assets/images/Presentación_Manual_de_Identidad_Visual_Verde_Orgánico-removebg-preview 1.png" alt="">
          </p>
          <div class="col-12 mt-4 d-flex">
            <button type="button" class="btn btn-light me-5" style="z-index: 10; color: rgb(90, 36, 234);">Empezar</button>
            <button type="button" class="btn btn-light custom-button" @click="goToLogin" style="z-index: 10; color: rgb(90, 36, 234);">Iniciar Sesión</button>
          </div>
          <img src="@/assets/images/Nubira PNG 2 (1).png" alt="Nubira" class="background-image" />
        </div>
        <div class="col-lg-5 text-end">
          <img src="@/assets/images/fondo 1.png" alt="Fondo" class="float-end" style="max-width: 115%;">
        </div>
      </div>
    </div>

    <!-- Sobre Nosotros -->
<section id="sobre-nosotros" class="section">
  <div class="container text-center">
    <h2>Sobre Nosotros</h2>
    <div class="row align-items-center">
      <div class="col-md-6 wow fadeInLeft" data-wow-duration="1.5s">
        <img src="@/assets/images/logo_sin_nombre.png" alt="Gestión empresarial" class="img-fluid rounded shadow-lg">
      </div>
      <div class="col-md-6 text-start wow fadeInRight" data-wow-duration="1.5s">
        <p>
          <strong>NubiraƎ</strong> transforma la gestión empresarial con módulos clave diseñados para potenciar negocios.
          Ofrecemos un sistema de inventario en tiempo real, un punto de venta ágil y eficiente, y herramientas intuitivas
          para gestionar empleados, clientes y proveedores. Además, contamos con funcionalidades avanzadas como el registro y
          seguimiento de movimientos de inventario.
        </p>
        <p>
          Con estas herramientas, NubiraƎ permite a los dueños optimizar operaciones, tomar decisiones informadas y garantizar un
          crecimiento sostenido en su negocio.
        </p>
      </div>
    </div>
  </div>
</section>

  

    <!-- Planes -->
<section id="planes" class="section">
  <div class="container text-center"> <br>
    <h2>Planes</h2>
    <div class="row">
      <div class="col-md-4">
        <div class="card plan-card">
          <div class="card-body">
            <h5 class="card-title">Plan Básico</h5>
            <p class="card-text">L 600/mes</p>
            <ul>
              <li>Gestión de inventarios</li>
              <li>Registro de ventas</li>
              <li>Reportes básicos</li><br>
            </ul>
            <button class="btn btn-light w-100 custom-btn">Seleccionar</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card plan-card">
          <div class="card-body">
            <h5 class="card-title">Plan Intermedio</h5>
            <p class="card-text">L 900/mes</p>
            <ul>
              <li>Todo en el Plan Básico</li>
              <li>Control de empleados</li>
              <li>Gestión de proveedores</li>
              <li>Reportes personalizados</li>
            </ul>
            <button class="btn btn-light w-100 custom-btn">Seleccionar</button>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card plan-card">
          <div class="card-body">
            <h5 class="card-title">Plan Avanzado</h5>
            <p class="card-text">L 1,500/mes</p>
            <ul>
              <li>Todo en el Plan Intermedio</li>
              <li>Soporte técnico prioritario</li>
              <li>Análisis predictivo de inventarios</li><br>
            </ul>
            <button class="btn btn-light w-100 custom-btn">Seleccionar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


     <!-- Contacto -->
<section id="contacto" class="section">
  <div class="container text-white">
    <h2 class="text-center text-white">Contacto</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <form @submit.prevent="handleContactSubmit">
          <div class="mb-3">
            <label for="name" class="form-label text-white">Nombre</label>
            <input type="text" id="name" class="form-control custom-input" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label text-white">Correo Electrónico</label>
            <input type="email" id="email" class="form-control custom-input" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label text-white">Mensaje</label>
            <textarea id="message" class="form-control custom-input" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn btn-light w-100 custom-button" style="color: rgb(90, 36, 234);">
            Enviar
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- Footer -->
<footer id="footer" class="bg-dark text-white text-center py-4">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <h5>Sobre NubiraƎ</h5>
        <p>
          Optimiza la gestión de tu negocio con nuestra plataforma innovadora.
        </p>
      </div>
      <div class="col-md-4">
        <h5>Enlaces rápidos</h5>
        <ul class="list-unstyled">
          <li><a href="#sobre-nosotros">Sobre Nosotros</a></li>
          <li><a href="#planes" >Planes</a></li>
          <li><a href="#contacto" >Contacto</a></li>
        </ul>
      </div>
      <div class="col-md-4">
        <h5>Síguenos</h5>
        <div class="social-icons">
          <a href="#" class="text-white mx-2">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-white mx-2">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-white mx-2">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="mt-3">
      <p>&copy; 2024 NubiraƎ. Todos los derechos reservados.</p>
    </div>
  </div>
</footer>

  </div>
</template>


<script>
export default {
  name: "LandingPage",
  methods: {
    goToLogin() {
      this.$router.push('/login');
    },
    handleContactSubmit() {
      alert("¡Formulario enviado!");
    },
  },
};
</script>

<style scoped>
/* Estilos generales */
.position-relative {
  position: relative;
}

.background-image {
  position: absolute;
  top: -90px; 
  left: -250px; 
  z-index: 0; 
  width: 150%; 
  max-width: none; 
}

.page-header {
  background-color: rgb(90, 36, 234); 
  color: white;
  padding: 20px 0;
}
body {
  background-color: rgb(240, 240, 240); 
  margin: 0;
  font-family: Arial, sans-serif;
}

#sobre-nosotros {
  background-color: rgb(245, 245, 255);
  position: relative;
  padding: 80px 20px;
  overflow: hidden;
}

#sobre-nosotros h2 {
  font-size: 3rem;
  color: rgb(90, 36, 234);
  margin-bottom: 30px;
  font-weight: bold;
  text-transform: uppercase;
  animation: fadeIn 1s ease-in-out;
}

.sombra-gradiente {
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(200, 200, 255, 0.5));
  padding: 30px;
  border-radius: 15px;
}

.img-fluid {
  transition: transform 0.2s ease-in-out;
}

.img-fluid:hover {
  transform: scale(0.9);
}


#planes {
  background-color: rgb(245, 245, 255); 
}

#contacto {
  background-color: rgb(90, 36, 234); 
  
}
.custom-input {
  background-color: rgba(255, 255, 255, 0.2); 
  border: 1px solid white; 
  color: white; 
  border-radius: 8px; 
  padding: 10px; 
}

.custom-input::placeholder {
  color: rgba(255, 255, 255, 0.7); 
}

.custom-input:focus {
  border-color: rgb(245, 245, 255);
  outline: none;
  background-color: rgba(255, 255, 255, 0.3); 
}

.custom-button {
  font-weight: bold;
  border-radius: 8px; 
}

.section {
  padding: 60px 20px;
}

.section h2 {
  color: rgb(90, 36, 234);
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.bg-light {
  background-color: #f8f9fa;
}

/* Cards de planes */
.plan-card {
  border-radius: 15px; 
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1), -5px -5px 10px rgba(255, 255, 255, 0.7); 
  transition: transform 0.3s, box-shadow 0.3s;
  padding: 20px;
}
.plan-card:hover {
  transform: translateY(-10px); 
  box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.2), -8px -8px 16px rgba(255, 255, 255, 0.8); 
}

.plan-card .card-title {
  font-size: 1.8rem;
  color: rgb(90, 36, 234);
  font-weight: bold;
}

.plan-card .card-text {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.plan-card ul {
  text-align: left;
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.plan-card ul li {
  margin-bottom: 10px;
  font-size: 1rem;
  color: rgb(60, 60, 60);
}
.custom-btn {
  font-weight: bold;
  background-color: rgb(90, 36, 234); 
  color: white;
  border: none;
  border-radius: 8px; 
  padding: 10px;
  transition: background-color 0.3s, transform 0.3s; 
}
.custom-btn:hover {
  background-color: rgb(70, 20, 200); 
  transform: scale(1.05); 
}

.plan-card .btn {
  margin-top: 20px;
}

/* Estilos del footer */
footer#footer {
  background-color: white !important;
  color: rgb(70, 20, 200);
}

footer#footer h5 {
  font-size: 1.25rem;
  margin-bottom: 15px;
  font-weight: bold;
  color: rgb(70, 20, 200);
}

footer#footer p {
  font-size: 1rem;
}

footer#footer .social-icons a {
  font-size: 1.5rem;
  color: rgb(70, 20, 200);
  text-decoration: none;
}

footer#footer .social-icons a:hover {
  color: rgb(70, 20, 200);
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

footer#footer ul {
  padding-left: 0;
}

footer#footer ul li {
  list-style: none;
}

footer#footer ul li a {
  color: rgb(70, 20, 200);
  text-decoration: none;
}

footer#footer ul li a:hover {
  color: rgb(70, 20, 200);
  text-decoration: underline;
}
</style>
