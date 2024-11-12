<template>

    <!-- Button trigger modal -->

    <p class="editar"
     data-bs-toggle="modal" data-bs-target="#editarEmpleado">
        Editar {{  }}
    </p>


<!-- Modal -->
<div class="modal fade" id="editarEmpleado" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Registro de empleado {{  }}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="mb-3" >
            <label for="formGroupExampleInput" class="form-label">DNI</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Escribe el DNI">
        </div>
        <div class="mb-3" >
            <label for="formGroupExampleInput" class="form-label">Primer Nombre</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Primer Nombre del empleado">
        </div>
        <div class="mb-3" >
            <label for="formGroupExampleInput" class="form-label">Segundo Nombre</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Segundo Nombre del empleado">
        </div>
        <div class="mb-3" >
            <label for="formGroupExampleInput" class="form-label">Primer Apellido</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Primer Apellido del empleado">
        </div>
        <div class="mb-3" >
            <label for="formGroupExampleInput" class="form-label">Segundo Apellido</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Segundo Apellido del empleado">
        </div>
        <div class="mb-3">
            <label for="selectExample" class="form-label">Puesto del empleado</label>
            <select class="form-select" id="selectExample">
                <option selected>Selecciona una opción</option>
                <option value="1">Opción 1</option>
                <option value="2">Opción 2</option>
                <option value="3">Opción 3</option>
            </select>
        </div>
        <div class="mb-3" >
            <label for="formGroupExampleInput" class="form-label">Dirección</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Dirección del empleado">
        </div>
        <div class="mb-3" >
            <label for="formGroupExampleInput" class="form-label">Correo</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Correo del empleado">
        </div>
        <div class="mb-3">
            <label for="selectExample" class="form-label">Estado</label>
            <select class="form-select" id="selectExample">
                <option selected>Selecciona una opción</option>
                <option value="0">Inactivo</option>
                <option value="1">Activo</option>
            </select>
        </div>
        <div class="mb-3" >
            <label for="formGroupExampleInput" class="form-label">Teléfono</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Teléfono del empleado">
        </div>
        <div class="mb-3">
            <label for="birthDate" class="form-label">Fecha de Nacimiento</label>
            <input type="date" class="form-control" id="birthDate">
        </div>
        <div class="mb-3">
            <label for="birthDate" class="form-label">Fecha de Ingreso</label>
            <input type="date" class="form-control" id="birthDate">
        </div>
        <div class="mb-3" >
            <label for="formGroupExampleInput" class="form-label">RTN</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="RTN del empleado">
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
    .editar {
        cursor: pointer;
    }
</style>

<script>

    export default {
        name : "EditarEmpleado",
        props : {
            inputs :{
                type: Array, 
                required: true
            }
        }
    }
</script>