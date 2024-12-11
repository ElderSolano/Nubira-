<template>
  <div class="container-fluid espaciado col-10">
    <h2 class="text-center">Categorías</h2>

    <div class="d-flex justify-content-end mb-4">
      <button @click="nuevaCategoria" class="btn btn-primary mb-3">
      Crear Categoria
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
              <i class="fas fa-edit"></i> <!-- Ícono de editar -->
            </button>

            <!-- Botón para eliminar una categoría -->
            <button @click="confirmarEliminacion(categoria.id)" class="btn btn-danger btn-sm ml-2">
              <i class="fas fa-trash"></i> <!-- Ícono de eliminar -->
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
      categorias: [], // Almacena las categorías
      categoriaSeleccionada: null, // Almacena la categoría seleccionada para edición
      mostrarModal: false, // Controla la visibilidad del modal de edición
      mostrarConfirmacion: false, // Controla la visibilidad del modal de confirmación
      categoriaAEliminar: null, // Almacena la categoría que se va a eliminar
      apiUrl: "http://127.0.0.1:8000/api/categoria", // URL de la API
      usuarioLogueado: 1 // ID del usuario logueado
    };
  },
  mounted() {
    this.obtenerCategorias(); // Llama la función para obtener categorías al montar el componente
  },
  methods: {
    // Obtener las categorías desde la API
    async obtenerCategorias() {
      try {
        const token = localStorage.getItem('authToken'); // Obtén el token del localStorage

        if (!token) {
          throw new Error("No hay token de autenticación disponible.");
        }

        const response = await axios.get(this.apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`, // Pasa el token en las cabeceras
          },
        });

        this.categorias = response.data; // Asigna la respuesta a la variable categorias
      } catch (error) {
        console.error("Error al obtener categorías:", error);
        alert("No se pudieron cargar las categorías. Verifica tu sesión.");
      }
    },

    // Mostrar el modal para crear una nueva categoría
    nuevaCategoria() {
      this.categoriaSeleccionada = { 
        nombre_categoria: '', 
        descripcion_categoria: '', 
        created_by: this.usuarioLogueado, // Asigna el id del usuario logueado
        updated_by: null, 
        deleted_by: null
      };
      this.mostrarModal = true; // Mostrar el modal
    },

    // Mostrar el modal para editar una categoría
    editarCategoria(categoria) {
      this.categoriaSeleccionada = { 
        ...categoria, 
        updated_by: this.usuarioLogueado // Asigna el id del usuario logueado
      };
      this.mostrarModal = true; // Mostrar el modal
    },

    // Guardar la nueva categoría o actualizar una existente
    async guardarEdicion() {
      try {
        const token = localStorage.getItem('authToken'); // Obtén el token del localStorage

        if (!token) {
          throw new Error("No hay token de autenticación disponible.");
        }

        if (this.categoriaSeleccionada.id) {
          // Si la categoría tiene un ID, se está editando
          await axios.put(
            `${this.apiUrl}/${this.categoriaSeleccionada.id}`,
            this.categoriaSeleccionada,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Pasa el token
              },
            }
          );
          console.log("Categoría actualizada exitosamente");
        } else {
          // Si no tiene un ID, es una nueva categoría
          await axios.post(this.apiUrl, this.categoriaSeleccionada, {
            headers: {
              Authorization: `Bearer ${token}`, // Pasa el token
            },
          });
          console.log("Categoría creada exitosamente");
        }
        this.obtenerCategorias(); // Actualizar la lista de categorías después de editar o crear
        this.cerrarModal(); // Cerrar el modal
      } catch (error) {
        console.error("Error al guardar la categoría:", error);
      }
    },

    // Confirmar la eliminación de la categoría
    confirmarEliminacion(id) {
      this.categoriaAEliminar = id; // Almacenar el id de la categoría a eliminar
      this.mostrarConfirmacion = true; // Mostrar el modal de confirmación
    },

    // Eliminar la categoría confirmada
    async eliminarCategoriaConfirmada() {
      try {
        const token = localStorage.getItem('authToken'); // Obtén el token del localStorage

        if (!token) {
          throw new Error("No hay token de autenticación disponible.");
        }

        await axios.delete(`${this.apiUrl}/${this.categoriaAEliminar}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pasa el token
          },
        });
        console.log("Categoría eliminada exitosamente");
        this.obtenerCategorias(); // Actualizar la lista de categorías
        this.cerrarConfirmacion(); // Cerrar el modal de confirmación
      } catch (error) {
        console.error("Error al eliminar la categoría:", error);
      }
    },

    // Cerrar el modal de confirmación
    cerrarConfirmacion() {
      this.mostrarConfirmacion = false;
      this.categoriaAEliminar = null;
    },

    // Cerrar el modal de creación/edición
    cerrarModal() {
      this.mostrarModal = false;
      this.categoriaSeleccionada = null;
    }
  }
};
</script>




