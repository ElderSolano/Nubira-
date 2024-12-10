<template>
    <div class="container-fluid espaciado col-10">
      <h2 class="text-center">Gestión de Permisos y Roles</h2>
  
      <div class="d-flex justify-content-end mb-4">
        <button @click="mostrarModalAsignarRol" class="btn btn-primary mb-3">
          Asignar Rol
        </button>
      </div>
  
      <!-- Tabla de usuarios -->
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.name }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.role }}</td>
            <td>
              <span v-if="usuario.roles.length > 0">{{ usuario.roles[0].name }}</span>
              <span v-else></span>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Modal para asignar un rol -->
      <div v-if="mostrarModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Asignar Rol a Usuario</h5>
              <button type="button" class="close" @click="cerrarModal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="asignarRol">
                <div class="form-group">
                  <label for="usuario">Seleccionar Usuario</label>
                  <select
                    class="form-control"
                    id="usuario"
                    v-model="usuarioSeleccionado"
                    required
                  >
                    <option v-for="usuario in usuarios" :key="usuario.id" :value="usuario.id">
                      {{ usuario.name }} - {{ usuario.email }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="rol">Seleccionar Rol</label>
                  <select
                    class="form-control"
                    id="rol"
                    v-model="rolSeleccionado"
                    required
                  >
                    <option v-for="rol in roles" :key="rol" :value="rol">
                      {{ rol }}
                    </option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Asignar Rol</button>
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
    name: "PermisosRoles",
    data() {
      return {
        usuarios: [], // Lista de usuarios
        roles: ["Admin", "Cajero"], // Lista de roles disponibles
        usuarioSeleccionado: null, // ID del usuario seleccionado
        rolSeleccionado: null, // Nombre del rol seleccionado
        mostrarModal: false, // Controla la visibilidad del modal
        apiUsuarios: "http://127.0.0.1:8000/api/register", // Endpoint para obtener usuarios
        apiAsignarRol: "http://127.0.0.1:8000/api/usuarios", // Endpoint para asignar roles
      };
    },
    mounted() {
      this.obtenerUsuarios(); // Llama la función para obtener usuarios al montar el componente
    },
    methods: {
      // Obtener usuarios desde la API
      async obtenerUsuarios() {
        try {
          const response = await axios.get(this.apiUsuarios, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Enviar token si es necesario
            },
          });
          this.usuarios = response.data.map((usuario) => {
            // Asegura que cada usuario tenga un array de roles
            usuario.roles = usuario.roles || [];
            return usuario;
          });
        } catch (error) {
          console.error("Error al obtener usuarios:", error);
        }
      },
  
      // Mostrar el modal para asignar roles
      mostrarModalAsignarRol() {
        this.usuarioSeleccionado = null;
        this.rolSeleccionado = null;
        this.mostrarModal = true;
      },
  
      // Cerrar el modal
      cerrarModal() {
        this.mostrarModal = false;
      },
  
      // Asignar rol a un usuario
      async asignarRol() {
        if (!this.usuarioSeleccionado || !this.rolSeleccionado) {
          alert("Por favor, selecciona un usuario y un rol.");
          return;
        }
  
        try {
          const response = await axios.post(
            `${this.apiAsignarRol}/${this.usuarioSeleccionado}/asignar-rol`,
            { role: this.rolSeleccionado },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("authToken")}`,
              },
            }
          );
          alert(response.data.message || "Rol asignado correctamente.");
          this.obtenerUsuarios(); // Actualiza la lista de usuarios
          this.cerrarModal(); // Cierra el modal
        } catch (error) {
          console.error("Error al asignar el rol:", error);
          alert("Hubo un error al asignar el rol.");
        }
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
  </style>
  