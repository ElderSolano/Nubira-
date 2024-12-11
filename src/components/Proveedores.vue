<template>
  <div class="container-fluid espaciado col-10">
    <h2 class="text-center">Proveedores</h2>

    <div class="d-flex justify-content-end mb-4">
      <button @click="nuevoProveedor" class="btn btn-primary mb-3">
        Crear Proveedor
      </button>
    </div>

  <!-- Contenedor para hacer la tabla responsive -->
  <div class="table-responsive">
    <table class="table table-sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Email</th>
          <th>Número de Teléfono</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="proveedor in proveedores" :key="proveedor.id">
          <td>{{ proveedor.id }}</td>
          <td>{{ proveedor.nombre_proveedor }}</td>
          <td>{{ proveedor.direccion }}</td>
          <td>{{ proveedor.email }}</td>
          <td>{{ proveedor.telefono }}</td>
          <td>{{ proveedor.estado }}</td>
          <td>
            <button @click="editarProveedor(proveedor)" class="btn btn-warning btn-sm">
              <i class="fas fa-edit"></i>
            </button>
            <button @click="confirmarEliminacion(proveedor.id)" class="btn btn-danger btn-sm ml-2">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

    <!-- Modal de creación/edición de proveedor -->
    <div v-if="mostrarModal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ proveedorSeleccionado.id ? 'Editar Proveedor' : 'Crear Nuevo Proveedor' }}</h5>
            <button type="button" class="close" @click="cerrarModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="guardarEdicion">
              <div class="form-group">
                <label for="nombre_proveedor">Nombre del Proveedor</label>
                <input type="text" class="form-control" id="nombre_proveedor" v-model="proveedorSeleccionado.nombre_proveedor" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model="proveedorSeleccionado.email" required>
              </div>
              <div class="form-group">
                <label for="telefono">Teléfono</label>
                <input type="text" class="form-control" id="telefono" v-model="proveedorSeleccionado.telefono" required>
              </div>
              <div class="form-group">
                <label for="estado">Estado</label>
                <select class="form-control" id="estado" v-model="proveedorSeleccionado.estado" required>
                  <option value="0">Inactivo</option>
                  <option value="1">Activo</option>
                </select>
              </div>
              <div class="form-group">
                <label for="direccion">Dirección</label>
                <input type="text" class="form-control" id="direccion" v-model="proveedorSeleccionado.direccion" required>
              </div>
              <button type="submit" class="btn btn-primary">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de confirmación para eliminar proveedor -->
    <div v-if="mostrarConfirmacion" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirmar Eliminación</h5>
            <button type="button" class="close" @click="cerrarConfirmacion" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>¿Estás seguro de que deseas eliminar este proveedor?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="cerrarConfirmacion">Cancelar</button>
            <button type="button" class="btn btn-danger" @click="eliminarProveedorConfirmado">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "Proveedores",
data() {
  return {
    proveedores: [], // Almacena los proveedores
    proveedorSeleccionado: null, // Almacena el proveedor seleccionado para edición
    mostrarModal: false, // Controla la visibilidad del modal de edición
    mostrarConfirmacion: false, // Controla la visibilidad del modal de confirmación
    proveedorAEliminar: null, // Almacena el proveedor que se va a eliminar
    apiUrl: "http://127.0.0.1:8000/api/proveedores", // URL de la API
  };
},
mounted() {
  this.obtenerProveedores();
},
methods: {
  async obtenerProveedores() {
    try {
      const response = await axios.get(this.apiUrl);
      this.proveedores = response.data;
    } catch (error) {
      console.error("Error al obtener proveedores:", error);
    }
  },
  nuevoProveedor() {
    this.proveedorSeleccionado = {
      nombre_proveedor: "",
      email: "",
      telefono: "",
      estado: 0,
      direccion: ""
    };
    this.mostrarModal = true;
  },
  editarProveedor(proveedor) {
    this.proveedorSeleccionado = { ...proveedor };
    this.mostrarModal = true;
  },
  async guardarEdicion() {
    try {
      if (this.proveedorSeleccionado.id) {
        // Actualizar un proveedor existente
        await axios.put(`${this.apiUrl}/${this.proveedorSeleccionado.id}`, this.proveedorSeleccionado);
      } else {
        // Crear un nuevo proveedor
        const payload = {
          nombre_proveedor: this.proveedorSeleccionado.nombre_proveedor,
          email: this.proveedorSeleccionado.email,
          telefono: this.proveedorSeleccionado.telefono,
          estado: this.proveedorSeleccionado.estado,
          direccion: this.proveedorSeleccionado.direccion
        };
        await axios.post(this.apiUrl, payload);
      }
      this.obtenerProveedores();
      this.cerrarModal();
    } catch (error) {
      console.error("Error al guardar el proveedor:", error);
    }
  },
  confirmarEliminacion(id) {
    this.proveedorAEliminar = id;
    this.mostrarConfirmacion = true;
  },
  async eliminarProveedorConfirmado() {
    try {
      await axios.delete(`${this.apiUrl}/${this.proveedorAEliminar}`);
      this.obtenerProveedores();
      this.cerrarConfirmacion();
    } catch (error) {
      console.error("Error al eliminar el proveedor:", error);
    }
  },
  cerrarConfirmacion() {
    this.mostrarConfirmacion = false;
    this.proveedorAEliminar = null;
  },
  cerrarModal() {
    this.mostrarModal = false;
    this.proveedorSeleccionado = null;
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

.table-sm th, .table-sm td {
font-size: 14px; /* Tamaño más pequeño para el texto */
white-space: nowrap; /* Evitar que el texto se quiebre */
}

.table-responsive {
max-width: 100%;
overflow-x: auto;
}

button i {
font-size: 16px;
}
</style>

  