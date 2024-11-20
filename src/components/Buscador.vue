<template>
    <div class="container contenedor-buscador">
      <div class="row justify-content-center">
        <div class="col-4 col-md-8 col-lg-12">
          <input
            type="text"
            v-model="searchQuery"
            :placeholder="placeholder"
            class="form-control"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchInput",
    props: {
      placeholder: {
        type: String,
        default: "Buscar...",
      },
    },
    data() {
      return {
        searchQuery: "",
      };
    },
    watch: {
      searchQuery(newQuery) {
        // Emitimos un evento cada vez que el texto cambia
        this.$emit("update:search", newQuery);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilo opcional para bordes redondeados */
  input {
    border-radius: 8px;
  }

  .contenedor-buscador {
    display: flex;
    justify-content: flex-end;
  }
  </style>
  