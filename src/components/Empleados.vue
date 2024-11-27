<template>
    <div class="container-fluid espaciado col-12">
      <h2 class="text-center">Empleados</h2>
  
      <div class="d-flex justify-content-end mb-4">
        <button @click="nuevoEmpleado" class="btn btn-primary mb-3">
          Crear Empleado
        </button>
      </div>
  
      <!-- Tabla de empleados -->
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DNI</th>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Estado</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Fecha de Ingreso</th>
            <th>Usuario</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="empleado in empleados" :key="empleado.id">
            <td>{{ empleado.id }}</td>
            <td>{{ empleado.dni_empleado }}</td>
            <td>{{ empleado.primer_nombre }} {{ empleado.segundo_nombre }} {{ empleado.primer_apellido }} {{ empleado.segundo_apellido }}</td>
            <td>{{ empleado.puesto }}</td>
            <td>{{ empleado.estado ? 'Activo' : 'Inactivo' }}</td>
            <td>{{ empleado.telefono }}</td>
            <td>{{ empleado.email }}</td>
            <td>{{ empleado.fecha_ingreso }}</td>
            <td>{{ empleado.usuario }}</td>
            <td>
              <!-- Botón para editar un empleado -->
              <button @click="editarEmpleado(empleado)" class="btn btn-warning btn-sm">
                <i class="fas fa-edit"></i>
              </button>
  
              <!-- Botón para eliminar un empleado -->
              <button @click="confirmarEliminacion(empleado.id)" class="btn btn-danger btn-sm ml-2">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Modal de creación/edición de empleado -->
      <div v-if="mostrarModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ empleadoSeleccionado?.id ? 'Editar Empleado' : 'Crear Nuevo Empleado' }}</h5>
              <button type="button" class="close" @click="cerrarModal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="guardarEdicion">
                <div class="form-group">
                  <label for="dni_empleado">DNI</label>
                  <input type="text" class="form-control" id="dni_empleado" v-model="empleadoSeleccionado.dni_empleado" required>
                </div>
                <div class="form-group">
                  <label for="primer_nombre">Primer Nombre</label>
                  <input type="text" class="form-control" id="primer_nombre" v-model="empleadoSeleccionado.primer_nombre" required>
                </div>
                <div class="form-group">
                  <label for="segundo_nombre">Segundo Nombre</label>
                  <input type="text" class="form-control" id="segundo_nombre" v-model="empleadoSeleccionado.segundo_nombre">
                </div>
                <div class="form-group">
                  <label for="primer_apellido">Primer Apellido</label>
                  <input type="text" class="form-control" id="primer_apellido" v-model="empleadoSeleccionado.primer_apellido" required>
                </div>
                <div class="form-group">
                  <label for="segundo_apellido">Segundo Apellido</label>
                  <input type="text" class="form-control" id="segundo_apellido" v-model="empleadoSeleccionado.segundo_apellido">
                </div>
                <div class="form-group">
                  <label for="id_puesto">Puesto</label>
                  <select class="form-control" id="id_puesto" v-model="empleadoSeleccionado.id_puesto" required>
                    <option value="" disabled>Seleccione un puesto</option>
                    <option v-for="puesto in puestos" :key="puesto.id" :value="puesto.id">
                      {{ puesto.nombre_del_puesto }}
                    </option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="estado">Estado</label>
                  <select class="form-control" id="estado" v-model="empleadoSeleccionado.estado" required>
                    <option value="true">Activo</option>
                    <option value="false">Inactivo</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="direccion">Dirección</label>
                  <input type="text" class="form-control" id="direccion" v-model="empleadoSeleccionado.direccion" required>
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" class="form-control" id="email" v-model="empleadoSeleccionado.email" required>
                </div>
                <div class="form-group">
                  <label for="telefono">Teléfono</label>
                  <input type="text" class="form-control" id="telefono" v-model="empleadoSeleccionado.telefono" required>
                </div>
                <div class="form-group">
                  <label for="fecha_nacimiento">Fecha de Nacimiento</label>
                  <input type="date" class="form-control" id="fecha_nacimiento" v-model="empleadoSeleccionado.fecha_nacimiento" required>
                </div>
                <div class="form-group">
                  <label for="fecha_ingreso">Fecha de Ingreso</label>
                  <input type="date" class="form-control" id="fecha_ingreso" v-model="empleadoSeleccionado.fecha_ingreso" required>
                </div>
                <div class="form-group">
                  <label for="rtn">RTN</label>
                  <input type="text" class="form-control" id="rtn" v-model="empleadoSeleccionado.rtn" required>
                </div>
                <div class="form-group">
                  <label for="id_user">ID Usuario</label>
                  <input type="number" class="form-control" id="id_user" v-model="empleadoSeleccionado.id_user" required>
                </div>
                <button type="submit" class="btn btn-primary">Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "Empleados",
    data() {
      return {
        empleados: [], // Lista de empleados
        puestos: [], // Lista de puestos
        empleadoSeleccionado: null, // Empleado seleccionado para edición o creación
        mostrarModal: false, // Controla la visibilidad del modal
        empleadoAEliminar: null, // ID del empleado que se eliminará
        apiUrl: "http://127.0.0.1:8001/api/empleados", // API de empleados
        apiPuestosUrl: "http://127.0.0.1:8001/api/puestos", // API de puestos
      };
    },
    mounted() {
      this.obtenerEmpleados();
      this.obtenerPuestos();
    },
    methods: {
      async obtenerEmpleados() {
        try {
          const response = await axios.get(this.apiUrl);
          this.empleados = response.data;
        } catch (error) {
          console.error("Error al obtener empleados:", error);
        }
      },
      async obtenerPuestos() {
        try {
          const response = await axios.get(this.apiPuestosUrl);
          this.puestos = response.data;
        } catch (error) {
          console.error("Error al obtener puestos:", error);
        }
      },
      nuevoEmpleado() {
        this.empleadoSeleccionado = {
          dni_empleado: "",
          primer_nombre: "",
          segundo_nombre: "",
          primer_apellido: "",
          segundo_apellido: "",
          id_puesto: "",
          estado: true,
          direccion: "",
          email: "",
          telefono: "",
          fecha_nacimiento: "",
          fecha_ingreso: "",
          rtn: "",
          id_user: null,
        };
        this.mostrarModal = true;
      },
      editarEmpleado(empleado) {
        this.empleadoSeleccionado = { ...empleado };
        this.mostrarModal = true;
      },
      async guardarEdicion() {
        try {
          if (this.empleadoSeleccionado.id) {
            await axios.put(`${this.apiUrl}/${this.empleadoSeleccionado.id}`, this.empleadoSeleccionado);
          } else {
            await axios.post(this.apiUrl, this.empleadoSeleccionado);
          }
          this.obtenerEmpleados();
          this.cerrarModal();
        } catch (error) {
          console.error("Error al guardar el empleado:", error);
        }
      },
      confirmarEliminacion(id) {
        this.empleadoAEliminar = id;
        if (confirm("¿Estás seguro de eliminar este empleado?")) {
          this.eliminarEmpleadoConfirmado();
        }
      },
      async eliminarEmpleadoConfirmado() {
        try {
          await axios.delete(`${this.apiUrl}/${this.empleadoAEliminar}`);
          this.obtenerEmpleados();
        } catch (error) {
          console.error("Error al eliminar el empleado:", error);
        }
      },
      cerrarModal() {
        this.mostrarModal = false;
        this.empleadoSeleccionado = null;
      },
    },
  };
  </script>
  
  <style scoped>
  .modal {
    display: block;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  .modal-dialog {
    margin-top: 100px;
  }
  .modal-content {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
  </style>
  
  



