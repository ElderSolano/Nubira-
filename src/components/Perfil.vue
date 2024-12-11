<template>
  <div class="profile-container">
    <div class="profile-card">
      <div class="profile-header">
        <img src="https://th.bing.com/th/id/R.8ff796a5346aace39d46071299c42fd2?rik=fjI%2bUNMeFfREuQ&pid=ImgRaw&r=0" alt="User Avatar" class="profile-avatar" />
        <h2>{{ user.name }}</h2>
        <p class="profile-email">{{ user.email }}</p>
      </div>
      <div class="profile-details">
        <div class="detail">
          <span class="label">Puesto:</span>
          <span class="value">{{ user.position }}</span>
        </div>
        <div class="detail">
          <span class="label">Fecha de Ingreso:</span>
          <span class="value">{{ user.hireDate }}</span>
        </div>
        <div class="detail">
          <span class="label">Fecha de Nacimiento:</span>
          <span class="value">{{ user.birthDate }}</span>
        </div>
        <div class="detail">
          <span class="label">DNI:</span>
          <span class="value">{{ user.dni }}</span>
        </div>
        <div class="detail">
          <span class="label">RTN:</span>
          <span class="value">{{ user.rtn }}</span>
        </div>
        <div class="detail">
          <span class="label">Sexo:</span>
          <span class="value">{{ user.gender }}</span>
        </div>
        <div class="detail">
          <span class="label">Número de Teléfono:</span>
          <span class="value">{{ user.phone }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Perfil",
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    // Obtener el usuario desde localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser); // Convertimos la cadena almacenada en un objeto
        this.user = parsedUser;  // Asignamos el objeto usuario a la propiedad user
      } catch (error) {
        console.error('Error al parsear el usuario desde localStorage:', error);
      }
    } else {
      console.error('Usuario no encontrado en localStorage');
      // Aquí podrías redirigir al login o mostrar un mensaje de error
      this.$router.push({ name: 'Login' });
    }
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
}

.profile-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  padding: 20px;
}

.profile-header {
  text-align: center;
  margin-bottom: 20px;
}

.profile-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid rgb(90, 36, 234);
  margin-bottom: 10px;
}

.profile-header h2 {
  margin: 0;
  font-size: 1.5rem;
  color: rgb(90, 36, 234);
}

.profile-header .profile-email {
  color: #6c757d;
  font-size: 0.9rem;
}

.profile-details {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.detail {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 5px;
}

.detail .label {
  font-weight: bold;
  color: rgb(90, 36, 234);
}

.detail .value {
  color: #495057;
}
</style>
