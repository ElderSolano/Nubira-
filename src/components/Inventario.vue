<template class="container-inventario">
    <div class="container-botones">
        <Buscador class="buscador"></Buscador>
        <BtnCrear></BtnCrear>
    </div>
    <h6>Inventario de productos</h6>
    <div class="py-4 container-fluid espaciado col-10" style="margin-left: 250px;">
        <div class="row">
            <div v-for="card in cards" :key="card.title"
                class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch">
                <router-link v-if="card.route" :to="card.route" class="card-link">
                    <div class="card card-hover">
                        <div class="card-img-container">
                            <img class="card-img" :src="card.image" :alt="card.title" />
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title">{{ card.title }}</h5>
                            <p class="card-text">{{ card.description }}</p>
                            <button class="btn btn-primary btn-sm">Ver más</button>
                        </div>
                    </div>
                </router-link>
            <div v-else class="card card-hover">
                    <div class="card-img-container">
                        <img class="card-img" :src="card.image" :alt="card.title" />
                    </div>
                    <div class="card-body text-center">
                        <h5 class="card-title">{{ card.title }}</h5>
                        <p class="card-text">{{ card.description }}</p>
                        <button class="btn btn-primary btn-sm">Ver más</button>
                    </div>
                </div>
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

.row {
    row-gap: 40px;
    /* Espacio entre filas */
}


.card-hover {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.card-hover:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.card-img-container {
    position: relative;
    height: 150px;
    width: 100%;
    overflow: hidden;
    border-radius: 10px;
}

.card-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
}

.card-body {
    padding: 15px;
}

.card-title {
    font-size: 1.1rem;
    font-weight: bold;
    color: #333;
}

.card-text {
    font-size: 0.9rem;
    color: #777;
    margin-bottom: 15px;
}

.btn-primary {
    background-color: rgb(90, 36, 234);
    border: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-primary:hover {
    background-color: rgb(245, 47, 0);
    transform: scale(1.05);
}

.card-link {
    text-decoration: none;
    color: inherit;
}

*{
    font-family: 'nunito';
}
</style>

<!--Separacion-->

<script>

import BtnCrear from "@/views/components/btnCrear.vue";
import Buscador from "./Buscador.vue";

export default {
    data() {
        return {
            name: "Inventario",
            cards: [
                {
                    title: "Fichas de inventario",
                    description: "Administra las fichas de inventario de tus productos y controla su stock",
                    image: require("../assets/images/Ficha inventario.jpg"),
                    route: "/mantenimiento/inventario/fichasinventario",
                },
            ]
        }
    },
    components: {
        BtnCrear,
        Buscador
    }
}
</script>