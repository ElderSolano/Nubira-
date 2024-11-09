<template>

    <!-- Button trigger modal -->
<div class="contenedor-btn container-fluid">
    <div></div>
    <div></div>
    <button type="button" class="btn" style="background-color: #6a0dad; color: white;" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Añadir {{  }}
    </button>
</div>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Nuevo {{  }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="mb-3" v-for="(dato, index) in inputs" :key="index">
            <label for="formGroupExampleInput" class="form-label">{{ dato }}</label>
            <input type="text" class="form-control" id="formGroupExampleInput" :placeholder="'Escribe el ' + dato">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-primary">Guardar</button>
      </div>
    </div>
  </div>
</div>
</template>

<style>
    .contenedor-btn {
        display: flex;
        justify-content: flex-end;
    }
    .btn {
        background-color:  #6a0dad;
        color: white;
    }
</style>

<script>
    export default {
        props : {
            inputs :{
                type: Array, 
                required: true
            }
        }
    }
</script>