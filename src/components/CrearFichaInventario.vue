<template>
    <div class="modal-body">
        <form @submit.prevent="crearFicha">
            <!-- Selección del Proveedor -->
            <div class="mb-3">
                <label for="proveedor" class="form-label">Proveedor</label>
                <select class="form-control" id="proveedor" v-model="ficha.id_proveedor" required
                    placeholder="Selecciona un proveedor">
                    <option value="" disabled selected>Selecciona un proveedor</option>
                    <option v-for="proveedor in proveedores" :key="proveedor.id" :value="proveedor.id">
                        {{ proveedor.nombre_proveedor }}
                    </option>
                </select>
            </div>

            <!-- Selección del Tipo de Movimiento -->
            <div class="mb-3">
                <label for="tipoMovimiento" class="form-label">Tipo de Movimiento</label>
                <select class="form-control" id="tipoMovimiento" v-model="ficha.tipoMovimiento" required>
                    <option value="pedido">Pedido</option>
                    <option value="compra_directa">Compra Directa</option>
                    <option value="devolucion">Devolución</option>
                </select>
            </div>

            <!-- Selección del Estado de la Ficha -->
            <div class="mb-3">
                <label for="estado" class="form-label">Estado de la Ficha</label>
                <select class="form-control" id="estado" v-model="ficha.estado" required>
                    <option value="pendiente">Pendiente</option>
                    <option value="procesado">Procesado</option>
                    <option value="rechazado">Rechazado</option>
                </select>
            </div>

            <!-- Fecha del Pedido (Fecha Actual por Defecto) -->
            !-- Fecha del Pedido (Fecha Actual por Defecto) -->
            <div class="mb-3">
                <label for="fechaPedido" class="form-label">Fecha de Pedido</label>
                <input type="date" class="form-control" id="fechaPedido" v-model="ficha.fechaPedido" :min="fechaActual"
                    required />
            </div>

            <!-- Fecha Esperada -->
            <div class="mb-3">
                <label for="fechaEsperada" class="form-label">Fecha Esperada</label>
                <input type="date" class="form-control" id="fechaEsperada" v-model="ficha.fechaEsperada" required />
            </div>

            <!-- Comentarios -->
            <div class="mb-3">
                <label for="comentarios" class="form-label">Comentarios</label>
                <textarea class="form-control" id="comentarios" v-model="ficha.comentarios" rows="3"></textarea>
            </div>

            <!-- Botones -->
            <div class="d-flex justify-content-end">
                <router-link to="/mantenimiento/inventario/fichasinventario">
                    <button type="button" class="btn btn-secondary me-2">Regresar</button>
                </router-link>
                <router-link :to="{ path: '/crear-ficha-producto', query: { idProveedor: ficha.id_proveedor } }">
                    <button type="submit" class="btn btn-primary">Crear Ficha</button>
                </router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
    name: 'CrearFichaInventario',
    props: {
        cerrarModal: {
            type: Function,
            required: true,
        },
    },
    setup(props) {
        // Estado de la ficha
        const ficha = ref({
            id_proveedor: null,
            tipoMovimiento: 'pedido', // valor predeterminado
            estado: 'pendiente', // valor predeterminado
            fechaPedido: '',
            fechaEsperada: '',
            comentarios: '',
        });

        // Estado para proveedores
        const proveedores = ref([]);

        // Obtener la fecha actual en formato YYYY-MM-DD
        const fechaActual = new Date().toISOString().split('T')[0];

        // Función para obtener los proveedores desde el backend
        const obtenerProveedores = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/proveedores');
                proveedores.value = response.data; // Suponiendo que los proveedores vienen en response.data
            } catch (error) {
                console.error('Error al obtener proveedores:', error);
            }
        };

        // Llamar a la función al montar el componente
        onMounted(() => {
            obtenerProveedores();
        });

        // Función para crear la ficha
        const crearFicha = async () => {
            console.log('Ficha creada:', ficha.value);
            props.cerrarModal(); // Cierra el modal al crear la ficha

            // Emitir evento de que la ficha fue creada
            if (props.fichaCreada) {
                props.fichaCreada();
            }
        };

        return {
            ficha,
            proveedores,
            fechaActual,
            crearFicha,
        };
    },
};
</script>
