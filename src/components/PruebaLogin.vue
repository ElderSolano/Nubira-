<template>
    <div class="welcome-container">
      <h2>¡Ingresaste al sistema!</h2>
      <button @click="handleLogout" class="btn-logout">Cerrar Sesión</button>
    </div>
  </template>
  
  <script>
export default {
  name: 'WelcomeComponent',
  methods: {
    async handleLogout() {
      try {
        const response = await fetch('https://3a35-181-115-60-195.ngrok-free.app/api/logout', {
          method: 'GET', // Cambiado a GET, asegúrate de que sea el método correcto
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Usa el token guardado
          },
        });

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
          console.log('Cierre de sesión exitoso');
          localStorage.removeItem('authToken'); // Elimina el token
          this.$router.push({ name: 'Login' }); // Redirige al login
        } else {
          // Si no es exitosa, verificamos el tipo de contenido antes de parsear JSON
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            console.error('Error al cerrar sesión:', data.message);
          } else {
            console.error('Error al cerrar sesión: Respuesta no es JSON');
          }
        }
      } catch (error) {
        console.error('Error en la solicitud de cierre de sesión:', error);
      }
    },
  },
};
</script>

  <style scoped>
  .welcome-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 90vh; 
    background-color: #f5f5f5; 
  }
  
  h2 {
    color: #333; 
    font-weight: bold;
    margin-bottom: 1.5rem;
  }
  
  .btn-logout {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn-logout:hover {
    background-color: #555;
  }
  </style>
  