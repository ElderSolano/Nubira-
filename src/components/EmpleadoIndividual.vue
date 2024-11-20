<template>
    <div class="container-fluid col-10" style="margin-left: 250px; margin-top: 150px;">

      <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
        <div class="row gx-4">
          <div class="col-auto">
            <div class="avatar avatar-xl position-relative">
              <img
                src="@/assets/img/bruce-mars.jpg"
                alt="profile_image"
                class="shadow-sm w-100 border-radius-lg"
              />
            </div>
          </div>
          <div class="col-auto my-auto">
            <div class="h-100">
              <h5 class="mb-1"> {{ employeeDetails["Primer Nombre"] }} {{ employeeDetails["Primer Apellido"] }} </h5>
              <p class="mb-0 text-sm font-weight-bold"> {{ employeeDetails["Puesto"] }} </p>
            </div>
          </div>
          <div
            class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
          >
          </div>
        </div>
      </div>
    </div>
    <!--Valores-->
    <li class="nav-item">
      <a
        class="px-0 py-1 mb-0 nav-link"
        data-bs-toggle="tab"
        href="javascript:;"
        role="tab"
        aria-selected="false"
      >
        <svg
          class="text-dark"
          width="16px"
          height="16px"
          viewBox="0 0 40 40"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <title>Editar Empleado</title>
          <g
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              transform="translate(-2020.000000, -442.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <g transform="translate(1716.000000, 291.000000)">
                <g transform="translate(304.000000, 151.000000)">
                  <polygon
                    class="color-background"
                    opacity="0.596981957"
                    points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                  ></polygon>
                  <path
                    class="color-background"
                    d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                    opacity="0.596981957"
                  ></path>
                  <path
                    class="color-background"
                    d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </a>
      <button class="btn-editar-empleado" data-bs-toggle="modal" data-bs-target="#editarEmpleado">Editar Empleado</button>
    </li>
    
    <div class="profile-card overflow-hidden card card-body blur shadow-blur">
  <div class="profile-card-header">
    <h2>Perfil del empleado</h2>
  </div>
  <div class="profile-card-body">
        <div v-for="(value, key) in employeeDetails" :key="key" class="profile-detail">
          <span class="detail-label"> {{ key }} </span>
          <span class="detail-value"> {{ value }} </span>
        </div>
      </div>
</div>

<!-- Modal -->
<div class="modal fade" id="editarEmpleado" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Registro de empleado {{ employeeDetails["Primer Nombre"] }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form @submit.prevent="">
        <div class="mb-3" v-for="(value, key) in employeeDetails" :key="key">
          <label for="formGroupExampleInput" class="form-label">{{  key }}</label>
          <input v-if="key !== Puesto && key !== Estado" 
          type="text" 
          class="form-control" 
          id="formGroupExampleInput" 
          v-model="employeeDetails[key]"
          :placeholder="'Escribe el ' + key">
          <select v-else class="form-select" :id="key" v-model="employeeDetails[key]">
            <option v-for="option in options[key]" :key="option.value" :value="option.value">{{ option.text }}</option>
          </select>
        </div>
        
      </form>
        
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>

</template>
  
<script>
  //import SoftSwitch from "@/components/SoftSwitch.vue";
  //import ProfileInfoCard from "./components/ProfileInfoCard.vue";
  //import SoftAvatar from "@/components/SoftAvatar.vue";
  import sophie from "@/assets/img/kal-visuals-square.jpg";
  import marie from "@/assets/img/marie.jpg";
  import ivana from "@/assets/img/ivana-square.jpg";
  import peterson from "@/assets/img/team-4.jpg";
  import nick from "@/assets/img/team-3.jpg";
  import img1 from "@/assets/img/home-decor-1.jpg";
  import img2 from "@/assets/img/home-decor-2.jpg";
  import img3 from "@/assets/img/home-decor-3.jpg";
  import team1 from "@/assets/img/team-1.jpg";
  import team2 from "@/assets/img/team-2.jpg";
  import team3 from "@/assets/img/team-3.jpg";
  import team4 from "@/assets/img/team-4.jpg";
  import {
    faFacebook,
    faTwitter,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
  //import DefaultProjectCard from "@/views/components/DefaultProjectCard.vue";
  //import PlaceHolderCard from "@/examples/Cards/PlaceHolderCard.vue";
  //import setNavPills from "@/assets/js/nav-pills.js";
  //import setTooltip from "@/assets/js/tooltip.js";

  import axios from "axios";
  export default {
    name: "EmpleadoIndividual",
    components: {
      
    },
    data() {
      return {
        showMenu: false,
        sophie,
        marie,
        ivana,
        peterson,
        nick,
        img1,
        team1,
        team2,
        team3,
        team4,
        img2,
        img3,
        faFacebook,
        faTwitter,
        faInstagram,
        employeeDetails: [],
    options: {
        Puesto: [
          { value: "RR.HH", text: "RR.HH" },
          { value: "Ventas", text: "Ventas" },
          { value: "Desarrollo", text: "Desarrollo" },
        ],
        Estado: [
          { value: "Activo", text: "Activo" },
          { value: "Inactivo", text: "Inactivo" },
        ],
      },
      }
    },
  
    methods: {
    async fetchEmployeeDetails() {
      try {
        const response = await axios.get(
          "https://b13e-181-115-60-115.ngrok-free.app/api/empleados"
        );
        // Supongamos que la API devuelve un array de empleados, tomamos el primero para mostrar:
        if (response.data && response.data.length > 0) {
          this.employeeDetails = response.data[0];
        } else {
          console.warn("No se encontraron empleados.");
        }
      } catch (error) {
        console.error("Error al obtener los empleados:", error);
      }
    },
  },
  mounted() {
    this.fetchEmployeeDetails();
  },
  };
</script>
  
  <style scoped>
.profile-card {
  max-width: 800px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
}

.profile-card-header {
  text-align: center;
  margin-bottom: 20px;
}

.profile-card-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
}

.profile-detail {
  display: flex;
  justify-content: space-between;
}

.detail-label {
  font-weight: bold;
  color: #555;
}

.detail-value {
  color: #333;
}

.btn-editar-empleado {
  background-color: #6a0dad;
  border: none;
  padding: 7px;
  color: white;
  border-radius: 5px
}
</style>