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
                <th>ID</th>
                <th>Código</th>
                <th>Producto</th>
                <th>Categoría</th>
                <th>Proveedor</th>
                <th>Precio Compra</th>
                <th>Precio Venta</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="producto in productos" :key="producto.codigo">
                <td>{{ producto.id }}</td>
                <td>{{ producto.codigo }}</td>
                <td>{{ producto.nombre_producto }}</td>
                <td>{{ producto.categoria }}</td>
                <td>{{ producto.proveedor }}</td>
                <td>{{ producto.precio_compra }}</td>
                <td>{{ producto.precio_venta }}</td>
                <td>{{ producto.estado ? 'Activo' : 'Inactivo' }}</td>
                <td>
                  <!-- Botón de editar -->
                  <button @click="cargarDatosProducto(producto.codigo)" class="btn btn-warning btn-sm" data-bs-toggle="modal" data-bs-target="#crearProductoModal">
                    <i class="fas fa-edit"></i>
                  </button>

                  <!-- Botón de eliminar -->
                  <button @click="confirmarEliminacion(producto.codigo)" class="btn btn-danger btn-sm ml-2">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Modal de Crear/Editar Producto -->
    <div class="modal fade" id="crearProductoModal" tabindex="-1" aria-labelledby="crearProductoModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="crearProductoModalLabel">
              {{ isEditing ? 'Editar Producto' : 'Crear Producto' }}
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="isEditing ? actualizarProducto() : guardarProducto()">
              <div class="mb-3">
                <label for="nombre_producto" class="form-label">Nombre del producto</label>
                <input type="text" class="form-control" id="nombre_producto" v-model="productoSeleccionado.nombre_producto" required />
              </div>

              <div class="mb-3">
                <label for="codigo" class="form-label">Código</label>
                <input type="text" class="form-control" id="codigo" v-model="productoSeleccionado.codigo" required :disabled="isEditing" />
              </div>

              <div class="mb-3">
                <label for="descripcion" class="form-label">Descripción</label>
                <textarea class="form-control" id="descripcion" v-model="productoSeleccionado.descripcion" rows="3"></textarea>
              </div>

              <div class="mb-3">
                <label for="stock" class="form-label">Stock</label>
                <input type="number" class="form-control" id="stock" v-model="productoSeleccionado.stock" required />
              </div>

              <div class="mb-3">
                <label for="precio_compra" class="form-label">Precio de compra</label>
                <input type="number" class="form-control" id="precio_compra" v-model="productoSeleccionado.precio_compra" step="0.01" required />
              </div>

              <div class="mb-3">
                <label for="precio_venta" class="form-label">Precio de venta</label>
                <input type="number" class="form-control" id="precio_venta" v-model="productoSeleccionado.precio_venta" step="0.01" required />
              </div>

              <div class="mb-3">
                <label for="estado" class="form-label">Estado</label>
                <select class="form-select" id="estado" v-model="productoSeleccionado.estado" required>
                  <option :value="true">Activo</option>
                  <option :value="false">Inactivo</option>
                </select>
              </div>

              <div class="mb-3">
                <label for="id_categoria" class="form-label">Categoría</label>
                <select class="form-select" id="id_categoria" v-model="productoSeleccionado.id_categoria" required>
                  <option value="" disabled>Seleccione una categoría</option>
                  <option v-for="categoria in categorias" :key="categoria.id" :value="categoria.id">
                    {{ categoria.nombre_categoria }}
                  </option>
                </select>
              </div>

              <div class="mb-3">
                <label for="id_proveedor" class="form-label">Proveedor</label>
                <select class="form-select" id="id_proveedor" v-model="productoSeleccionado.id_proveedor" required>
                  <option value="" disabled>Seleccione un proveedor</option>
                  <option v-for="proveedor in proveedores" :key="proveedor.id" :value="proveedor.id">
                    {{ proveedor.nombre_proveedor }}
                  </option>
                </select>
              </div>

              <button type="submit" class="btn btn-primary">{{ isEditing ? 'Actualizar' : 'Guardar' }}</button>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal de Confirmación para Eliminar Producto -->
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
            <p>¿Estás seguro de que deseas eliminar este producto?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="cerrarConfirmacion">Cancelar</button>
            <button type="button" class="btn btn-danger" @click="eliminarProductoConfirmado">Aceptar</button>
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
      categorias: [],
      proveedores: [],
      productoSeleccionado: {
        nombre_producto: '',
        stock: 0,
        id_categoria: '',
        precio_compra: '',
        precio_venta: '',
        estado: true,
        codigo: '',
        descripcion: '',
        id_proveedor: '',
      },
      mostrarConfirmacion: false,
      productoAEliminar: null,
      isEditing: false,
    };
  },
  methods: {
    async obtenerProductos() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/productos`);
        if (!response.ok) throw new Error('Error al obtener productos');
        this.productos = await response.json();
      } catch (error) {
        console.error(error);
        alert('Error al obtener productos');
      }
    },
    async obtenerCategorias() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/categoria`);
        if (!response.ok) throw new Error('Error al obtener categorías');
        this.categorias = await response.json();
      } catch (error) {
        console.error(error);
        alert('Error al obtener categorías');
      }
    },
    async obtenerProveedores() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/proveedores`);
        if (!response.ok) throw new Error('Error al obtener proveedores');
        this.proveedores = await response.json();
      } catch (error) {
        console.error(error);
        alert('Error al obtener proveedores');
      }
    },
    nuevoProducto() {
      this.productoSeleccionado = {
        nombre_producto: '',
        stock: 0,
        id_categoria: '',
        precio_compra: '',
        precio_venta: '',
        estado: true,
        codigo: '',
        descripcion: '',
        id_proveedor: '',
      };
      this.isEditing = false;
    },
    async guardarProducto() {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/productos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.productoSeleccionado),
        });
        if (!response.ok) throw new Error('Error al guardar producto');
        this.obtenerProductos();
        alert('Producto creado exitosamente');
      } catch (error) {
        console.error(error);
        alert('Error al guardar producto');
      }
    },
    cargarDatosProducto(codigo) {
      const producto = this.productos.find((prod) => prod.codigo === codigo);
      if (producto) {
        this.productoSeleccionado = { ...producto };
        this.isEditing = true;
      }
    },
    async actualizarProducto() {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/productos/${this.productoSeleccionado.id}`,
          {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.productoSeleccionado),
          }
        );
        if (!response.ok) throw new Error('Error al actualizar producto');
        this.obtenerProductos();
        alert('Producto actualizado exitosamente');
      } catch (error) {
        console.error(error);
        alert('Error al actualizar producto');
      }
    },
    confirmarEliminacion(codigo) {
      this.mostrarConfirmacion = true;
      this.productoAEliminar = codigo;
    },
    cerrarConfirmacion() {
      this.mostrarConfirmacion = false;
      this.productoAEliminar = null;
    },
    async eliminarProductoConfirmado() {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/api/productos/${this.productoAEliminar}`,
          {
            method: 'DELETE',
          }
        );
        if (!response.ok) throw new Error('Error al eliminar producto');
        this.obtenerProductos();
        alert('Producto eliminado exitosamente');
      } catch (error) {
        console.error(error);
        alert('Error al eliminar producto');
      } finally {
        this.cerrarConfirmacion();
      }
    },
  },
  mounted() {
    this.obtenerProductos();
    this.obtenerCategorias();
    this.obtenerProveedores();
  },
};
</script>

<style scoped>
.modal-header {
  background-color: #f8f9fa;
}
.modal-footer {
  display: flex;
  justify-content: space-between;
}
</style>


