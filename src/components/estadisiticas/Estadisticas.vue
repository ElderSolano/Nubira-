<template>
  <h3>Estadísticas del Mercadito</h3>
  <div class="estadisticas-container">

    <!-- Gráfico de barras: Ventas por mes -->
    <div class="contenedor-grafico">
      <h3>Ventas por mes</h3>
      <BarChart :chart-data="ventasPorMes" class="grafico" />
    </div>

    <!-- Gráfico de pastel: Categorías de productos -->
    <div class="contenedor-grafico">
      <h3>Distribución de categorías de productos</h3>
      <PieChart :chart-data="categoriasProductos" />
    </div>

    <!-- Gráfico de líneas: Empleados -->
    <div class="contenedor-grafico">
      <h3>Rendimiento de empleados</h3>
      <LineChart :chart-data="rendimientoEmpleados" />
    </div>

    <div>
      <h2>Ventas por Producto</h2>
      <BarChart :chart-data="chartData" />
    </div>

    <div>
      <h2>Top 3 Productos Más Vendidos</h2>
      <BarChart :chart-data="chartData2" :options="chartOptions" />
    </div>

  </div>
</template>

<script>
import { defineComponent, onMounted, ref, reactive } from "vue";
import BarChart from "./BarChart.vue";
import PieChart from "./PieChart.vue";
import LineChart from "./LineChart.vue";
import axios from "axios";

export default defineComponent({
  components: {
    BarChart,
    PieChart,
    LineChart,
  },
  setup() {
    const ventasPorMes = ref({
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
      datasets: [
        {
          label: "Ventas (Lempiras)",
          data: [15000, 20000, 18000, 22000, 25000],
          backgroundColor: "rgba(75, 192, 192, 0.6)",
        },
      ],
    });

    const categoriasProductos = ref({
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe", "#ffce56"],
        },
      ],
    });

    const rendimientoEmpleados = ref({
      labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
      datasets: [
        {
          label: "Empleado 1",
          data: [12, 15, 10, 20],
          borderColor: "#ff6384",
          fill: false,
        },
        {
          label: "Empleado 2",
          data: [10, 20, 25, 22],
          borderColor: "#36a2eb",
          fill: false,
        },
      ],
    });

    const fetchCategoriasProductos = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/cantidad-productos-categoria");
        const data = response.data;

        // Mapea los datos al formato del gráfico
        categoriasProductos.value.labels = data.slice(0, 10).map((item) => item.categoria);
        categoriasProductos.value.datasets[0].data = data.slice(0, 10).map((item) => item.cantidad);

      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    // Llama a la función dentro de onMounted
    onMounted(() => {
      fetchCategoriasProductos();
      fetchVentas();
      fetchTopProductos();
    });

    const chartData = ref({
      labels: [], // Los productos
      datasets: [
        {
          label: "Ventas Totales",
          data: [], // Las cantidades de ventas por producto
          backgroundColor: "rgba(75, 192, 192, 0.6)", // Color de las barras
        },
      ],
    });

    const chartData2 = reactive({
      labels: [], // Nombres de los productos
      datasets: [
        {
          label: 'Cantidad Vendida',
          data: [], // Cantidades vendidas de los productos
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    });

    const chartOptions = reactive({
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Top 3 Productos Más Vendidos'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    });

    // Función para obtener los datos de la API
    const fetchTopProductos = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/detalle-ventas/3-productos-mas-vendidos');
        const data = await response.json();
        console.log(data);

        // Asignar los datos al gráfico
        chartData2.labels = data.map(product => product.producto.nombre_producto); // Obtener los nombres de los productos
        chartData2.datasets[0].data = data.map(product => parseInt(product.total_vendido)); // Obtener las cantidades vendidas y convertirlas a número

        console.log('Datos del gráfico:', chartData2);
      } catch (error) {
        console.error('Error al obtener los productos más vendidos:', error);
      }
    };

    const fetchVentas = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/ventas"); // Suponiendo que tienes una API en este endpoint
        const ventas = response.data;

        // Procesamos los datos para obtener las ventas por producto
        const ventasPorProducto = {};

        ventas.forEach((venta) => {
          venta.detalles.forEach((detalle) => {
            const producto = detalle.producto;
            const cantidad = parseFloat(detalle.cantidad);

            if (ventasPorProducto[producto]) {
              ventasPorProducto[producto] += cantidad; // Acumula la cantidad de productos
            } else {
              ventasPorProducto[producto] = cantidad;
            }
          });
        });

        // Prepara los datos para el gráfico
        chartData.value.labels = Object.keys(ventasPorProducto); // Los productos
        chartData.value.datasets[0].data = Object.values(ventasPorProducto); // Las cantidades totales de cada producto
      } catch (error) {
        console.error("Error al cargar los datos:", error);
      }
    };

    return {
      ventasPorMes,
      categoriasProductos,
      rendimientoEmpleados,
      chartData,
      chartData2,
      chartOptions
    };
  },
});
</script>

<style scoped></style>
