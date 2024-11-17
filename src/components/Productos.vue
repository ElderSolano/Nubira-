<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-end mb-4">
      <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#crearProductoModal" @click="nuevoProducto">
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
                <th>Categoría</th>
                <th>Proveedor</th>
                <th>Precio Compra</th>
                <th>Precio Venta</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="producto in productos" :key="producto.codigo">
                <td>{{ producto.codigo }}</td>
                <td>{{ producto.nombre_producto }}</td>
                <td>{{ producto.categoria }}</td>
                <td>{{ producto.proveedor }}</td>
                <td>{{ producto.precio_compra }}</td>
                <td>{{ producto.precio_venta }}</td>
                <td>{{ producto.estado ? 'Activo' : 'Inactivo' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal de Crear Producto -->
    <div class="modal fade" id="crearProductoModal" tabindex="-1" aria-labelledby="crearProductoModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="crearProductoModalLabel">Crear Producto</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="guardarProducto">
              <div class="mb-3" v-for="(value, key) in filteredFormFields" :key="key">
                <label :for="key" class="form-label">{{ key }}</label>
                <input
                  :id="key"
                  :type="inputType(key)"
                  v-model="productoSeleccionado[key]"
                  class="form-control"
                />
              </div>

              <!-- Desplegable de Categorías -->
              <div class="mb-3">
                <label for="id_categoria" class="form-label">Categoría</label>
                <select v-model="productoSeleccionado.id_categoria" class="form-select" required>
                  <option value="" disabled>Seleccione una categoría</option>
                  <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
                    {{ categoria.nombre_categoria }}
                  </option>
                </select>
              </div>

              <button type="submit" class="btn btn-primary">Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productos: [],
      categorias: [], // Array para almacenar las categorías
      productoSeleccionado: {
        nombre_producto: '',
        stock: 0,
        id_categoria: '',
        precio_compra: '',
        precio_venta: '',
        estado: 1,
        codigo: '',
        descripcion: '',
        id_proveedor: '',
      },
    };
  },
  methods: {
    async obtenerProductos() {
      try {
        const response = await fetch('http://localhost:8000/api/productos');
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        this.productos = await response.json();
      } catch (error) {
        console.error(error);
        alert('Error al obtener productos');
      }
    },
    async obtenerCategorias() {
      try {
        const response = await fetch('http://localhost:8000/api/categoria');
        if (!response.ok) {
          throw new Error('Error al obtener categorías');
        }
        const data = await response.json();
        console.log('Categorias:', data); // Verifica que las categorías se obtienen correctamente
        this.categorias = data;
      } catch (error) {
        console.error(error);
        alert('Error al obtener categorías');
      }
    },
    nuevoProducto() {
      this.productoSeleccionado = {
        nombre_producto: '',
        stock: 0,
        id_categoria: '',
        precio_compra: '',
        precio_venta: '',
        estado: 1,
        codigo: '',
        descripcion: '',
        id_proveedor: '',
      };
    },
    async guardarProducto() {
      try {
        const productoPayload = {
          nombre_producto: this.productoSeleccionado.nombre_producto,
          stock: this.productoSeleccionado.stock,
          id_categoria: this.productoSeleccionado.id_categoria,
          precio_compra: this.productoSeleccionado.precio_compra,
          precio_venta: this.productoSeleccionado.precio_venta,
          estado: this.productoSeleccionado.estado,
          codigo: this.productoSeleccionado.codigo,
          descripcion: this.productoSeleccionado.descripcion,
          id_proveedor: this.productoSeleccionado.id_proveedor,
        };

        const response = await fetch('http://localhost:8000/api/productos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productoPayload),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Error al guardar el producto');
        }

        await this.obtenerProductos();
        alert('Producto creado con éxito');
      } catch (error) {
        console.error(error);
        alert(`Error al crear producto: ${error.message}`);
      }
    },
    inputType(key) {
      return ['stock', 'precio_compra', 'precio_venta', 'id_categoria', 'id_proveedor'].includes(key)
        ? 'number'
        : 'text';
    },
  },
  mounted() {
    this.obtenerProductos();
    this.obtenerCategorias(); // Llamada para obtener las categorías
  },
  computed: {
    filteredFormFields() {
      return this.productoSeleccionado;
    }
  },
};
</script>
