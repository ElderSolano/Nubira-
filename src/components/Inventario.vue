<template class="container-inventario">
    <div class="container-botones">
        <Buscador class="buscador"></Buscador>
        <BtnCrear></BtnCrear>
    </div>
    <h6>Inventario de productos</h6>
    <div class="py-4 container-fluid espaciado col-10" style="margin-left: 250px;">
        <div class="row">
            <div class="col-12">
                Aquí van los productos
            </div>
        </div>
    </div>
</template>

<style>
    .container-inventario {
        padding: 20px;
    }

    .container-botones {
        display: flex;
        margin-right: 5%;
    }
</style>

<!--Separacion-->

<script>

import BtnCrear from "@/views/components/btnCrear.vue";
import Buscador from "./Buscador.vue";

export default {
    data(){
        return{
            name : "Inventario"
        }
    },
    components: {
        BtnCrear,
        Buscador
    }
    }
</script>