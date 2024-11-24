<template>
    <br>
    <div class="container-fluid" id="contenedor-mantenimiento">
      <div class="row mt-3 justify-content-center">
        <!-- Lista de tarjetas -->
        <div
          v-for="card in cards"
          :key="card.title"
          class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
        >
          <router-link v-if="card.route" :to="{ name: card.route }" class="card-link">
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
  
  <script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Mi Info",
          description: "Accede a tu perfil personal para gestionar tus datos y configuraciones.",
          image: require("../assets/images/acceso.png"),
          route: "Profile",
        },
        {
          title: "Mi Empresa",
          description: "Gestiona los datos de tu empresa y controla todos los aspectos relevantes.",
          image: require("../assets/images/mercado.png"),
        },
        {
          title: "Categorías",
          description: "Administra las categorías de productos y organiza tu inventario de manera eficiente.",
          image: require("../assets/images/diseno-de-producto.png"),
          route: "Categorias",
        },
        {
          title: "Productos",
          description: "Gestiona todos los productos que ofreces y sus detalles importantes.",
          image: require("../assets/images/mercado (1).png"),
          route: "Productos",
        },
        {
          title: "Usuarios",
          description: "Administra la lista de usuarios, crea los usuarios y sus roles dentro del sistema.",
          image: require("../assets/images/usuario.png"),
        },
        {
          title: "Empleados",
          description: "Gestiona la información de los empleados de tu empresa y sus asignaciones.",
          image: require("../assets/images/demandante-de-empleo.png"),
          route: "Empleados",
        },
        {
          title: "Proveedores",
          description: "Administra, crea, modifica y contacta a tus proveedores con facilidad.",
          image: require("../assets/images/negocio.png"),
          route: "Proveedores",
        },
        {
          title: "Permisos",
          description: "Gestiona los permisos de acceso para diferentes usuarios en el sistema.",
          image: require("../assets/images/configuracion.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
#contenedor-mantenimiento {
  
  padding-top: 0px;
  overflow-x: hidden;
}

.row {
  row-gap: 40px; /* Espacio entre filas */
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

@media (max-width: 768px) {
  .col-12 {
    margin-bottom: 15px;
  }
}
</style>
