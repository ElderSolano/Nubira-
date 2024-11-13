<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-end mb-4">
      <button class="btn btn-primary" @click="nuevoProducto" data-bs-toggle="modal" data-bs-target="#editarProductoModal">
        Crear Producto
      </button>
    </div>

    <div class="card mb-4 ms-auto" style="max-width: 100%;">
      <div class="card-header pb-0">
        <h6>Lista de Productos</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0">
            <thead>
              <tr>
                <th>Código</th>
                <th>Producto</th>
                <th class="text-center">Precio Unitario</th>
                <th class="text-center">Exonerado</th>
                <th class="text-center">Marca</th>
                <th class="text-center">Categoría</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="producto in productos" :key="producto.codigo">
                <td>{{ producto.codigo }}</td>
                <td>{{ producto.nombre }}</td>
                <td class="text-center">{{ producto.precioUnitario }}</td>
                <td class="text-center">{{ producto.exonerado ? 'Sí' : 'No' }}</td>
                <td class="text-center">{{ producto.marca }}</td>
                <td class="text-center">{{ producto.categoria }}</td>
                <td class="align-middle text-center">
                  <button @click="verProducto(producto)" class="btn btn-link text-secondary font-weight-bold" data-bs-toggle="modal" data-bs-target="#verProductoModal">
                    Ver
                  </button>
                  <button @click="editarProducto(producto)" class="btn btn-link text-secondary font-weight-bold" data-bs-toggle="modal" data-bs-target="#editarProductoModal">
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

  <!-- Modal de Detalles de Producto -->
  <div class="modal fade" id="verProductoModal" tabindex="-1" aria-labelledby="verProductoModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="verProductoModalLabel">Detalles del Producto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-if="productoSeleccionado.imagenUrl" class="mb-3">
            <img :src="productoSeleccionado.imagenUrl" alt="Imagen del Producto" class="img-fluid rounded">
          </div>
          <p><strong>Código:</strong> {{ productoSeleccionado.codigo }}</p>
          <p><strong>Nombre:</strong> {{ productoSeleccionado.nombre }}</p>
          <p><strong>Precio Unitario:</strong> {{ productoSeleccionado.precioUnitario }}</p>
          <p><strong>Exonerado:</strong> {{ productoSeleccionado.exonerado ? 'Sí' : 'No' }}</p>
          <p><strong>Marca:</strong> {{ productoSeleccionado.marca }}</p>
          <p><strong>Categoría:</strong> {{ productoSeleccionado.categoria }}</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal de Edición de Producto -->
  <div class="modal fade" id="editarProductoModal" tabindex="-1" aria-labelledby="editarProductoModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="editarProductoModalLabel">{{ productoSeleccionado.codigo ? 'Editar' : 'Crear' }} Producto</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="codigoProducto" class="form-label">Código</label>
            <input type="text" class="form-control" id="codigoProducto" v-model="productoSeleccionado.codigo">
          </div>
          <div class="mb-3">
            <label for="nombreProducto" class="form-label">Producto</label>
            <input type="text" class="form-control" id="nombreProducto" v-model="productoSeleccionado.nombre">
          </div>
          <div class="mb-3">
            <label for="imagenProducto" class="form-label">URL de Imagen</label>
            <input type="text" class="form-control" id="imagenProducto" v-model="productoSeleccionado.imagenUrl" placeholder="URL de la imagen">
          </div>
          <div class="mb-3">
            <label for="precioUnitario" class="form-label">Precio Unitario</label>
            <input type="number" class="form-control" id="precioUnitario" v-model="productoSeleccionado.precioUnitario">
          </div>
          <div class="mb-3">
            <label class="form-label">Exonerado</label>
            <select class="form-select" v-model="productoSeleccionado.exonerado">
              <option :value="true">Sí</option>
              <option :value="false">No</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="marcaProducto" class="form-label">Marca</label>
            <input type="text" class="form-control" id="marcaProducto" v-model="productoSeleccionado.marca">
          </div>
          <div class="mb-3">
            <label for="categoriaProducto" class="form-label">Categoría</label>
            <input type="text" class="form-control" id="categoriaProducto" v-model="productoSeleccionado.categoria">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          <button type="button" class="btn btn-primary" @click="guardarEdicion">{{ productoSeleccionado.codigo ? 'Guardar cambios' : 'Crear producto' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap';

export default {
  name: "ProductosTable",
  data() {
    return {
      productos: [],
      productoSeleccionado: {
        codigo: '',
        nombre: '',
        imagenUrl: '',
        precioUnitario: null,
        exonerado: false,
        marca: '',
        categoria: ''
      },
      productosDeEjemplo: [
        {
          codigo: 'P001',
          nombre: 'Producto 1',
          imagenUrl: 'https://www.geprofileca.com/images/default-source/default-album/ge_profile_refrigeradores_628l_inoxidable_psmn3ffbfbn_abiertoconprops-(2)57b39fde94bc68589c64ff0000514d75.jpg?Status=Master&sfvrsn=0',
          precioUnitario: 100,
          exonerado: true,
          marca: 'Marca A',
          categoria: 'Categoría 1'
        },
        {
          codigo: 'P002',
          nombre: 'Producto 2',
          imagenUrl: 'https://th.bing.com/th/id/OIP.REw4HkHTBpqMwF7qKzoMawHaKL?rs=1&pid=ImgDetMain',
          precioUnitario: 150,
          exonerado: false,
          marca: 'Marca B',
          categoria: 'Categoría 2'
        },
        {
          codigo: 'P003',
          nombre: 'Producto 3',
          imagenUrl: 'https://th.bing.com/th/id/R.51b6bcdb9e1a22ef482ffb6a9955b95e?rik=AVtIy6G5%2fUbJ6w&pid=ImgRaw&r=0',
          precioUnitario: 200,
          exonerado: true,
          marca: 'Marca C',
          categoria: 'Categoría 3'
        }
      ]
    };
  },
  methods: {
    async obtenerProductos() {
      try {
        const response = await fetch('http://localhost:8000/api/productos');
        const data = await response.json();

        // Si la respuesta está vacía o no hay productos, cargamos los productos de ejemplo
        if (!data || data.length === 0) {
          this.productos = this.productosDeEjemplo;
        } else {
          this.productos = data;
        }
      } catch (error) {
        console.error('Error al obtener productos:', error);
        this.productos = this.productosDeEjemplo; // Cargar los productos de ejemplo si hay error
      }
    },
    async nuevoProducto() {
      this.productoSeleccionado = { codigo: '', nombre: '', imagenUrl: '', precioUnitario: null, exonerado: false, marca: '', categoria: '' };
    },
    async verProducto(producto) {
      this.productoSeleccionado = { ...producto };
    },
    async editarProducto(producto) {
      this.productoSeleccionado = { ...producto };
    },
    async guardarEdicion() {
      try {
        let response;
        if (this.productoSeleccionado.codigo) {
          response = await fetch(`http://localhost:8000/api/productos/${this.productoSeleccionado.codigo}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.productoSeleccionado)
          });
        } else {
          response = await fetch('http://localhost:8000/api/productos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.productoSeleccionado)
          });
        }

        const result = await response.json();
        if (response.ok) {
          console.log("Producto guardado:", result);
          this.obtenerProductos(); // Actualiza la lista de productos
        } else {
          console.error("Error al guardar el producto:", result);
        }

        this.productoSeleccionado = { codigo: '', nombre: '', imagenUrl: '', precioUnitario: null, exonerado: false, marca: '', categoria: '' };
        const modal = Modal.getInstance(document.getElementById('editarProductoModal'));
        modal.hide();
      } catch (error) {
        console.error('Error al guardar producto:', error);
      }
    }
  },
  created() {
    this.obtenerProductos();
  }
};
</script>


<style scoped>
.container {
  max-width: 90%;
}

.img-fluid {
  max-width: 200px; /* Ajusta este valor según tus necesidades */
  max-height: 200px; /* Ajusta este valor según tus necesidades */
}
</style>
