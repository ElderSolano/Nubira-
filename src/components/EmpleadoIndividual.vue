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
              <h5 class="mb-1">Alec Thompson</h5>
              <p class="mb-0 text-sm font-weight-bold">CEO / Co-Founder</p>
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
      <EditarEmpleado class="align-middle text-center text-sm"></EditarEmpleado>
    </li>
    
    <div class="profile-card overflow-hidden card card-body blur shadow-blur">
  <div class="profile-card-header">
    <h2>Perfil del empleado</h2>
  </div>
  <div class="profile-card-body">
    <div class="profile-detail">
      <span class="detail-label">DNI:</span>
      <span class="detail-value">0801200311111</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Primer Nombre:</span>
      <span class="detail-value">Juan</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Segundo Nombre:</span>
      <span class="detail-value">Carlos</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Primer Apellido:</span>
      <span class="detail-value">Pérez</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Segundo Apellido:</span>
      <span class="detail-value">Martínez</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Puesto:</span>
      <span class="detail-value">RR.HH</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Dirección:</span>
      <span class="detail-value">Av. Central 123</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Correo:</span>
      <span class="detail-value">juancachofa@email.com</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Estado:</span>
      <span class="detail-value">Activo</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Teléfono:</span>
      <span class="detail-value">9988-7766</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Fecha de Nacimiento:</span>
      <span class="detail-value">2003-09-08</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">Fecha de Ingreso:</span>
      <span class="detail-value">2015-12-12</span>
    </div>
    <div class="profile-detail">
      <span class="detail-label">RTN:</span>
      <span class="detail-value">08011960111111</span>
    </div>
  </div>
</div>


  
</template>
  
  <script>
  //import SoftSwitch from "@/components/SoftSwitch.vue";
  //import ProfileInfoCard from "./components/ProfileInfoCard.vue";
  //import SoftAvatar from "@/components/SoftAvatar.vue";
  import EditarEmpleado from "./EditarEmpleado.vue";
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
  import setNavPills from "@/assets/js/nav-pills.js";
  import setTooltip from "@/assets/js/tooltip.js";
  
  export default {
    name: "EmpleadoIndividual",
    components: {
      //SoftSwitch,
      //ProfileInfoCard,
      //SoftAvatar,
      //DefaultProjectCard,
      //PlaceHolderCard,
      EditarEmpleado
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
      }
    },
  
    mounted() {
      this.$store.state.isAbsolute = true;
      setNavPills();
      setTooltip(this.$store.state.bootstrap);
    },
    beforeUnmount() {
      this.$store.state.isAbsolute = false;
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
</style>