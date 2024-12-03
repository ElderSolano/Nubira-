<template>
    <p>Fichas Inventario</p>
    <!-- Botón para abrir el modal de creación de ficha -->
    <!-- Botón que redirige al componente CrearFichaInventario -->
    <router-link to="/crear-ficha">
        <button class="btn btn-primary">Crear Ficha Inventario</button>
    </router-link>
    <MDBTabs v-model="activeTabId1">
        <!-- Tabs navs -->
        <MDBTabNav tabsClasses="mb-3">
            <MDBTabItem tabId="ex1-1" href="ex1-1">Fichas pendientes</MDBTabItem>
            <MDBTabItem tabId="ex1-2" href="ex1-2">Fichas recibidas</MDBTabItem>
            <MDBTabItem tabId="ex1-3" href="ex1-3">Fichas procesadas</MDBTabItem>
        </MDBTabNav>
        <!-- Tabs navs -->
        <!-- Tabs content -->
        <MDBTabContent>
            <MDBTabPane tabId="ex1-1">
                <div class="tarjeta-container">
                    <MDBCard v-for="ficha in fichas.filter(f => (f.estado === 'pendiente' || f.estado === 'rechazado'))"
                        :key="ficha.id" text="center" class="tarjeta">
                        <MDBCardBody>
                            <MDBCardTitle class="tarjeta-titulo">Proveedor: {{ ficha.proveedor.nombre_proveedor }}
                            </MDBCardTitle>
                            <MDBCardText>
                                <p><strong>Tipo de movimiento:</strong> {{ ficha.tipo_movimiento }}</p>
                                <p><strong>Fecha de pedido:</strong> {{ ficha.fecha_pedido }}</p>
                                <p><strong>Fecha de recepción:</strong> {{ ficha.fecha_recepcion }}</p>
                                <p><strong>Comentarios:</strong> {{ ficha.comentarios }}</p>
                                <p><strong>Estado actual:</strong> <span class="estado pendiente">{{ ficha.estado
                                        }}</span></p>
                            </MDBCardText>
                            <button color="primary" class="boton-estado" data-bs-toggle="modal"
                                data-bs-target="#estadoModal" @click="fichaSeleccionada = ficha.id">
                                Cambiar estado
                            </button>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <MDBCardFooter class="text-muted">
                                <button class="boton-estilizado" @click="goToFichasProductos(ficha.id)">Ver
                                    productos</button>
                            </MDBCardFooter>
                        </MDBCardFooter>
                    </MDBCard>
                </div>
            </MDBTabPane>
            <MDBTabPane tabId="ex1-2">
                <div class="tarjeta-container">
                    <MDBCard v-for="ficha in fichas.filter(f => f.estado === 'recibido')" :key="ficha.id" text="center"
                        class="tarjeta">
                        <MDBCardBody>
                            <MDBCardTitle class="tarjeta-titulo">Proveedor: {{ ficha.proveedor.nombre_proveedor }}
                            </MDBCardTitle>
                            <MDBCardText>
                                <p><strong>Tipo de movimiento:</strong> {{ ficha.tipo_movimiento }}</p>
                                <p><strong>Fecha de pedido:</strong> {{ ficha.fecha_pedido }}</p>
                                <p><strong>Fecha de recepción:</strong> {{ ficha.fecha_recepcion }}</p>
                                <p><strong>Comentarios:</strong> {{ ficha.comentarios }}</p>
                                <p><strong>Estado actual:</strong> <span class="estado estado-recibida">Recibida</span>
                                </p>
                            </MDBCardText>
                            <MDBBtn tag="a" href="#!" color="primary" class="boton-estado">Cambiar estado</MDBBtn>
                        </MDBCardBody>

                    </MDBCard>
                </div>
            </MDBTabPane>
            <MDBTabPane tabId="ex1-3">
                <div class="tarjeta-container">
                    <MDBCard v-for="ficha in fichas.filter(f => f.estado === 'procesado')" :key="ficha.id" text="center"
                        class="tarjeta">
                        <MDBCardBody>
                            <MDBCardTitle class="tarjeta-titulo">Proveedor: {{ ficha.proveedor.nombre_proveedor }}
                            </MDBCardTitle>
                            <MDBCardText>
                                <p><Strong>Id: {{ ficha.id }}</Strong></p>
                                <p><strong>Tipo de movimiento:</strong> {{ ficha.tipo_movimiento }}</p>
                                <p><strong>Fecha de pedido:</strong> {{ ficha.fecha_pedido }}</p>
                                <p><strong>Fecha de recepción:</strong> {{ ficha.fecha_recepcion }}</p>
                                <p><strong>Comentarios:</strong> {{ ficha.comentarios }}</p>
                                <p><strong>Estado actual:</strong> <span
                                        class="estado estado-procesada">Procesada</span></p>
                            </MDBCardText>
                            <MDBBtn tag="a" href="#!" color="primary" class="boton-estado">Cambiar estado</MDBBtn>
                        </MDBCardBody>
                        <MDBCardFooter class="text-muted">
                            <button class="boton-estilizado" @click="goToFichasProductos(ficha.id)">Ver
                                productos</button>
                        </MDBCardFooter>
                    </MDBCard>
                </div>
            </MDBTabPane>
        </MDBTabContent>
        <!-- Tabs content -->
    </MDBTabs>

    <!-- Modal -->
    <div class="modal fade" id="estadoModal" tabindex="-1" aria-labelledby="estadoModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="estadoModalLabel">Cambio de estado de ficha</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="productosCorrectos" class="form-label">¿Productos correctos?</label>
                            <select v-model="form.productos_correctos" class="form-select" id="productosCorrectos">
                                <option :value="true">Sí</option>
                                <option :value="false">No</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="cantidadCorrecta" class="form-label">¿Cantidad correcta?</label>
                            <select v-model="form.cantidad_correcta" class="form-select" id="cantidadCorrecta">
                                <option :value="true">Sí</option>
                                <option :value="false">No</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="productosDañados" class="form-label">¿Hay productos dañados?</label>
                            <select v-model="form.productos_dañados" class="form-select" id="productosDañados">
                                <option :value="true">Sí</option>
                                <option :value="false">No</option>
                            </select>
                        </div>
                    </form>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button class="guardarCambios btn" @click="guardarCambios(fichaSeleccionada)">Cambiar
                        estado</button>

                </div>
            </div>
        </div>
    </div>

    <!-- Modal de Creación de Ficha -->
    <!-- Modal -->
    <div v-if="mostrarModal" class="modal fade" id="crearFicha" tabindex="-1" aria-labelledby="estadoModalLabel"
        aria-hidden="true" @click.self="cerrarModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <!-- Aquí puedes incluir el título del modal si es necesario -->
                <div class="modal-header">
                    <h5 class="modal-title" id="estadoModalLabel">Crear Ficha de Inventario</h5>
                    <button type="button" class="btn-close" @click="cerrarModal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- Aquí va el componente CrearFichaInventario -->
                    <CrearFichaInventario @fichaCreada="actualizarFichas" @cerrarModal="cerrarModal" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import CrearFichaInventario from "./CrearFichaInventario.vue";

