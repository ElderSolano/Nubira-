<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Ficha Inventario</th>
                    <th>Nombre producto</th>
                    <th>Cantidad</th>
                    <th>Precio compra</th>
                    <th>Total a pagar</th>
                    <th>Lote</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(producto, index) in productos" :key="index">
                    <td>{{ producto.id }}</td>
                    <td>{{ producto.producto.nombre_producto }}</td>
                    <td> {{ producto.cantidad }} </td>
                    <td> L. {{ producto.precio_compra }} </td>
                    <td> L. {{ producto.cantidad * producto.precio_compra }} </td>
                    <td> {{ producto.lote }} </td>
                    <td> {{ producto.fecha_vencimiento }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router';

import axios from 'axios';

export default {
    name: "FichasProductos",
    props: ['id'],  // Recibimos el "id" de la URL
    data() {
        return {
            productos: [],  // Lista de productos
            message: '',  // Mensaje de la respuesta del backend
            fichaId: this.id  // Guardamos el id de la ficha de inventario
        };
    },
    methods: {
        async fetchProductos() {
            
            const router = useRoute()
            const PRODUCTO_ID = ref(router.params.id)

            try {
                const response = await axios.get(`http://localhost:8000/api/ficha-producto-inventario/${PRODUCTO_ID.value}`);
                if (response.data.codigoResultado === 1) {
                    this.productos = response.data.data;  // Asignamos los productos
                    this.message = response.data.message;  // Asignamos el mensaje
                    console.log(this.productos);
                } else {
                    this.message = 'No se encontraron productos para esta ficha de inventario.';
                }
            } catch (error) {
                console.error("Error al obtener productos:", error);
                this.message = 'Hubo un error al cargar los productos.';
            }
        }
    },
    mounted() {
        this.fetchProductos();  // Llamamos a la función al montar el componente
    }
};
</script>

<style scoped>
.productos-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.producto-card {
    width: 200px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.producto-card h5 {
    font-size: 1.2rem;
    font-weight: bold;
}

.producto-card p {
    font-size: 1rem;
    color: #555;
}

.message {
    font-size: 1.1rem;
    font-weight: bold;
    color: green;
    margin-bottom: 20px;
}

*{
    color: black;
}
</style>