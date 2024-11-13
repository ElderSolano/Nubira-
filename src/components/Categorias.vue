<template>
  <div class="container mt-4">
    <!-- Botón de Crear Categoría alineado a la derecha -->
    <div class="d-flex justify-content-end mb-4">
      <button class="btn btn-primary" @click="nuevaCategoria" data-bs-toggle="modal" data-bs-target="#editarCategoriaModal">
        Crear Categoría
      </button>
    </div>

    <!-- Card con la tabla, alineada a la derecha -->
    <div class="card mb-4 ms-auto" style="max-width: 80%;"> <!-- Se ajusta el tamaño para no ocupar toda la pantalla -->
      <div class="card-header pb-0">
        <h6>Lista de Categorías</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Nombre</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Descripción</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Editar</th>
                <th class="text-secondary opacity-7"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="categoria in categorias" :key="categoria.id">
                <td>
                  <p class="text-xs font-weight-bold mb-0">{{ categoria.nombre }}</p>
                </td>
                <td>
                  <p class="text-xs font-weight-bold mb-0">{{ categoria.descripcion }}</p>
                </td>
                <td class="align-middle text-center">
                  <button 
                    @click="editarCategoria(categoria)" 
                    class="text-secondary font-weight-bold text-xs btn btn-link" 
                    data-bs-toggle="modal" 
                    data-bs-target="#editarCategoriaModal">
                    Editar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal de Edición de Categoría -->
  <div class="modal fade" id="editarCategoriaModal" tabindex="-1" aria-labelledby="editarCategoriaModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editarCategoriaModalLabel">{{ categoriaSeleccionada.id ? 'Editar' : 'Crear' }} Categoría</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="nombreCategoria" class="form-label">Nombre</label>
            <input 
              type="text" 
              class="form-control" 
              id="nombreCategoria" 
              v-model="categoriaSeleccionada.nombre" 
              placeholder="Nombre de la categoría">
          </div>
          <div class="mb-3">
            <label for="descripcionCategoria" class="form-label">Descripción</label>
            <input 
              type="text" 
              class="form-control" 
              id="descripcionCategoria" 
              v-model="categoriaSeleccionada.descripcion" 
              placeholder="Descripción de la categoría">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" @click="guardarEdicion">{{ categoriaSeleccionada.id ? 'Guardar cambios' : 'Crear categoría' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { Modal } from 'bootstrap';

export default {
  name: "CategoriasTable",
  data() {
    return {
      categorias: [], // Lista de categorías obtenidas de la API
      categoriaSeleccionada: {
        id: null,
        nombre: '',
        descripcion: ''
      },
      apiUrl: 'https://api.ejemplo.com/categorias', // Reemplázalo por la URL de tu API
      categoriasDeEjemplo: [
        { id: 1, nombre: 'Electrónica', descripcion: 'Dispositivos electrónicos como teléfonos, computadoras, etc.' },
        { id: 2, nombre: 'Ropa', descripcion: 'Prendas de vestir para todos los gustos.' },
        { id: 3, nombre: 'Hogar', descripcion: 'Artículos para el hogar y la cocina.' }
      ] // Datos de ejemplo
    };
  },
  mounted() {
    this.obtenerCategorias(); // Obtener las categorías cuando el componente se monta
  },
  methods: {
    // Obtener categorías desde la API
    async obtenerCategorias() {
      try {
        const response = await axios.get(this.apiUrl);
        if (response.data && response.data.length > 0) {
          this.categorias = response.data; // Suponiendo que la API devuelve un arreglo de categorías
        } else {
          this.categorias = this.categoriasDeEjemplo; // Asigna los datos de ejemplo si la respuesta está vacía
        }
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
        this.categorias = this.categoriasDeEjemplo; // Usa los datos de ejemplo si hay un error
      }
    },
    nuevaCategoria() {
      // Resetea los campos para crear una nueva categoría
      this.categoriaSeleccionada = {
        id: null,
        nombre: '',
        descripcion: ''
      };
    },
    editarCategoria(categoria) {
      // Establece la categoría seleccionada para el modal de edición
      this.categoriaSeleccionada = { ...categoria };
    },
    // Guardar nueva o editar categoría
    async guardarEdicion() {
      if (this.categoriaSeleccionada.id) {
        // Actualizar categoría (editar)
        try {
          const response = await axios.put(
            `${this.apiUrl}/${this.categoriaSeleccionada.id}`,
            this.categoriaSeleccionada
          );
          console.log('Categoría actualizada:', response.data);
          this.obtenerCategorias(); // Actualiza la lista después de la edición
        } catch (error) {
          console.error('Error al actualizar la categoría:', error);
        }
      } else {
        // Crear nueva categoría
        try {
          const response = await axios.post(this.apiUrl, this.categoriaSeleccionada);
          console.log('Categoría creada:', response.data);
          this.obtenerCategorias(); // Actualiza la lista después de crear
        } catch (error) {
          console.error('Error al crear la categoría:', error);
        }
      }

      // Resetear la categoría seleccionada después de guardar
      this.categoriaSeleccionada = { id: null, nombre: '', descripcion: '' };

      // Cerrar el modal
      const modal = Modal.getInstance(document.getElementById('editarCategoriaModal'));
      modal.hide();
    }
  }
};
</script>

<style scoped>
/* Ajusta el estilo para que la tabla y los botones no choquen con otros componentes */
.card {
  margin-left: auto;
  margin-right: auto;
}
</style>