import {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBCardFooter,
} from "mdb-vue-ui-kit";

import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
    name: "FichasInventario",
    components: {
        MDBTabs,
        MDBTabNav,
        MDBTabContent,
        MDBTabItem,
        MDBTabPane,
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBBtn,
        MDBCardFooter,
        CrearFichaInventario
    },
    setup() {

        const fichaSeleccionada = ref(null); // Cambio aquí
        const activeTabId1 = ref("ex1-1");
        const fichas = ref([]);
        const form = ref({
            productos_correctos: null,
            cantidad_correcta: null,
            productos_dañados: null,
        });
        const router = useRouter();

        // Navegar a la página de productos de una ficha
        const goToFichasProductos = (fichaId) => {
            const PATH = `/fichasProductos/${fichaId}`;
            router.push({ path: PATH });
        };

        // Función para cargar datos del backend
        const fetchFichas = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/fichas-inventario");
                fichas.value = response.data;
                console.log(fichas.value);
                console.log(response);
            } catch (error) {
                console.error("Error al obtener fichas:", error);
            }
        };

        // Función para guardar cambios en el estado de una ficha
        const guardarCambios = async (id) => {
            console.log("Form value", form.value)
            console.log("El id es: ", id)
            console.log("Cambiando estado para la ficha con id:", fichaSeleccionada);


            console.log("Form value segunda vez", form.value)
            try {
                const url = `http://localhost:8000/api/ficha-inventario-procesado/${id}`;
                const response = await axios.put(url, form.value);
                console.log(response)
                if (response.status === 200) {
                    alert("Estado de la ficha actualizado correctamente");
                    fetchFichas();
                } else {
                    alert("Hubo un problema al actualizar el estado");
                }
            } catch (error) {
                console.error("Error en la petición:", error);
                alert("Ocurrió un error al guardar los cambios");
            }
        };

        // Llamar a fetchFichas al montar el componente
        onMounted(() => {
            fetchFichas();
        });


        return {
            activeTabId1,
            fichas,
            form,
            goToFichasProductos,
            guardarCambios,
        };
    },
};
</script>


<style scoped>
.guardarCambios {
    background-color: rgb(90, 36, 234);
    color: white;
}

.enlace-footer {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    cursor: pointer;
}

.enlace-footer:hover {
    text-decoration: underline;
    color: #0056b3;
}

.tarjeta-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;

    row-gap: 20px;
    column-gap: 12px;
}

.tarjeta {
    width: 320px;
    border-radius: 12px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    background-color: #fff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tarjeta:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3);
}

.tarjeta-titulo {
    font-size: 1.5em;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
}

.tarjeta p {
    font-size: 0.95em;
    color: #666;
    margin: 8px 0;
}

.estado {
    font-weight: bold;
    padding: 5px 10px;
    border-radius: 5px;
}

.pendiente {
    background-color: #ff0000;
    color: #ffffff;
}

.estado-procesada {
    background-color: #22fb06;
    color: white;
}

.estado-recibida {
    background-color: #fb8d33;
    color: white;
}

.boton-estado {
    border: none;
    margin-top: 15px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 0.9em;
    text-transform: uppercase;
}

.boton-estado:hover {
    background-color: #0056b3;
}

.boton-estilizado {
    background-color: rgb(90, 36, 234);
    /* Color verde */
    border: none;
    color: white;
    /* Color del texto */
    padding: 12px 20px;
    /* Espaciado interno */
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 8px 0;
    /* Margen */
    border-radius: 8px;
    /* Bordes redondeados */
    cursor: pointer;
    /* Cambia el cursor a mano */
    transition: background-color 0.3s ease, transform 0.2s ease;
    /* Transiciones suaves */
}

.boton-estilizado:hover {
    background-color: #45a049;
    /* Color más oscuro al pasar el cursor */
    transform: scale(1.05);
    /* Hace el botón ligeramente más grande */
}

.boton-estilizado:active {
    background-color: #397d3b;
    /* Color más oscuro al hacer clic */
    transform: scale(0.95);
    /* Hace el botón más pequeño temporalmente */
}

.boton-estilizado:focus {
    outline: none;
    /* Elimina el borde de enfoque predeterminado */
    box-shadow: 0 0 5px #4CAF50;
    /* Agrega un resplandor al enfocarse */
}

.card-footer {
    padding: 0 !important;
    margin-bottom: 10px;
}
</style>