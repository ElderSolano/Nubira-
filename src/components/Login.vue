<template>
  <div class="container-fluid bg-light"> <!-- Fondo gris claro -->
    <div class="row justify-content-center align-items-center" style="min-height: 90vh;">
      <div class="col-lg-4 col-md-8 col-12 d-flex justify-content-center">
        <div class="card z-index-0 fadeIn3 fadeInBottom form-container">
          <div class="card-body">
            <h5 class="font-weight-bolder text-start mt-2 mb-0">Bienvenido(a) !</h5>
            <br />
            <h4 class="font-weight-bolder text-start mt-2 mb-4">Inicia Sesión</h4>
            <br />
            <form role="form" @submit.prevent="handleLogin">
              <div class="input-group input-group-outline my-1">
                <label class="form-label">Correo Electronico</label>
              </div>
              <div class="input-group input-group-outline mb-4">
                <input
                  type="text"
                  class="form-control"
                  v-model="email"
                  placeholder="Ingresa tu correo"
                  required
                />
              </div>
              <div class="input-group input-group-outline mb-3">
                <label class="form-label">Contraseña</label>
                <div class="input-group">
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    class="form-control"
                    v-model="password"
                    placeholder="Ingresa tu contraseña"
                    required
                  />
                  <span class="input-group-text" @click="togglePasswordVisibility" style="cursor: pointer;">
                    <i :class="showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'"></i>
                  </span>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-black w-100 my-4 mb-2">Iniciar Sesión</button>
              </div>
              <br />
            </form>
          </div>
        </div>
      </div>
      <div class="col-lg-1 col-md-4 d-none d-md-block"> <!-- Columna para la imagen -->
        <img src="../assets/images/entrega 1.png" class="img-fluid" alt="Imagen decorativa" style="margin-left: 60%; margin-top: 125%;" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginComponent',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    togglePasswordVisibility() {
      // Cambiar el estado de showPassword al hacer clic
      this.showPassword = !this.showPassword;
    },
    async handleLogin() {
      console.log("Cayó dentro del login")
      console.log(process.env.VUE_APP_PUERTO)
      try {
        
        const response = await fetch(`http://localhost:8001/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.email,
            password: this.password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          console.log('Login exitoso:', data);
          localStorage.setItem('authToken', data.access_token); // Guarda el token en localStorage
          localStorage.setItem('user', JSON.stringify(data.user)); // Guarda el usuario en localStorage
          this.$router.push({ name: 'Dashboard' }); // Redirige al componente de bienvenida
        } else {
          console.error('Error en el login:', data.message);
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    },
  },
};
</script>

<style scoped>
.container-fluid {
  background-color: rgb(232, 232, 232); /* Fondo gris claro */
  height: 90vh; /* Ocupa toda la altura de la vista */
}

.card {
  border-radius: 1rem; /* Bordes redondeados para la tarjeta */
}

.form-container {
  background-color: white; /* Fondo blanco para el formulario */
  padding: 2rem; /* Espaciado interno */
  border-radius: 1rem; /* Bordes redondeados */
}

.btn-black {
  background-color: black; /* Fondo negro */
  color: white; /* Texto blanco */
  border: none; /* Sin borde */
}

.btn-black:hover {
  background-color: rgba(0, 0, 0, 0.8); /* Color al pasar el cursor */
}

.input-group {
  position: relative;
}

.input-group-text {
  background-color: white; /* Fondo blanco para el icono */
  border: 1px solid #ced4da; /* Bordes del input */
}

.img-fluid {
  max-width: 400%; /* Se adapta al ancho */
  height: auto; /* Mantiene la proporción */
}
</style>
