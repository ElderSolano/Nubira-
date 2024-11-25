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
          <p class="profile-name">Mi Perfil</p>
        </div>
        <button @click="logout" class="logout-btn">Cerrar Sesión</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
    methods: {
      logout() {
        console.log("Cerrar sesión");
      },
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
  