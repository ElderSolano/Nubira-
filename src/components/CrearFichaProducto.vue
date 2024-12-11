<template>
    <div class="container mt-4">
        <h2>Crear Ficha de Producto</h2>
        <form @submit.prevent="crearFicha">
            <!-- Botón para agregar nuevo producto -->
            <button type="button" class="btn btn-primary mb-3" @click="agregarProducto">Agregar Producto</button>

            <!-- Tabla de productos -->
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Compra</th>
                        <th>Lote</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(producto, index) in ficha.productos" :key="index">
                        <td>
                            <select class="form-select" v-model="producto.producto_id" @change="cargarPrecio(index)"
                                required>
                                <option value="" disabled>Seleccionar producto</option>
                                <option v-for="productoDisponible in productosProveedor" :key="productoDisponible.id"
                                    :value="productoDisponible.id">
                                    {{ productoDisponible.nombre_producto }}
                                </option>
                            </select>
                        </td>
                        <td><input type="number" class="form-control" v-model="producto.cantidad" min="1" required />
                        </td>
                        <td><input type="number" class="form-control" v-model="producto.precio_compra" readonly /></td>
                        <td><input type="text" class="form-control" v-model="producto.lote" required /></td>
                        <td><button type="button" class="btn btn-danger"
                                @click="eliminarProducto(index)">Eliminar</button></td>
                    </tr>
                </tbody>
            </table>

            <!-- Botón para enviar -->
            <button type="submit" class="btn btn-success">Crear Ficha</button>
        </form>
    </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
    name: "CrearFichaProducto",
    props: ["idProveedor", "id_ficha_creada"],
    setup(props) {
        const ficha = ref({
            ficha_inventario_id: props.id_ficha_creada,
            productos: [],
        });

        const productosProveedor = ref([]);

        const agregarProducto = () => {
            ficha.value.productos.push({
                producto_id: "",
                cantidad: 1,
                precio_compra: 0,
                lote: "",
                fecha_vencimiento: "",
            });
        };

        const eliminarProducto = (index) => {
            ficha.value.productos.splice(index, 1);
        };

        const cargarPrecio = (index) => {
            const productoSeleccionado = productosProveedor.value.find(
                (prod) => prod.id === ficha.value.productos[index].producto_id
            );
            ficha.value.productos[index].precio_compra = productoSeleccionado ? productoSeleccionado.precio_compra : 0;
        };

        //const camposCompletos = computed(() => {
        //    return (
        //        ficha.value.productos.length > 0 &&
        //        ficha.value.productos.every(
        //            (prod) =>
        //                prod.producto_id &&
        //                prod.cantidad > 0 &&
        //                prod.lote &&
        //                prod.fecha_vencimiento
        //        )
        //    );
        //});


        const crearFicha = async () => {
            try {
                const response = await axios.post("http://localhost:8000/api/ficha-producto", ficha.value);
                console.log(response)
                alert("Ficha de inventario creada exitosamente");
                ficha.value = { ficha_inventario_id: "", productos: [] };
            } catch (error) {
                alert("Error al crear la ficha");
            }
        };

        const obtenerProductosProveedor = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/productos/proveedor/${props.idProveedor}`);
                productosProveedor.value = response.data;
            } catch (error) {
                alert("Error al cargar productos");
            }
        };

        onMounted(() => {
            obtenerProductosProveedor();
        });

        return {
            ficha,
            productosProveedor,
            agregarProducto,
            eliminarProducto,
            cargarPrecio,
            crearFicha,
        };
    },
};
</script>

<style>
.container {
    max-width: 800px;
    margin: auto;
}

* {
    color: black;
}
</style>