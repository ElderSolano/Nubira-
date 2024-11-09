<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Lista de empleados</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                DNI
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Nombre
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Puesto
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                #Teléfono
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Estado
              </th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Editar
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
            
          </thead>
          <tbody>
            <tr>
              
              <td>
                <p class="text-xs font-weight-bold mb-0">0801-2001-08527</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Elmer Noé Sosa Torres</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Cajero</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">9501-1087</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >Activo</soft-badge
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Editar</a
                >
              </td>
              <td>
                <router-link :to="{ name: 'EmpleadoIndividual' }" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                  Ver
                </router-link>
              </td>
            </tr>

            <tr>
              <td>
                <p class="text-xs font-weight-bold mb-0">0801-2001-08527</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Elmer Noé Sosa Torres</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Cajero</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">9501-1087</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >Activo</soft-badge
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Editar</a
                >
              </td>
              <td>
                <router-link :to="{ name: 'EmpleadoIndividual' }" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                  Ver
                </router-link>
              </td>
            </tr>

            <tr>
              <td>
                <p class="text-xs font-weight-bold mb-0">0801-2001-08527</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Elmer Noé Sosa Torres</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Cajero</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">9501-1087</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >Activo</soft-badge
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Editar</a
                >
              </td>
              <td>
                <router-link :to="{ name: 'EmpleadoIndividual' }" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                  Ver
                </router-link>
              </td>
            </tr>

            <tr>
              <td>
                <p class="text-xs font-weight-bold mb-0">0801-2001-08527</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Elmer Noé Sosa Torres</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Cajero</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">9501-1087</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >Activo</soft-badge
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Editar</a
                >
              </td>
              <td>
                <router-link :to="{ name: 'EmpleadoIndividual' }" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                  Ver
                </router-link>
              </td>
            </tr>

            <tr>
              <td>
                <p class="text-xs font-weight-bold mb-0">0801-2001-08527</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Elmer Noé Sosa Torres</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Cajero</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">9501-1087</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >Activo</soft-badge
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Editar</a
                >
              </td>
              <td>
                <router-link :to="{ name: 'EmpleadoIndividual' }" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                  Ver
                </router-link>
              </td>
            </tr>

            <tr>
              <td>
                <p class="text-xs font-weight-bold mb-0">0801-2001-08527</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Elmer Noé Sosa Torres</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">Cajero</p>
              </td>
              <td>
                <p class="text-xs font-weight-bold mb-0">9501-1087</p>
              </td>
              <td class="align-middle text-center text-sm">
                <soft-badge color="success" variant="gradient" size="sm"
                  >Activo</soft-badge
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-secondary font-weight-bold text-xs"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Editar</a
                >
              </td>
              
              <td>
                <router-link :to="{ name: 'EmpleadoIndividual' }" class="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                  Ver
                </router-link>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
//import SoftAvatar from "@/components/SoftAvatar.vue";
import SoftBadge from "@/components/SoftBadge.vue";
import img1 from "../../assets/img/team-2.jpg";
import img2 from "../../assets/img/team-3.jpg";
import img3 from "../../assets/img/team-4.jpg";
import img4 from "../../assets/img/team-3.jpg";
import img5 from "../../assets/img/team-2.jpg";
import img6 from "../../assets/img/team-4.jpg";

export default {
  name: "authors-table",
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    };
  },
  components: {
    //SoftAvatar,
    SoftBadge
  },
};
</script>
