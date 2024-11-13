<template>
  <!--Aqui se encuentran todas las tarjetas-->
  <div id="dashboard-principal"  class="py-4 container-fluid col-9">
    <div class="row mt-3">
      

    </div>
    <div class="row mt-3" id="Tarjetas-1">
      <!--Tarjeta Gastos del mes-->
      <div class="col-lg mb-lg-0 mb-4">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex flex-column h-100">
                  <p class="mb-1 pt-2 text-bold">Gastos del mes</p>
                  <h5 class="font-weight-bolder">Finanzas</h5>
                  <p class="mb-5">
                    En esta sección, podrás llevar un control detallado de tus gastos mensuales.
                  </p>
                  <a
                    class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                    href="javascript:;"
                  >
                    Vamos
                    <i
                      class="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                <div class="border-radius-lg h-100">
                  
                  <div
                    class="position-relative d-flex align-items-center justify-content-center h-100"
                  >
                    <img
                      class="w-100 position-relative z-index-2 pt-4"
                      src="../assets/images/Finanzas.jpg"
                      alt="rocket"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!--Tarjeta Inventario-->
      <div class="col-lg mb-lg-0 mb-4">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex flex-column h-100">
                  <p class="mb-1 pt-2 text-bold">Inventario</p>
                  <h5 class="font-weight-bolder">Administración</h5>
                  <p class="mb-5">
                    En esta sección, podrás gestionar y llevar un control completo de tu inventario.
                  </p>
                  <a
                    class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                    href="javascript:;"
                  >
                    Vamos
                    <i
                      class="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                <div class=" border-radius-lg h-100">
                  <img
                    src="../assets/images/inventary.jpg"
                    class="position-absolute h-100 w-50 top-0 d-lg-block d-none"
                    alt="waves"
                  />
                  <div
                    class="position-relative d-flex align-items-center justify-content-center h-100"
                  >
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-3" id="Tarjetas-2">
      <div class="col-lg">
        
        <!-- line chart -->
        <!--Tarjeta Mantenimiento-->
      <router-link :to="{name:'Mantenimiento'}">  
      <div class="col-lg mb-lg-0 mb-4">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex flex-column h-100">
                  <p class="mb-1 pt-2 text-bold">Mantenimiento</p>
                  <h5 class="font-weight-bolder">Servicios</h5>
                  <p class="mb-5">
                    Gestiona tus productos, empleados, proveedores y más
                  </p>
                  <a
                    class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                    href="javascript:;"
                  >
                    Vamos
                    <i
                      class="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                <div class="border-radius-lg h-100">
                  <img
                    src="../assets/img/shapes/waves-white.svg"
                    class="position-absolute h-100 w-50 top-0 d-lg-block d-none"
                    alt="waves"
                  />
                  <div
                    class="position-relative d-flex align-items-center justify-content-center h-100"
                  >
                    <img
                      class="w-100 position-relative z-index-2 pt-4"
                      src="../assets/images/mantenimiento.jpg"
                      alt="rocket"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </router-link>
      </div>

      <div class="col-lg">
        
        <!-- line chart -->
        <!--Tarjeta Mantenimiento-->
      <div class="col-lg mb-lg-0 mb-4">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex flex-column h-100">
                  <p class="mb-1 pt-2 text-bold">Reportes</p>
                  <h5 class="font-weight-bolder">Análisis</h5>
                  <p class="mb-5">
                    reportes detallados para analizar el rendimiento y hacer un seguimiento de las métricas clave de tu negocio.
                  </p>
                  <a
                    class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                    href="javascript:;"
                  >
                    Vamos
                    <i
                      class="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-5 ms-auto text-center mt-5 mt-lg-0">
                <div class="border-radius-lg h-100">
                  <img
                    src="../assets/img/shapes/waves-white.svg"
                    class="position-absolute h-100 w-50 top-0 d-lg-block d-none"
                    alt="waves"
                  />
                  <div
                    class="position-relative d-flex align-items-center justify-content-center h-100"
                  >
                    <img
                      class="w-100 position-relative z-index-2 pt-4"
                      src="../assets/images/reportes.jpg"
                      alt="rocket"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

  
  </div>


    <div class="row my-4">
      <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
        <projects-card />
      </div>
      <div class="col-lg-4 col-md-6">
        <timeline-list
          class="h-100"
          title="Orders overview"
          description="<i class='fa fa-arrow-up text-success' aria-hidden='true'></i>
        <span class='font-weight-bold'>24%</span> this month"
        >
          <timeline-item
            color="success"
            icon="bell-55"
            title="$2400 Design changes"
            date-time="22 DEC 7:20 PM"
          />
          <TimelineItem
            color="danger"
            icon="html5"
            title="New order #1832412"
            date-time="21 DEC 11 PM"
          />
          <TimelineItem
            color="info"
            icon="cart"
            title="Server payments for April"
            date-time="21 DEC 9:34 PM"
          />
          <TimelineItem
            color="warning"
            icon="credit-card"
            title="New card added for order #4395133"
            date-time="20 DEC 2:20 AM"
          />
          <TimelineItem
            color="primary"
            icon="key-25"
            title="Unlock packages for development"
            date-time="18 DEC 4:54 AM"
          />
          <TimelineItem
            color="info"
            icon="check-bold"
            title="Notifications unread"
            date-time="15 DEC"
          />
        </timeline-list>
        <button @click="handleLogout" class="btn-logout">Cerrar Sesión</button>
      </div>
    </div>
