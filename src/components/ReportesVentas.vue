<template>
    <div>
        <h2>Ventas Realizadas</h2>
        <div class="contenedor-de-ventas">
            <div v-for="venta in ventas" :key="venta.id" class="venta">
                <h3>Venta #: {{ venta.id }}</h3>
                <p><strong>Fecha:</strong> {{ venta.fecha_venta }}</p>
                <p><strong>Subtotal:</strong> {{ venta.subtotal }}</p>
                <p><strong>ISV:</strong> {{ venta.isv }}</p>
                <p><strong>Descuento:</strong> {{ venta.descuento }}</p>
                <p><strong>Total:</strong> {{ venta.total }}</p>

                <h4>Detalles de la Venta:</h4>
                <div v-for="detalle in venta.detalles" :key="detalle.id" class="detalle">
                    <p><strong>Producto:</strong> {{ detalle.producto.nombre_producto }}</p>
                    <p><strong>Cantidad:</strong> {{ detalle.cantidad }}</p>
                    <p><strong>Precio Unitario:</strong> {{ detalle.precio_unitario }}</p>
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
                    console.log("Las ventas son:", ventas.value);
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
    border: 2px solid rgb(90, 36, 234);
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: white;
    color: rgb(90, 36, 234);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.venta:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
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
    padding: 10px;
    background-color: rgb(90, 36, 234, 0.1);
    border-radius: 8px;
    border: 1px solid rgb(90, 36, 234);
    color: rgb(90, 36, 234);
}

h3, h4 {
    margin-bottom: 10px;
    color: rgb(90, 36, 234);
    text-align: center;
}

h2 {
    text-align: center;
    color: rgb(90, 36, 234);
    margin-bottom: 20px;
    font-size: 2em;
    font-weight: bold;
}

p {
    margin: 5px 0;
    font-size: 1em;
}

p strong {
    color: rgb(90, 36, 234);
}
</style>
