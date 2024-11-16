<template>
  <footer class="py-3">
    <div class="container">
      <div class="row text-center">
        <div class="col-12">
          © {{ new Date().getFullYear() }}, Hecho con ❤️ por Elder, Esdras y Elmer
        </div>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: "app-footer",
};
</script>

<style scoped>

footer {
  margin-top: 100px;
}

.footer {
  background-color: #f8f9fa; /* Fondo claro */
}
.footer a {
  text-decoration: none;
}
.footer a:hover {
  text-decoration: underline; /* Subrayar en hover */
}
</style>
