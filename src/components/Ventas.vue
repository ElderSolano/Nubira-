<template>
  <div class="venta-container">
    <header>
      <div class="title">Ventas</div>
      <div class="info">
        <span class="time">{{ currentTime }}</span>
      </div>
    </header>
    <div class="mb-5 nav-ventas-botones">
      <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn">Añadir Producto Nuevo
      </button>
      <label for="dinero">
        Efectivo del cliente:
        <input v-model="inputValue" type="text" placeholder="Digita el efectivo del cliente"
          class="input-para-ingresar-efectivo" id="dinero">
      </label>
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
      <div>
        <strong>Descuento Total (%):</strong>
        <input type="number" v-model="descuentoGlobal" min="0" max="100" placeholder="0"
          style="width: 80px; text-align: center" />
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

            <div v-if="productoEncontrado" class="border p-3 mt-3"
              style="color:black; display: flex; justify-content: space-around; flex-direction: column; overflow-y: scroll; max-height: 300px;">
              <div
                style="width: 100%; display: flex; justify-content: space-around; align-items: center; margin-bottom: 3px;">
                <p style="margin: 0!important;"><strong>{{ productoEncontrado.codigo }}</strong> </p>
                <p style="margin: 0!important;"> {{ productoEncontrado.nombre_producto }}</p>
                <p style="margin: 0!important;">{{ formatCurrency(productoEncontrado.precio_venta) }}</p>
                <button @click="añadirProducto" class="btn btn-primary" data-bs-dismiss="modal">
                  Añadir
                </button>
              </div>
              <hr />
            </div>
            <div v-else-if="searchQuery && !productoEncontrado" class="mt-3 text-danger">
              <p>No se encontró ningún producto.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, computed, watch, onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: "VentaComponent",
  setup() {

    //Valor del dinero ingresado para pagar.
    const inputValue = ref(null);

    const productos = ref([]); // Lista de productos en la tabla
    const searchQuery = ref(""); // Entrada del campo de búsqueda
    const productoEncontrado = ref(null); // Producto devuelto por la API
    const descuentoGlobal = ref(0); // Descuento total sobre el subtotal
    const currentTime = ref(""); // Hora actual
    const router = useRouter();
    // Computed properties
    const subtotal = computed(() => {
      return productos.value.reduce((total, producto) => total + producto.total, 0);
    });

    const impuesto = computed(() => {
      const subtotalConDescuento = subtotal.value * (1 - descuentoGlobal.value / 100);
      return subtotalConDescuento * 0.15; // Impuesto del 15%
    });

    const total = computed(() => {
      const subtotalConDescuento = subtotal.value * (1 - descuentoGlobal.value / 100);
      return subtotalConDescuento + impuesto.value;
    });

    // Métodos
    const updateTime = () => {
      const now = new Date();
      currentTime.value = now.toLocaleTimeString(); // Formato: HH:MM:SS AM/PM
    };

    const buscarProducto = async () => {
      if (searchQuery.value.trim() !== "") {
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/api/productos/${searchQuery.value}`
          );
          const data = response.data.data;

          productoEncontrado.value = {
            id: data.id,
            nombre_producto: data.nombre_producto,
            codigo: data.codigo,
            stock: parseInt(data.stock, 10) || 0,
            precio_venta: parseFloat(data.precio_venta) || 0,
          };
        } catch (error) {
          console.error("Error al buscar el producto:", error);
          productoEncontrado.value = null;
        }
      } else {
        productoEncontrado.value = null;
      }
    };

    const añadirProducto = () => {
      if (productoEncontrado.value) {
        const existe = productos.value.some(
          (producto) => producto.codigo === productoEncontrado.value.codigo
        );

        if (!existe) {
          productos.value.push({
            id: productoEncontrado.value.id,
            nombre: productoEncontrado.value.nombre_producto,
            codigo: productoEncontrado.value.codigo,
            stock: productoEncontrado.value.stock,
            cantidad: 0,
            precio: productoEncontrado.value.precio_venta,
            total: 0,
          });
        } else {
          alert("El producto ya está en la tabla.");
        }

        searchQuery.value = "";
        productoEncontrado.value = null;
      }
    };

    const pagar = async () => {

      if (Number(inputValue.value) < total.value) {
        alert("El efectivo ingresado es insuficiente. Por favor, verifica el monto.");
        return; // Detiene la ejecución del método si falta efectivo
      }

      console.log("Aqui pagamos");
      const productosConCantidad = productos.value.filter((producto) => producto.cantidad > 0);

      if (productosConCantidad.length > 0) {
        const data = {
          productos: productosConCantidad.map((producto) => ({
            id_producto: producto.id,
            cantidad: producto.cantidad,
            nombre: producto.nombre,
            precioUnitario: producto.precio
          })),
          subtotal: parseFloat(subtotal.value.toFixed(2)),
          isv: parseFloat(impuesto.value.toFixed(2)),
          descuento: parseFloat((subtotal.value * (descuentoGlobal.value / 100)).toFixed(2)),
          total: parseFloat(total.value.toFixed(2)),
          efectivo: Number(inputValue.value)
        };

        try {
          const response = await axios.post(`http://127.0.0.1:8000/api/ventas`, data);
          console.log("Venta registrada exitosamente:", response.data);

          productos.value = [];
          descuentoGlobal.value = 0;
          inputValue.value = null; // Reinicia el campo de efectivo
          alert("Venta registrada exitosamente.");
          console.log("La data a pasar es: ", data);
          router.push({
            path: '/factura',
            query: { data: JSON.stringify(data) }  // Asegúrate de pasar data como una cadena JSON
          });
        } catch (error) {
          console.error("Error al registrar la venta:", error.response?.data || error.message);
          alert("Ocurrió un error al registrar la venta.");
        }
      } else {
        alert("Por favor, agrega productos a la venta antes de continuar.");
      }
    };

    const formatCurrency = (value) => {
      if (isNaN(value) || value === null || value === undefined) {
        return "L. 0.00";
      }
      return `L. ${parseFloat(value).toFixed(2)}`;
    };

    // Watchers
    watch(productos, () => {
      productos.value.forEach((producto) => {
        producto.total = producto.cantidad * producto.precio;
      });
    }, { deep: true });

    // Mounted lifecycle hook
    onMounted(() => {
      updateTime();
      setInterval(updateTime, 1000); // Actualiza la hora cada segundo
    });

    // Retornar los valores para usarlos en el template
    return {
      productos,
      searchQuery,
      productoEncontrado,
      descuentoGlobal,
      currentTime,
      subtotal,
      impuesto,
      total,
      updateTime,
      buscarProducto,
      añadirProducto,
      pagar,
      formatCurrency,
      inputValue
    };
  },
};
</script>

<style scoped>
/* Estilos originales */
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
  background-color: rgb(90, 36, 234, 0.2);
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
  background-color: white;
}

.total-item {
  background-color: white;
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
  background-color: rgb(90, 36, 234);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s;
}

.btn:hover {
  background-color: rgba(245, 47, 0, 0.8);
  color: white;
}

input {
  text-align: center;
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
  background-color: rgb(90, 36, 234);
  color: white !important;
}

.table th {
  padding: 15px;
  text-transform: uppercase;
  font-weight: bold;
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
}

.input-para-ingresar-efectivo {
  width: 200px;
  padding: 5px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid black;
}

.p-table {
  color: white;
  margin: 0 !important;
}

.nav-ventas-botones {
  display: flex;
  justify-content: space-around;
}
</style>
