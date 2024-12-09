<template>
  <div class="sidebar">
    <div class="sidebar-logo">
      <img src="@/assets/images/Version monocromatica 2.png" alt="Logo" class="logo" />
    </div>

    <nav class="sidebar-nav">
      <ul>
        <li><router-link to="/dashboard" class="nav-link">Inicio</router-link></li>
        <li><router-link to="/mantenimiento" class="nav-link">Mantenimiento</router-link></li>
        <li><router-link to="/ventas" class="nav-link">Ventas</router-link></li>
        <li><router-link to="/inventario" class="nav-link">Inventario</router-link></li>
      </ul>
    </nav>

    <div class="sidebar-footer">
      <div class="profile">
        <img src="@/assets/images/boy.png" alt="Perfil" class="profile-img" />
        <p class="profile-name">{{ user.name }}</p>
      </div>
      <button @click="handleLogout" class="logout-btn">Cerrar Sesión</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      user: {}, // Inicializamos como un objeto vacío
    };
  },
  methods: {
    async handleLogout() {
      try {
        const response = await fetch('http://127.0.0.1:8001/api/logout', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (response.ok) {
          console.log('Cierre de sesión exitoso');
          localStorage.removeItem('authToken');
          this.$router.push({ name: 'Login' });
        } else {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
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
  mounted() {
    // Obtener el usuario desde localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser); // Convertimos la cadena almacenada en un objeto
        this.user = {
          name: parsedUser.name, // Asignamos solo la propiedad "name"
        };
      } catch (error) {
        console.error('Error al parsear el usuario desde localStorage:', error);
      }
    }
  },
};
</script>



  
  <style scoped>
  /* Estilos generales del sidebar */
  .sidebar {
    width: 250px;
    height: 100vh;
    background: rgb(90, 36, 234); 
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    box-shadow: 3px 0 5px rgba(0, 0, 0, 0.3);
    overflow: hidden; 
  }
  
  /* Logo */
  .sidebar-logo {
    text-align: center;
    padding: 0.5rem 0;
    border-bottom: 2px solid white;
  }
  
  .logo {
    width: 80px;
  }
  
  /* Navegación */
  .sidebar-nav ul {
    list-style: none;
    padding: 0;
    
  }
  
  .nav-link {
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    color: white;
    text-decoration: none;
    transition: background 0.3s ease, color 0.3s ease;
    margin: 1.8rem 0;
  }
  
  .nav-link:hover {
    background: rgb(245, 47, 0);
    color: white;
    border-radius: 4px;
  }
  
  /* Footer */
  .sidebar-footer {
    text-align: center;
    padding: 1rem 0;
    border-top: 2px solid white;
  }
  
  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
   
  }
  
  .profile-img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid white;
  }
  
  .profile-name {
    margin-top: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
  }
  
  .logout-btn {
    background: white;
    color: rgb(90, 36, 234);
    border: none;
    padding: 0.3rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease;
    
  }
  
  .logout-btn:hover {
    background: rgb(245, 47, 0);
    color: white;
  }
  </style>
  