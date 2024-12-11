<template>
  <div class="container-fluid espaciado col-10">
    <h2 class="text-center">Gestión de Usuarios</h2>

    <div class="d-flex justify-content-end mb-4">
      <button @click="crearUsuario" class="btn btn-primary mb-3">
        Agregar Usuario
      </button>
    </div>

    <!-- Tabla de usuarios -->
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.id">
          <td>{{ usuario.id }}</td>
          <td>{{ usuario.name }}</td>
          <td>{{ usuario.email }}</td>
          <td>
            <!-- Botón para editar un usuario -->
            <button @click="editarUsuario(usuario)" class="btn btn-warning btn-sm">
              <i class="fas fa-edit"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal para agregar un nuevo usuario -->
    <div v-if="mostrarModal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Crear Nuevo Usuario</h5>
            <button type="button" class="close" @click="cerrarModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="guardarUsuario">
              <div class="form-group">
                <label for="nombre">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  id="nombre"
                  v-model="nuevoUsuario.name"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email">Correo Electrónico</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="nuevoUsuario.email"
                  required
                />
              </div>
              <div class="form-group">
                <label for="password">Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="nuevoUsuario.password"
                  required
                />
              </div>
              <div class="form-group">
                <label for="verificarPassword">Verificar Contraseña</label>
                <input
                  type="password"
                  class="form-control"
                  id="verificarPassword"
                  v-model="verificarPassword"
                  required
                />
              </div>
              <button type="submit" class="btn btn-primary">Guardar Usuario</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Usuarios",
  data() {
    return {
      usuarios: [], // Lista de usuarios
      nuevoUsuario: {
        name: "",
        email: "",
        password: "",
      },
      verificarPassword: "", // Para verificar la contraseña
      mostrarModal: false, // Controla la visibilidad del modal
      apiUrl: `http://127.0.0.1:8000/api/register`, // URL de la API
    };
  },
  mounted() {
    this.obtenerUsuarios(); // Llama la función para obtener los usuarios al montar el componente
  },
  methods: {
    // Obtener los usuarios desde la API
    async obtenerUsuarios() {
      try {
        const response = await axios.get(this.apiUrl);
        this.usuarios = response.data;
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    },

    // Mostrar el modal para crear un nuevo usuario
    crearUsuario() {
      this.nuevoUsuario = {
        name: "",
        email: "",
        password: "",
      };
      this.verificarPassword = "";
      this.mostrarModal = true;
    },

    // Guardar el nuevo usuario
    async guardarUsuario() {
      // Verificar que las contraseñas coincidan
      if (this.nuevoUsuario.password !== this.verificarPassword) {
        alert("Las contraseñas no coinciden.");
        return;
      }

      try {
        // Enviar el nuevo usuario a la API
        await axios.post(this.apiUrl, this.nuevoUsuario);
        alert("Usuario creado exitosamente.");
        this.obtenerUsuarios(); // Actualizar la lista de usuarios
        this.cerrarModal(); // Cerrar el modal
      } catch (error) {
        console.error("Error al guardar el usuario:", error);
        alert("Hubo un error al guardar el usuario.");
      }
    },

    // Cerrar el modal
    cerrarModal() {
      this.mostrarModal = false;
    },
  },
};
</script>

<style scoped>
.modal {
  display: block;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
}

.modal-dialog {
  margin-top: 100px;
}

.modal-content {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
}

button i {
  font-size: 16px;
}
</style>
