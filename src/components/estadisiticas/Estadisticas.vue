<template>
  <div class="estadisticas-container">
    <h2>Estadísticas del Mercadito</h2>

    <!-- Gráfico de barras: Ventas por mes -->
    <div>
      <h3>Ventas por mes</h3>
      <BarChart :chart-data="ventasPorMes" />
    </div>

    <!-- Gráfico de pastel: Categorías de productos -->
    <div>
      <h3>Distribución de categorías de productos</h3>
      <PieChart :chart-data="categoriasProductos" />
    </div>

    <!-- Gráfico de líneas: Empleados -->
    <div>
      <h3>Rendimiento de empleados</h3>
      <LineChart :chart-data="rendimientoEmpleados" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import BarChart from "./BarChart.vue";
import PieChart from "./PieChart.vue";
import LineChart from "./LineChart.vue";

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
      labels: ["Bebidas", "Abarrotes", "Lácteos", "Limpieza"],
      datasets: [
        {
          data: [30, 50, 15, 5],
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

    return {
      ventasPorMes,
      categoriasProductos,
      rendimientoEmpleados,
    };
  },
});
</script>

<style scoped>
.estadisticas-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
