<template>
  <div class="container-fluid espaciado col-10">
    <h2 class="text-center">Categorías</h2>

    <div class="d-flex justify-content-end mb-4">
      <button @click="nuevaCategoria" class="btn btn-primary mb-3">
        Crear Producto
      </button>
    </div>

    <!-- Tabla de categorías -->
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categoria in categorias" :key="categoria.id">
          <td>{{ categoria.id }}</td>
          <td>{{ categoria.nombre_categoria }}</td>
          <td>{{ categoria.descripcion_categoria }}</td>
          <td>
            <!-- Botón para editar una categoría -->
            <button @click="editarCategoria(categoria)" class="btn btn-warning btn-sm">
              <i class="fas fa-edit"></i>
            </button>

            <!-- Botón para eliminar una categoría -->
            <button @click="confirmarEliminacion(categoria.id)" class="btn btn-danger btn-sm ml-2">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Modal de creación/edición de categoría -->
    <div v-if="mostrarModal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ categoriaSeleccionada ? 'Editar Categoría' : 'Crear Nueva Categoría' }}</h5>
            <button type="button" class="close" @click="cerrarModal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="guardarEdicion">
              <div class="form-group">
                <label for="nombre_categoria">Nombre de la categoría</label>
                <input type="text" class="form-control" id="nombre_categoria" v-model="categoriaSeleccionada.nombre_categoria" required>
              </div>
              <div class="form-group">
                <label for="descripcion_categoria">Descripción</label>
                <input type="text" class="form-control" id="descripcion_categoria" v-model="categoriaSeleccionada.descripcion_categoria" required>
              </div>
              <button type="submit" class="btn btn-primary">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de confirmación para eliminar categoría -->
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
            <p>¿Estás seguro de que deseas eliminar esta categoría?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="cerrarConfirmacion">Cancelar</button>
            <button type="button" class="btn btn-danger" @click="eliminarCategoriaConfirmada">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Categorias",
  data() {
    return {
      categorias: [],
      categoriaSeleccionada: null,
      mostrarModal: false,
      mostrarConfirmacion: false,
      categoriaAEliminar: null,
      apiUrl: "http://127.0.0.1:8000/api/categoria",
    };
  },
  mounted() {
    this.obtenerCategorias();
  },
  methods: {
    async obtenerCategorias() {
      try {
        const token = localStorage.getItem('authToken'); // Obtén el token de localStorage
        const response = await axios.get(this.apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.categorias = response.data;
      } catch (error) {
        console.error("Error al obtener categorías:", error);
      }
    },

    nuevaCategoria() {
      this.categoriaSeleccionada = {
        nombre_categoria: "",
        descripcion_categoria: "",
      };
      this.mostrarModal = true;
    },

    editarCategoria(categoria) {
      this.categoriaSeleccionada = { ...categoria };
      this.mostrarModal = true;
    },

    async guardarEdicion() {
      try {
        const token = localStorage.getItem('authToken');
        if (this.categoriaSeleccionada.id) {
          await axios.put(
            `${this.apiUrl}/${this.categoriaSeleccionada.id}`,
            this.categoriaSeleccionada,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        } else {
          await axios.post(this.apiUrl, this.categoriaSeleccionada, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        this.obtenerCategorias();
        this.cerrarModal();
      } catch (error) {
        console.error("Error al guardar la categoría:", error);
      }
    },

    confirmarEliminacion(id) {
      this.categoriaAEliminar = id;
      this.mostrarConfirmacion = true;
    },

    async eliminarCategoriaConfirmada() {
      try {
        const token = localStorage.getItem('authToken');
        await axios.delete(`${this.apiUrl}/${this.categoriaAEliminar}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.obtenerCategorias();
        this.cerrarConfirmacion();
      } catch (error) {
        console.error("Error al eliminar la categoría:", error);
      }
    },

    cerrarConfirmacion() {
      this.mostrarConfirmacion = false;
      this.categoriaAEliminar = null;
    },

    cerrarModal() {
      this.mostrarModal = false;
      this.categoriaSeleccionada = null;
    },
  },
};
</script>

<style scoped>
/* Sin cambios */
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



