<!-- dede aqui es el codigo correcto -->


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
        <p><strong>Historial de Ventas</strong></p>
        <p>Fecha: {{ new Date().toLocaleDateString() }}</p>
      </div>
    </div>

    <div class="ventas">
      <table>
        <thead>
          <tr>
            <th>ID Venta</th>
            <th>Fecha</th>
            <th>Empleado</th>
            <th>Subtotal</th>
            <th>ISV</th>
            <th>Descuento</th>
            <th>Total</th>
            <th>Detalles</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="venta in ventas" :key="venta.id">
            <td>{{ venta.id }}</td>
            <td>{{ venta.fecha_venta }}</td>
            <td>{{ venta.id_empleado || 'Sin Asignar' }}</td>
            <td>L. {{ venta.subtotal }}</td>
            <td>L. {{ venta.isv }}</td>
            <td>L. {{ venta.descuento }}</td>
            <td>L. {{ venta.total }}</td>
            <td>
              <button
                @click="verDetalles(venta)"
                class="btn-detalles"
                data-bs-toggle="modal"
                data-bs-target="#modalDetalles"
              >
                Ver Detalles
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    
    <div
      class="modal fade"
      id="modalDetalles"
      tabindex="-1"
      aria-labelledby="modalDetallesLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalDetallesLabel">Detalles de la Venta</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <h6><strong>ID Venta:</strong> {{ detalleActual.id }}</h6>
            <h6><strong>Fecha:</strong> {{ detalleActual.fecha_venta }}</h6>
            <h6>
              <strong>Empleado:</strong> {{ detalleActual.id_empleado || 'Sin Asignar' }}
            </h6>
            <h6><strong>Subtotal:</strong> L. {{ detalleActual.subtotal }}</h6>
            <h6><strong>ISV:</strong> L. {{ detalleActual.isv }}</h6>
            <h6><strong>Descuento:</strong> L. {{ detalleActual.descuento }}</h6>
            <h6><strong>Total:</strong> L. {{ detalleActual.total }}</h6>
            <hr />
            <h6>Productos Vendidos</h6>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="detalle in detalleActual.detalles" :key="detalle.producto">
                  <td>{{ detalle.producto }}</td>
                  <td>{{ detalle.cantidad }}</td>
                  <td>L. {{ detalle.precio_unitario }}</td>
                  <td>L. {{ detalle.subtotal }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "VentasHistorial",
  data() {
    return {
      ventas: [], // Lista de ventas
      detalleActual: {}, // Detalles de la venta seleccionada
    };
  },
  created() {
    this.obtenerVentas();
  },
  methods: {
    async obtenerVentas() {
      try {
        const response = await axios.get("http://127.0.0.1:8001/api/ventas");
        this.ventas = response.data;
      } catch (error) {
        console.error("Error al obtener ventas:", error);
      }
    },
    verDetalles(venta) {
      this.detalleActual = venta; // Asignar los detalles de la venta seleccionada
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

.info,
.factura-info {
  width: 48%;
}

.ventas table,
.detalles table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.ventas table th,
.ventas table td,
.detalles table th,
.detalles table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

button {
  background-color: #6200ee;
  color: white;
  padding: 5px;
  border: none;
  cursor: pointer;
  border-radius: 3px;
}

button:hover {
  background-color: #3700b3;
}

.modal-body table {
  width: 100%;
  border-collapse: collapse;
}

.modal-body table th,
.modal-body table td {
  border: 1px solid #ccc;
  padding: 8px;
}
</style>


<!-- hasta aqui es el codigo correcto -->