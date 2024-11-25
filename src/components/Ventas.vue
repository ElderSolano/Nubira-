<template>
  <div class="venta-container">
    <header>
      <div class="title">Ventas</div>
      <div class="info">
        <span class="time">{{ currentTime }}</span>
        <span class="user">Usuario: {{ userName }}</span>
      </div>
    </header>
    <div class="d-flex mb-5">
      <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn">Añadir Producto Nuevo</button>
    </div>
    <div class="venta-table">
      <table class="table">
        <thead>
          <tr>
            <th>
              <p class="p-table"> Artículo</p>
            </th>
            <th>
              <p class="p-table">Código</p>
            </th>
            <th>
              <p class="p-table">Stock</p>
            </th>
            <th>
              <p class="p-table">Cantidad</p>
            </th>
            <th>
              <p class="p-table">Precio</p>
            </th>
            <th>
              <p class="p-table">Total</p>
            </th>
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

    <div class="venta-summary">
    <div class="summary-item">
      <div class="label">ISV</div>
      <div class="value">15%</div>
    </div>
    <div class="summary-item">
      <div class="label">SubTotal</div>
      <div class="value">{{ formatCurrency(subtotal) }}</div>
    </div>
    <div class="summary-item total-item">
      <div class="label">Total</div>
      <div class="value">{{ formatCurrency(total) }}</div>
    </div>
    <button @click="pagar" class="btn">Pagar</button>
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
              <input type="text" v-model="searchQuery" @input="buscarProducto" class="form-control" id="searchInput"
                placeholder="Escribe el código o nombre" />
            </div>

            <!-- Resultado de la búsqueda
            <div v-if="productoEncontrado" class="border p-3 mt-3" style="color:black">
              <p><strong>Código:</strong> {{ productoEncontrado.codigo }}</p>
              <p><strong>Nombre:</strong> {{ productoEncontrado.nombre }}</p>
              <p><strong>Stock:</strong> {{ productoEncontrado.stock }}</p>
              <p><strong>Precio:</strong> {{ formatCurrency(productoEncontrado.precio) }}</p>
              <button @click="añadirProducto" class="btn btn-primary" data-bs-dismiss="modal">
                Añadir Producto
              </button>
            </div> -->

            <div v-if="productoEncontrado" class="border p-3 mt-3"
              style="color:black; display: flex; justify-content: space-around; flex-direction: column; overflow-y: scroll; max-height: 300px;">
              <div style="width: 100%; display: flex; justify-content: space-around; align-items: center; margin-bottom: 3px;">
                <p style="margin: 0!important;"><strong>{{ productoEncontrado.codigo }}</strong> </p>
                <p style="margin: 0!important;"><strong>Nombre:</strong> {{ productoEncontrado.nombre }}</p>
                <button @click="añadirProducto" class="btn btn-primary" data-bs-dismiss="modal">
                  Añadir
                </button>
              </div>
              <hr>
              
              
              
            </div>
            <!-- Mensaje si no hay resultados -->
            <div v-else class="mt-3 text-danger">
              <p>No se encontró ningún producto.</p>
            </div>
          </div>

          <!-- Subtotal, Impuesto y Total en el Modal -->
          <div class="modal-footer bg-light">
            <div class="row w-100">
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
      currentTime: '', // Para almacenar la hora en formato string
      userName: 'Juan Pérez' // Ejemplo de usuario activo
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
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString(); // Formato: HH:MM:SS AM/PM
    },
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
  mounted() {
    this.updateTime(); // Actualiza la hora inmediatamente al cargar
    setInterval(this.updateTime, 1000); // Actualiza la hora cada segundo
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
  color: black;
}

.venta-table {
  margin-bottom: 20px;
}

.venta-summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  background-color: #fef4f4;
  border: 1px solid #e4d3d3;
  border-radius: 8px;
  font-family: "Arial", sans-serif;
}

.summary-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid #e4d3d3;
  border-radius: 6px;
  margin-right: 10px;
  background-color: #f9eaea;
}

.total-item {
  background-color: #f5e4e4;
  border: 1px solid #d4baba;
  font-weight: bold;
}

.label {
  font-size: 14px;
  color: #b66a6a;
  font-weight: bold;
  margin-bottom: 5px;
}

.value {
  font-size: 16px;
  color: #9a5c5c;
}

.btn {
  padding: 10px 20px;
  background-color: #b66a6a;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s;
}

.btn:hover {
  background-color: #9a5c5c;
}

button {
  margin: 0 5px;
}

input {
  text-align: center;
}

.btn {
  background-color: #5a24ea;
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

* {
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
}

.title {
  font-size: 24px;
  font-weight: bold;
}

.info {
  display: flex;
  gap: 20px;
  margin-bottom: 10px
}

.time {
  font-size: 18px;
  font-weight: 500;
  color: #555;
}

.user {
  font-size: 16px;
  color: #777;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 16px;
  text-align: left;
  background-color: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(51, 50, 50, 0.1);
  color: white !important;
}

.table thead {
  background-color: #dc3545;
  color: white !important;
}

.table th {
  padding: 15px;
  text-transform: uppercase;
  font-weight: bold;
}

.table tbody tr {
  transition: background-color 0.3s;
}

.table tbody tr:nth-child(even) {
  background-color: #f1f1f1;
  /* Rayas para alternar */
}

.table tbody tr:hover {
  background-color: #d9ecff;
  /* Resaltar fila al pasar el ratón */
}

.table td {
  padding: 15px;
  border-bottom: 1px solid #ddd;
}

input[type="number"] {
  width: 60px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
}

input[type="number"]:focus {
  outline: none;
  border-color: #292b2d;
  /* Color de foco */
  box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
  color: white;
}

.table td:last-child {
  font-weight: bold;
  color: #dc3545;
  /* Verde para totales */
}

.p-table {
  color: white;
  margin: 0!important;
}
</style>
