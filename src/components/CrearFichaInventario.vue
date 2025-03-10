<template>
    <div class="modal-body">
        <form @submit.prevent="">
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

            <!-- Fecha Dinámica -->
            <div class="mb-3">
                <label :for="fechaDinamicaId" class="form-label">{{ etiquetaFechaDinamica }}</label>
                <input type="date" class="form-control" :id="fechaDinamicaId" v-model="ficha.fechaPedido" :min="fechaActual"
                    required />
            </div>

            <!-- Fecha Esperada Dinámica -->
            <div class="mb-3">
                <label :for="fechaEsperadaId" class="form-label">{{ etiquetaFechaEsperada }}</label>
                <input type="date" class="form-control" :id="fechaEsperadaId" v-model="ficha.fechaEsperada" required />
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
                <button type="submit" class="btn btn-primary" :disabled="!camposCompletos"
                    @click="manejarCreacionFicha()">
                    Crear Ficha
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    name: 'CrearFichaInventario',
    setup() {
        const router = useRouter();

        const id_ficha_creada = ref(null);

        // Estado de la ficha
        const ficha = ref({
            id_proveedor: null,
            tipoMovimiento: '',
            estado: '',
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

        const manejarCreacionFicha = async () => {
            await crearFichaDeInventario();

            if (id_ficha_creada.value) {
                if (ficha.value.tipoMovimiento == 'devolucion') {
                    router.push({
                        path: '/crear-ficha-producto-devolucion',
                        query: {
                            idProveedor: ficha.value.id_proveedor,
                            id_ficha_creada: id_ficha_creada.value
                        }
                    });
                } else {
                    router.push({
                        path: '/crear-ficha-producto',
                        query: {
                            idProveedor: ficha.value.id_proveedor,
                            id_ficha_creada: id_ficha_creada.value
                        }
                    });
                }
            }
        };

        const crearFichaDeInventario = async () => {
            const cuerpoPeticion = {
                "proveedor_id": ficha.value.id_proveedor,
                "tipo_movimiento": ficha.value.tipoMovimiento,
                "estado": ficha.value.estado,
                "fecha_pedido": ficha.value.fechaPedido, //fecha de cuando llegó el pedido
                "fecha_recepcion": ficha.value.fechaEsperada, //sera fecha de devolucion
                "comentarios": ficha.value.comentarios
            };

            const url = `http://localhost:8000/api/fichas-inventario`;

            try {
                const response = await axios.post(url, cuerpoPeticion);
                id_ficha_creada.value = response.data.ficha.id;
            } catch (error) {
                if (error.response) {
                    console.error('Error de validación:', error.response.data); // Revisa qué campos fallaron
                } else {
                    console.error('Error desconocido:', error);
                }
            }
        };

        // Llamar a la función al montar el componente
        onMounted(() => {
            obtenerProveedores();
        });

        // Computed para etiquetas dinámicas
        const etiquetaFechaDinamica = computed(() => {
            return ficha.value.tipoMovimiento === 'devolucion'
                ? 'Fecha en que se hace la devolución'
                : 'Fecha de Pedido';
        });

        const etiquetaFechaEsperada = computed(() => {
            return ficha.value.tipoMovimiento === 'devolucion'
                ? 'Fecha máxima de devolución'
                : 'Fecha Esperada';
        });

        const fechaDinamicaId = computed(() => {
            return ficha.value.tipoMovimiento === 'devolucion' ? 'fechaDevolucion' : 'fechaPedido';
        });

        const fechaEsperadaId = computed(() => {
            return ficha.value.tipoMovimiento === 'devolucion' ? 'fechaMaximaDevolucion' : 'fechaEsperada';
        });

        // Computed para validar si todos los campos requeridos están llenos
        const camposCompletos = computed(() => {
            return (
                ficha.value.id_proveedor &&
                ficha.value.tipoMovimiento &&
                ficha.value.estado &&
                ficha.value.fechaPedido &&
                ficha.value.fechaEsperada
            );
        });

        return {
            ficha,
            proveedores,
            fechaActual,
            etiquetaFechaDinamica,
            etiquetaFechaEsperada,
            fechaDinamicaId,
            fechaEsperadaId,
            camposCompletos,
            crearFichaDeInventario,
            manejarCreacionFicha
        };
    },
};
</script>
