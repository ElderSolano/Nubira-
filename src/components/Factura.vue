<template>
  <div class="factura-container">
    <div class="factura" ref="facturaRef">
      <!-- Encabezado -->
      <header>
        <h1>NubiraƎ</h1>
        <p>RTN: 0801-1234-5678</p>
        <p>Ubicación: Tegucigalpa, Honduras</p>
        <p>Teléfono: +504 9876-5432</p>
        <p>Email: soporte@nubirae.com</p>
      </header>
      <hr />

      <!-- Información de la factura -->
      <section class="factura-info">
        <p><strong>Fecha y hora:</strong> {{ fechaHora }}</p>
        <p><strong>Número de factura:</strong> {{ numeroFactura }}</p>
        <p><strong>Rango de numeración:</strong> {{ rangoNumeracion }}</p>
        <p><strong>CAI:</strong> {{ cai }}</p>
        <p><strong>Cliente:</strong> {{ cliente }}</p>
        <p><strong>RTN del cliente:</strong> {{ rtnCliente }}</p>
      </section>
      <hr />

      <!-- Detalle de factura -->
      <section class="detalle-factura">
        <h3>Detalle de la factura</h3>
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
            <tr v-for="(producto, index) in productos" :key="index">
              <td>{{ producto.nombre }}</td>
              <td>{{ producto.cantidad }}</td>
              <td>L {{ producto.precioUnitario.toFixed(2) }}</td>
              <td>L {{ (producto.cantidad * producto.precioUnitario).toFixed(2) }}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <hr />

      <!-- Totales -->
      <section class="totales">
        <p><strong>Total:</strong> L {{ total.toFixed(2) }}</p>
        <p><strong>ISV (15%):</strong> L {{ isv.toFixed(2) }}</p>
        <p><strong>Efectivo recibido:</strong> L {{ efectivoRecibido.toFixed(2) }}</p>
        <p><strong>Cambio:</strong> L {{ cambio.toFixed(2) }}</p>
      </section>
      <hr />

      <!-- Pie de página -->
      <footer>
        <p>¡Gracias por tu compra!</p>
      </footer>
    </div>

    <!-- Botones para imprimir y guardar -->
    <div class="actions">
      <button @click="imprimirFactura(facturaRef)" class="btn-imprimir">Imprimir Factura</button>
      <button @click="guardarFactura(facturaRef)" class="btn-guardar">Guardar Factura</button>
    </div>
  </div>
</template>


<script>
import { ref, computed } from "vue";
import { useRoute } from 'vue-router';
export default {
  name: "Factura",
  setup() {
    const route = useRoute();

    // Asegúrate de que `data` esté disponible en `query`
    const data = JSON.parse(route.query.data);  // Aquí se analiza correctamente la cadena JSON
    /**
     * la información se ve así:
     * {
     * productos: Array(1), 
     * subtotal: 250, 
     * isv: 37.5, 
     * descuento: 0, 
     * total: 287.5}
        descuento: 0
        isv: 37.5
        productos: Array(1)0
        : 
        cantidad: 1
        id_producto: 2
        nombre: "COCa Cola 2 Litros"
        precio: 250
        [[Prototype]]
        : 
        Object
        length
        : 
        1
        [[Prototype]]
        : 
        Array(0)
        subtotal: 250
        total: 287.5
     */
    console.log(data);

    const fechaHora = ref(new Date().toLocaleString());
    const numeroFactura = ref("001-001-000001");
    const rangoNumeracion = ref("001-001-000001 a 001-001-999999");
    const cai = ref("123456-CAI-78910");
    const cliente = ref("Juan Pérez");
    const rtnCliente = ref("0801-9876-5432");
    const efectivoRecibido = ref(data.efectivo);

    const productos = ref(data.productos)

    //const productos = ref([
    //  { nombre: "Producto A", cantidad: 2, precioUnitario: 150.0 },
    //  { nombre: "Producto B", cantidad: 1, precioUnitario: 200.0 },
    //  { nombre: "Producto C", cantidad: 3, precioUnitario: 100.0 },
    //]);

    // Computed properties
    const total = computed(() =>
      productos.value.reduce(
        (sum, producto) => sum + producto.cantidad * producto.precioUnitario,
        0
      )
    );

    const isv = computed(() => total.value * 0.15); // ISV del 15%
    const cambio = computed(() => efectivoRecibido.value - (total.value + isv.value));

    // Métodos
    const imprimirFactura = (facturaRef) => {
      const printContent = facturaRef.value;
      const printWindow = window.open("", "_blank");
      printWindow.document.write(
        "<html><head><title>Factura</title><style>body{ margin:0; }</style></head><body>"
      );
      printWindow.document.write(printContent.outerHTML);
      printWindow.document.write("</body></html>");
      printWindow.document.close();
      printWindow.print();
    };

    const guardarFactura = (facturaRef) => {
      const content = facturaRef.value.outerHTML; // Extraer el contenido de la factura
      const blob = new Blob([content], { type: "text/html" }); // Crear un archivo HTML
      const url = URL.createObjectURL(blob);

      // Crear un enlace para descargar el archivo
      const link = document.createElement("a");
      link.href = url;
      link.download = `Factura_${numeroFactura.value}.html`; // Nombre del archivo
      link.click();

      // Liberar el objeto URL
      URL.revokeObjectURL(url);
    };

    // Referencia para el contenido de la factura
    const facturaRef = ref(null);

    return {
      fechaHora,
      numeroFactura,
      rangoNumeracion,
      cai,
      cliente,
      rtnCliente,
      efectivoRecibido,
      productos,
      total,
      isv,
      cambio,
      imprimirFactura,
      guardarFactura,
      facturaRef,
    };
  },
};
</script>


<style scoped>
/* Mantengo tus estilos originales */
.factura-container {
  padding: 20px;
  font-family: "Nunito", sans-serif;
  max-width: 800px;
  margin: 0 auto;
}

.factura {
  border: 1px solid #ccc;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

header h1 {
  text-align: center;
  margin: 0;
  font-size: 24px;
  color: #5a24ea;
}

header p {
  text-align: center;
  margin: 5px 0;
  font-size: 14px;
}

.factura-info p,
.totales p {
  font-size: 14px;
  margin: 5px 0;
}

.detalle-factura h3 {
  text-align: center;
  margin-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table th,
table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
  font-size: 14px;
}

table th {
  background-color: #5a24ea;
  color: white;
}

footer p {
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
}

.btn-imprimir,
.btn-guardar {
  display: inline-block;
  margin: 20px 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.btn-imprimir {
  background-color: #5a24ea;
  color: white;
}

.btn-imprimir:hover {
  background-color: #4820c7;
}

.btn-guardar {
  background-color: #4caf50;
  color: white;
}

.btn-guardar:hover {
  background-color: #45a049;
}

/* Estilos específicos para impresión */
@media print {
  body {
    margin: 0;
    padding: 0;
  }

  .factura-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .factura {
    width: 300px;
    padding: 10px;
    margin: 0 auto;
    box-shadow: none;
    border: none;
  }

  .btn-imprimir,
  .btn-guardar {
    display: none;
  }
}
</style>
