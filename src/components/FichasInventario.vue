<template>
    <p>Fichas Inventario</p>
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
                    <MDBCard v-for="ficha in fichas.filter(f => f.estado === 'pendiente')" :key="ficha.id" text="center"
                        class="tarjeta">
                        <MDBCardBody>
                            <MDBCardTitle class="tarjeta-titulo">Proveedor: {{ ficha.proveedor.nombre_proveedor }}
                            </MDBCardTitle>
                            <MDBCardText>
                                <p><strong>Tipo de movimiento:</strong> {{ ficha.tipo_movimiento }}</p>
                                <p><strong>Fecha de pedido:</strong> {{ ficha.fecha_pedido }}</p>
                                <p><strong>Fecha de recepción:</strong> {{ ficha.fecha_recepcion }}</p>
                                <p><strong>Comentarios:</strong> {{ ficha.comentarios }}</p>
                                <p><strong>Estado actual:</strong> <span class="estado pendiente">Pendiente</span></p>
                            </MDBCardText>
                            <MDBBtn tag="a" href="#!" color="primary" class="boton-estado">Cambiar estado</MDBBtn>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <router-link :to="{ name: 'FichasProductos', params: { fichaId: ficha.id } }"
                                class="enlace-footer">
                                Ver fichas de productos
                            </router-link>
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
                        <MDBCardFooter class="text-muted">
                            <router-link :to="{ name: 'FichaProductos', params: { fichaId: ficha.id } }"
                                class="enlace-footer">
                                Ver fichas de productos
                            </router-link>
                        </MDBCardFooter>
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
                            <router-link :to="{ name: 'FichaProductos', params: { fichaId: ficha.id } }"
                                class="enlace-footer">
                                Ver fichas de productos
                            </router-link>
                        </MDBCardFooter>
                    </MDBCard>
                </div>
            </MDBTabPane>
        </MDBTabContent>
        <!-- Tabs content -->
    </MDBTabs>
</template>

<script>
import {
    MDBTabs,
    MDBTabNav,
    MDBTabContent,
    MDBTabItem,
    MDBTabPane,
} from "mdb-vue-ui-kit";

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardFooter } from "mdb-vue-ui-kit";

import { ref, onMounted } from "vue";

import axios from 'axios';

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
        MDBCardFooter
    },
    setup() {
        const activeTabId1 = ref("ex1-1");
        const fichas = ref([]);

        // Función para cargar datos del backend
        const fetchFichas = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/fichas-inventario");
                fichas.value = response.data;
            } catch (error) {
                console.error("Error al obtener fichas:", error);
            }
        };

        // Llamar a fetchFichas al montar el componente
        onMounted(() => {
            fetchFichas();
        });

        // Retornar valores utilizados en la plantilla
        return {
            activeTabId1,
            fichas,
        };
    },
}
</script>

<style scoped>
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
</style>