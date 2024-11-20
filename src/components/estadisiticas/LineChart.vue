<template>
    <div class="container-grafico">
      <canvas ref="canvas"></canvas>
    </div>
  </template>
  
  <script>
  import { defineComponent, onMounted, ref } from "vue";
  import { Chart } from "chart.js/auto";
  
  export default defineComponent({
    props: {
      chartData: {
        type: Object,
        required: true,
      },
    },
    setup(props) {
      const canvas = ref(null);
  
      onMounted(() => {
        new Chart(canvas.value, {
          type: "line",
          data: props.chartData,
          options: {
            responsive: true,
          },
        });
      });
  
      return { canvas };
    },
  });
  </script>

<style>
    .container-grafico {
        margin-left: 250px;
        margin-right: 100px;
    }
</style>