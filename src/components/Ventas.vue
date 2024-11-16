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
        <button @click="agregarProducto" class="btn">Añadir Producto Nuevo</button>
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
    </div>
  </template>
  
  <script>
  export default {
    name: 'VentaComponent',
    data() {
      return {
        productos: [
          { nombre: 'Producto 1', codigo: 'P001', stock: 10, cantidad: 0, precio: 50 },
          { nombre: 'Producto 2', codigo: 'P002', stock: 5, cantidad: 0, precio: 80 },
          { nombre: 'Producto 3', codigo: 'P003', stock: 8, cantidad: 0, precio: 30 },
        ],
      };
    },
    computed: {
      subtotal() {
        return this.productos.reduce((total, producto) => total + producto.total, 0);
      },
      impuesto() {
        return this.subtotal * 0.15;
      },
      total() {
        return this.subtotal + this.impuesto;
      },
    },
    methods: {
      aumentarCantidad(index) {
        if (this.productos[index].cantidad < this.productos[index].stock) {
          this.productos[index].cantidad++;
        }
      },
      disminuirCantidad(index) {
        if (this.productos[index].cantidad > 0) {
          this.productos[index].cantidad--;
        }
      },
      pagar() {
        this.$router.push({ name: 'Factura', params: { productos: this.productos } });
      },
      // Método para formatear la moneda, añadiendo validación
      formatCurrency(value) {
        if (typeof value === 'number' && !isNaN(value)) {
          return `$${value.toFixed(2)}`;
        } else {
          return `$0.00`; // Valor por defecto si no es un número válido
        }
      },
    },
    watch: {
      'productos': {
        handler() {
          this.productos.forEach((producto) => {
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
    margin-left: 250px
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
    width: 60px;
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
  </style>
  