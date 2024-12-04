<template>
    <div class="container-fluid espaciado col-10" >
      <h2 class="text-center">Gestión de Usuarios</h2>
  
      <div class="d-flex justify-content-end mb-4">
        <button @click="nuevoUsuario" class="btn btn-primary mb-3">
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
            <th>Puesto</th>
            <th>Permiso</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.id">
            <td>{{ usuario.id }}</td>
            <td>{{ usuario.nombre_empleado }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.puesto }}</td>
            <td>{{ usuario.nivel_permiso }}</td>
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
              <form @submit.prevent="agregarUsuario">
                <div class="form-group">
                  <label for="numero_identidad">Número de Identidad</label>
                  <input type="text" class="form-control" id="numero_identidad" v-model="nuevoUsuario.numero_identidad" required>
                </div>
                <div class="form-group">
                  <label for="nombre_empleado">Nombre del Empleado</label>
                  <input type="text" class="form-control" id="nombre_empleado" v-model="nuevoUsuario.nombre_empleado" required>
                </div>
                <div class="form-group">
                  <label for="nivel_permiso">Nivel de Permiso</label>
                  <select class="form-control" id="nivel_permiso" v-model="nuevoUsuario.nivel_permiso" required>
                    <option value="admin">Admin</option>
                    <option value="usuario">Usuario</option>
                    <option value="supervisor">Supervisor</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="email">Email del Empleado</label>
                  <input type="email" class="form-control" id="email" v-model="nuevoUsuario.email" required>
                </div>
                <button type="submit" class="btn btn-primary">Generar Usuario</button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal de confirmación -->
      <div v-if="mostrarConfirmacion" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Confirmación</h5>
              <button type="button" class="close" @click="cerrarConfirmacion" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>El empleado {{ nuevoUsuario.nombre_empleado }} ha sido creado exitosamente.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="cerrarConfirmacion">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'; // Usado para generar una contraseña aleatoria

export default {
  name: "Usuarios",
  data() {
    return {
      usuarios: [], // Almacena los usuarios
      nuevoUsuario: { // Asegúrate de solo declarar esta propiedad una vez
        numeroIdentidad: '',
        nombre: '',
        email: '',
        contraseña: '',
        nivelPermiso: '',
        puesto: ''
      },
      mostrarModal: false, // Controla la visibilidad del modal
      apiUrl: "http://127.0.0.1:8001/api/usuarios", // URL de la API
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
        this.usuarios = response.data; // Asigna la respuesta a la variable usuarios
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    },

    // Mostrar el modal para crear un nuevo usuario
    crearUsuario() {
      this.nuevoUsuario = { // Resetea los valores del nuevo usuario
        numeroIdentidad: '',
        nombre: '',
        email: '',
        contraseña: '',
        nivelPermiso: '',
        puesto: ''
      };
      this.mostrarModal = true; // Muestra el modal
    },

    // Generar una contraseña aleatoria
    generarContraseña() {
      const contrasenaGenerada = uuidv4().slice(0, 8); // Genera una contraseña de 8 caracteres
      this.nuevoUsuario.contraseña = contrasenaGenerada; // Asigna la contraseña generada al nuevo usuario
    },

    // Guardar el nuevo usuario
    async guardarUsuario() {
      try {
        // Enviar el nuevo usuario a la API
        await axios.post(this.apiUrl, this.nuevoUsuario);
        console.log("Usuario creado exitosamente");
        
        // Enviar el correo con la contraseña generada
        await this.enviarCorreo();

        this.obtenerUsuarios(); // Actualiza la lista de usuarios
        this.cerrarModal(); // Cierra el modal
      } catch (error) {
        console.error("Error al guardar el usuario:", error);
      }
    },

    // Enviar el correo con la contraseña generada
    async enviarCorreo() {
      const data = {
        email: this.nuevoUsuario.email,
        contraseña: this.nuevoUsuario.contraseña
      };
      try {
        // Enviar un correo (esto requiere un endpoint en tu backend para enviar el correo)
        await axios.post("http://127.0.0.1:8001/api/enviar-correo", data);
        console.log("Correo enviado exitosamente");
      } catch (error) {
        console.error("Error al enviar el correo:", error);
      }
    },

    // Cerrar el modal
    cerrarModal() {
      this.mostrarModal = false;
    }
  }
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