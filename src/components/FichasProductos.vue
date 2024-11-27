<template>
    <p>Fichas productos</p>
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
                <MDBCard text="center tarjetas">
                    <MDBCardBody>
                        <MDBCardTitle>Producto: Coca Cola</MDBCardTitle>
                        <MDBCardText>
                            <p>Cantidad pedida: 20</p>
                            <p>Precio compra: L. 570</p>
                            <p>Lote: L123</p>
                            <p>Total a pagar: L. 1000</p>
                            <p>Estado actual: <button>Pendiente</button></p>
                        </MDBCardText>
                        <MDBBtn tag="a" href="#!" color="primary">Cambiar estado</MDBBtn>
                    </MDBCardBody>
                    <MDBCardFooter class="text-muted">Fecha pedido: 3 junio 2024</MDBCardFooter>
                </MDBCard>
            </MDBTabPane>
            <MDBTabPane tabId="ex1-2">Content #2</MDBTabPane>
            <MDBTabPane tabId="ex1-3">Content #3</MDBTabPane>
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
} from 'mdb-vue-ui-kit';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-vue-ui-kit";

import { ref } from 'vue';

export default {
    name: "FichasProductos",
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
        MDBBtn
    },
    setup() {
        const activeTabId1 = ref('ex1-1');

        return {
            activeTabId1,
        };
    },
};
</script>

<style scoped>

.tarjetas {
    width: 25em;
    box-shadow: 0 20px 27px 0 rgb(0 0 0 / 15%);;
}

.container-fichas-productos {}

* {
    color: black;
}
</style>