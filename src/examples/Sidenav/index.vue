<template>
  <aside
  class="my-3 overflow-auto border-0 sidenav navbar-vertical navbar-expand-xs border-radius-xl ms-3"
  id="sidenav-main"
>

    <div class="sidenav-header">
      <i
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a class="m-0 navbar-brand" href="/">
        <img :src="logo" class="navbar-brand-img h-200" alt="main_logo" />
        <span class="ms-1 font-weight-bold">Nubira E</span>
      </a>
    </div>
    <hr class="mt-0 horizontal dark" />
    <sidenav-list :cardBg="customClass" />
  </aside>
</template>

<script>
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/images/logo_sin_nombre.png";
import { mapState } from "vuex";

export default {
  name: "index",
  components: {
    SidenavList,
  },
  data() {
    return {
      logo,
    };
  },
  props: {
    customClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapState(["isRTL"]),
  },
};
</script>

<style scoped>
/* Estilo adicional para evitar que se sobreponga al contenido */
body {
  margin-left: 250px; /* Ajusta este valor según el ancho de tu sidenav */
}
</style>
