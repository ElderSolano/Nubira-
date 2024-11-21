<template>
  <div class="factura-container">
    <div class="header">
      <div class="info">
        <p><strong>RTN Mercadito:</strong> xxxxxxxxxxxx</p>
        <p><strong>Casa Matriz:</strong> xxxxxxxxxxxxxxxxxxxxxx</p>
        <p><strong>Dirección:</strong> Francisco Morazan, Tegucigalpa, Col. Yo no vivo aquí</p>
        <p><strong>Correo:</strong> xxxxx@xxxx.com</p>
        <p><strong>Teléfono:</strong> xxxxxxxx</p>
      </div>
      <div class="factura-info">
        <p><strong>Factura Original</strong></p>
        <p>NO.: xxx-xxx-xx-xxxxxxxx</p>
        <p><strong>Fecha:</strong> {{ new Date().toLocaleDateString() }}</p>
        <p><strong>Empleado:</strong> María Gutierritos</p>
      </div>
    </div>

    <div class="cliente-info">
      <p><strong>Nombre:</strong> Cliente Final</p>
      <p><strong>RTN:</strong> RTN cliente</p>
    </div>

    <div class="productos">
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="producto in productos" :key="producto.nombre">
            <td>{{ producto.nombre }}</td>
            <td>L. {{ producto.precio }}</td>
            <td>{{ producto.cantidad }}</td>
            <td>L. {{ producto.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="totales">
      <p>Subtotal: L. {{ subtotal }}</p>
      <p>15% ISV: L. {{ impuesto }}</p>
      <p>Total a Pagar: L. {{ total }}</p>
    </div>

    <div class="footer-factura">
      <button class="btn-aceptar-factura" @click="procesarFactura">Aceptar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Factura",
  props: {
    productos: {
      type: Array,
      required: true,
    },
  },
  computed: {
    subtotal() {
      return this.productos.reduce((sum, prod) => sum + prod.total, 0);
    },
    impuesto() {
      return (this.subtotal * 0.15).toFixed(2);
    },
    total() {
      return (parseFloat(this.subtotal) + parseFloat(this.impuesto)).toFixed(2);
    },
  },
  watch: {
    productos: {
      handler(newValue) {
        console.log('Productos en factura:', newValue);
      },
      immediate: true,
    }
  },
  methods: {
    procesarFactura() {
      alert("Factura procesada con éxito!");
    },
  },
};
</script>


<style scoped>
.factura-container {
  font-family: Arial, sans-serif;
  margin: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  max-width: 800px;
  margin-left: 250px;
  color: black;
}

.header {
  display: flex;
  justify-content: space-evenly;
}

.info, .factura-info {
  width: 48%;
}

.info, .cliente-info {
    display: flex;
  flex-direction: column;
  align-items: flex-start
}

.busqueda {
    display: flex;
    column-gap: 15px;
}

.factura-info {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.productos table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.productos table th, .productos table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

.totales {
  text-align: right;
  margin-top: 20px;
}

button {
  background-color: #6200ee;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #3700b3;
}

.input-factura {
    width: 32%;
    border-radius: 5px;
    border: none;
    border: 1px solid rgb(50, 50, 50);
}

.footer-factura {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.btn-aceptar-factura {
    border-radius: 5px;
    color: white;
}
</style>