</template>

<script>
//import MiniStatisticsCard from "@/examples/Cards/MiniStatisticsCard.vue";
//import ReportsBarChart from "@/examples/Charts/ReportsBarChart.vue";
//import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import TimelineList from "./components/TimelineList.vue";
import TimelineItem from "./components/TimelineItem.vue";
import ProjectsCard from "./components/ProjectsCard.vue";
import US from "../assets/img/icons/flags/US.png";
import DE from "../assets/img/icons/flags/DE.png";
import GB from "../assets/img/icons/flags/GB.png";
import BR from "../assets/img/icons/flags/BR.png";
import {
  faHandPointer,
  faUsers,
  faCreditCard,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
export default {
  name: "dashboard-default",
  methods: {
    async handleLogout() {
      try {
        const response = await fetch('https://eb1d-181-115-60-195.ngrok-free.app/api/logout', {
          method: 'GET', // Cambiado a GET, asegúrate de que sea el método correcto
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Usa el token guardado
          },
        });

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
          console.log('Cierre de sesión exitoso');
          localStorage.removeItem('authToken'); // Elimina el token
          this.$router.push({ name: 'Login' }); // Redirige al login
        } else {
          // Si no es exitosa, verificamos el tipo de contenido antes de parsear JSON
          const contentType = response.headers.get("content-type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            console.error('Error al cerrar sesión:', data.message);
          } else {
            console.error('Error al cerrar sesión: Respuesta no es JSON');
          }
        }
      } catch (error) {
        console.error('Error en la solicitud de cierre de sesión:', error);
      }
    },
  },
  data() {
    return {
      iconBackground: "bg-gradient-success",
      faCreditCard,
      faScrewdriverWrench,
      faUsers,
      faHandPointer,
      sales: {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      },
    };
  },
  components: {
    //MiniStatisticsCard,
    //ReportsBarChart,
    //GradientLineChart,
    ProjectsCard,
    TimelineList,
    TimelineItem,
  },
};
</script>

<style>
  #dashboard-principal {
    margin-left: 250px; /* Ajusta este valor al ancho de tu Sidenav */
    transition: margin-left 0.3s; /* Transición suave */
    row-gap: 20px;
  }

  .color-tarjeta {
    background: linear-gradient(87deg, #6a0dad 0%, #6a2eda 100%);
  }

</style>