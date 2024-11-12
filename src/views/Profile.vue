<template>
  <div class="container-fluid col-10" style="margin-left: 250px;">
    <div
      class="mt-4 page-header min-height-300 border-radius-xl"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/img/curved-images/curved14.jpg') + ')',
        backgroundPositionY: '50%',
      }"
    >
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
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
            <h5 class="mb-1"> {{ perfil["Nombre"] }} </h5>
            <p class="mb-0 text-sm font-weight-bold">CEO / Co-Founder</p>
          </div>
        </div>
        <div
          class="mx-auto mt-3 col-lg-4 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
        >
          <div class="nav-wrapper position-relative end-0">
            <ul
              class="p-1 bg-transparent nav nav-pills nav-fill"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  class="px-0 py-1 mb-0 nav-link"
                  data-bs-toggle="tab"
                  href="javascript:;"
                  role="tab"
                  aria-selected="false"
                >
                  <button class="ms-1 btn-editar-perfil">Editar Perfil</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="profile-card overflow-hidden card card-body blur shadow-blur">
    <div class="profile-card-header">
      <h2>Perfil del usuario</h2>
    </div>
    <div class="profile-card-body">
      <div class="profile-detail" v-for="(value, key) in perfil" :key="key">
        <span class="detail-label"> {{ key }} </span>
        <span class="detail-value"> {{ value }} </span>
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
//import DefaultProjectCard from "./components/DefaultProjectCard.vue";
//import PlaceHolderCard from "@/examples/Cards/PlaceHolderCard.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";

export default {
  name: "ProfileOverview",
  components: {
    //SoftSwitch,
    //ProfileInfoCard,
    //SoftAvatar,
    //DefaultProjectCard,
    //PlaceHolderCard,
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
      perfil: {
        "Nombre": "Elmer",
        "Apellido": "Sosa",
        "Identidad": "0801-2001-08527",
        "Estado": "Activo",
        "Puesto": "RR.HH",
        "Correo": "elmer.sosa@unah.hn",
        "Telefono": "9501-1087",
        "Fecha ingreso": "12/12/2015",
        "RTN": "0801-2001-085270"
      }
    };
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
  .btn-editar-perfil {
    background-color: white;
    color: rgb(65, 65, 174);
    border: none;
    padding: 8px;
    border-radius: 10px;
  }

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