<template>
  <div class="venta-container">
    <div class="venta-table">
      <table class="table">
        <thead>
          <tr>
            <th>Artículo</th>
            <th>Código</th>
            <th>Stock</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in productos" :key="item.codigo">
            <td>{{ item.nombre }}</td>
            <td>{{ item.codigo }}</td>
            <td>{{ item.stock }}</td>
            <td>
              <input type="number" v-model="item.cantidad" min="0" max="item.stock" />
            </td>
            <td>{{ formatCurrency(item.precio) }}</td>
            <td>{{ formatCurrency(item.total) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="d-flex mb-5">
      <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn">Añadir Producto Nuevo</button>
    </div>
    
    <div class="venta-summary">
      <div>
        <strong>Subtotal:</strong> {{ formatCurrency(subtotal) }}
      </div>
      <div>
        <strong>Impuesto (15%):</strong> {{ formatCurrency(impuesto) }}
      </div>
      <div>
        <strong>Total:</strong> {{ formatCurrency(total) }}
      </div>
      <button @click="pagar" class="btn btn-primary">Pagar</button>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Añadir un producto</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="searchInput" class="form-label">Buscar producto por código o nombre</label>
              <input
                type="text"
                v-model="searchQuery"
                @input="buscarProducto"
                class="form-control"
                id="searchInput"
                placeholder="Escribe el código o nombre"
              />
            </div>
          
            <!-- Resultado de la búsqueda -->
            <div v-if="productoEncontrado" class="border p-3 mt-3" style="color:black">
              <p><strong>Código:</strong> {{ productoEncontrado.codigo }}</p>
              <p><strong>Nombre:</strong> {{ productoEncontrado.nombre }}</p>
              <p><strong>Stock:</strong> {{ productoEncontrado.stock }}</p>
              <p><strong>Precio:</strong> {{ formatCurrency(productoEncontrado.precio) }}</p>
              <button @click="añadirProducto" class="btn btn-primary" data-bs-dismiss="modal">
                Añadir Producto
              </button>
            </div>
          
            <!-- Mensaje si no hay resultados -->
            <div v-else class="mt-3 text-danger">
              <p>No se encontró ningún producto.</p>
            </div>
          </div>

          <!-- Subtotal, Impuesto y Total en el Modal -->
          <div class="modal-footer bg-light">
            <div class="row w-100">
              <div class="col text-start">
                <p><strong>Subtotal:</strong> {{ formatCurrency(subtotal) }}</p>
                <p><strong>Impuesto (15%):</strong> {{ formatCurrency(impuesto) }}</p>
                <p><strong>Total:</strong> {{ formatCurrency(total) }}</p>
              </div>
              <div class="col text-end">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VentaComponent',
  data() {
    return {
      productos: [
        { nombre: 'Producto 1', codigo: 'P001', stock: 10, cantidad: 0, precio: 50, total: 0 },
        { nombre: 'Producto 2', codigo: 'P002', stock: 5, cantidad: 0, precio: 80, total: 0 },
        { nombre: 'Producto 3', codigo: 'P003', stock: 8, cantidad: 0, precio: 30, total: 0 },
      ],
      catalogo: [
        { nombre: 'Producto 4', codigo: 'P004', stock: 15, precio: 40 },
        { nombre: 'Producto 5', codigo: 'P005', stock: 20, precio: 70 },
      ],
      searchQuery: '',
      productoEncontrado: null,
    };
  },
  computed: {
    subtotal() {
      return this.productos.reduce((total, producto) => total + producto.total, 0);
    },
    impuesto() {
      return this.subtotal * 0.15; // Ahora se calcula únicamente sobre el subtotal
    },
    total() {
      return this.subtotal + this.impuesto; // Total es la suma del subtotal + impuesto
    },
  },
  methods: {
    buscarProducto() {
      if (this.searchQuery.trim() !== '') {
        this.productoEncontrado = this.catalogo.find(
          producto =>
            producto.codigo.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            producto.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.productoEncontrado = null; // Limpia el resultado si no hay búsqueda
      }
    },
    añadirProducto() {
      if (this.productoEncontrado) {
        // Verifica que el producto no esté ya en la tabla
        const existe = this.productos.some(
          producto => producto.codigo === this.productoEncontrado.codigo
        );

        if (!existe) {
          const productoNuevo = {
            ...this.productoEncontrado,
            cantidad: 0,
            total: 0,
          };
          this.productos.push(productoNuevo);
        } else {
          alert('El producto ya está en la tabla');
        }

        // Limpia la búsqueda y el resultado
        this.productoEncontrado = null;
        this.searchQuery = '';
      }
    },
    methods: {
  pagar() {
    console.log("Hola")
    // Filtrar productos con cantidad mayor a 0
    const productosConCantidad = this.productos.filter(producto => producto.cantidad > 0);
    console.log(this.productos)
    // Verificar que hay productos con cantidad seleccionada
    if (productosConCantidad.length > 0) {
      // Usar router para pasar productos a la factura
      this.$router.push({ name: 'Factura', params: { productos: productosConCantidad } });
    } else {
      alert('Por favor, agrega productos a la venta antes de continuar.');
    }
  },
}
,

    formatCurrency(value) {
      return `$${value.toFixed(2)}`;
    },
  },
  watch: {
    productos: {
      handler() {
        this.productos.forEach(producto => {
          producto.total = producto.cantidad * producto.precio;
        });
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
.venta-container {
  padding: 20px;
  margin-left: 250px;
  color: black;
}
.venta-table {
  margin-bottom: 20px;
}
.venta-summary {
  font-size: 1.2rem;
  display: flex;
  justify-content: space-around;
}
.venta-summary div {
  margin-bottom: 10px;
}
button {
  margin: 0 5px;
}
input {
  text-align: center;
}
.btn {
  background-color: #6a0dad;
  color: white;
}
.btn-add {
  background-color: #0cf114;
  border: none;
  border-radius: 3px;
  color: white;
}
.btn-remove {
  background-color: #f00;
  border: none;
  border-radius: 3px;
  color: white;
}
.input-busqueda-modal {
  width: 100%;
}
</style>
