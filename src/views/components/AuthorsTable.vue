<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">DNI</th>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Nombre</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Puesto</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">#Teléfono</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Estado</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Editar</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <soft-avatar
                      :img="img5"
                      class="me-3"
                      size="sm"
                      border-radius="lg"
                      alt="user5"
                    />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">0801-2001-08527</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Elmer Noé Sosa</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Ing. Sistemas</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">9501-1087</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="secondary" variant="gradient" size="sm"
                  >Offline</soft-badge
                >
              </td>
                
              <td>
                <router-link :to="{name:'EmpleadoIndividual'}"
                class="align-middle text-center text-sm">Ver</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SoftBadge from "@/components/SoftBadge.vue";


export default {
  name: "authors-table",
  components: {
    SoftBadge,
    
  },
  data() {
    return {
      empleados: [], // Lista para almacenar los empleados
    };
  },
  methods: {
    async obtenerEmpleados() {
      try {
        const response = await axios.get("https://012c-181-115-60-195.ngrok-free.app/api/empleados");
        this.empleados = response.data;
        console.log(this.empleados)
      } catch (error) {
        console.error("Error al obtener empleados:", error);
      }
    },
  },
  created() {
    this.obtenerEmpleados();
  },
};
</script>