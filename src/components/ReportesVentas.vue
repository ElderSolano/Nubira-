<template>
    <div>
        <h2>Ventas Realizadas</h2>

        <div class="contenedor-de-ventas" >
            <div v-for="venta in ventas" :key="venta.id" class="venta">
            <div>
                <h3>Venta ID: {{ venta.id }}</h3>
                <p><strong>Fecha de Venta:</strong> {{ venta.fecha_venta }}</p>
                <p><strong>Subtotal:</strong> {{ venta.subtotal }}</p>
                <p><strong>ISV:</strong> {{ venta.isv }}</p>
                <p><strong>Descuento:</strong> {{ venta.descuento }}</p>
                <p><strong>Total:</strong> {{ venta.total }}</p>
            </div>
            <div>
                <h4>Detalles de la Venta:</h4>
                <div v-for="detalle in venta.detalles" :key="detalle.id" class="detalle">
                    <p><strong>Producto ID:</strong> {{ detalle.producto_id }}</p>
                    <p><strong>Cantidad:</strong> {{ detalle.cantidad }}</p>
                    <p><strong>Precio Unitario:</strong> {{ detalle.precio_unitario }}</p>
                    <p><strong>Subtotal:</strong> {{ detalle.subtotal }}</p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: "ReportesVentas",
    setup() {
        const ventas = ref([]);

        const obtenerVentasConDetalles = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/ventas-detalles');
                if (Array.isArray(response.data)) {
                    ventas.value = response.data;
                    console.log(ventas.value);
                } else {
                    console.error("Los datos no son un arreglo.");
                }
            } catch (error) {
                console.error("Error al obtener las ventas:", error);
            }
        };

        onMounted(() => {
            obtenerVentasConDetalles();
        });

        return {
            ventas
        };
    }
};
</script>

<style scoped>
.venta {
    width: 400px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 10px;
}

.contenedor-de-ventas {
    display: flex;
    flex-wrap: wrap;
    column-gap: 30px;
    justify-content: center;
    align-items: center;
}

.detalle {
    margin-top: 10px;
    padding: 5px;
    background-color: #f9f9f9;
}

h3,
h4 {
    margin-bottom: 10px;
}

p {
    margin: 5px 0;
}
</style>