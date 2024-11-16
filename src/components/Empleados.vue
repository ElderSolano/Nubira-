<template>
    <btnCrear
        :inputs="inputs"
    ></btnCrear>
    <div class="py-4 container-fluid espaciado col-10" style="margin-left: 250px;">
        <div class="row">
            
            <div class="col-12">
                <!-- Tabla de empleados -->
                <h2 class="text-center">Empleados</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Puesto</th>
                            <th>Telefono</th>
                            <th>Fecha de Ingreso</th>
                            <th>Estado</th>
                            <th>Dirección</th>
                            <th>Email</th>
                            <th>Fecha de Nacimiento</th>
                            <th>RTN</th>
                            <th>Usuario</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="empleado in empleados" :key="empleado.id">
                            <td>{{ empleado.id }}</td>
                            <td>{{ empleado.dni_empleado }}</td>
                            <td>{{ empleado.primer_nombre }} {{ empleado.segundo_nombre }} {{ empleado.primer_apellido }} {{ empleado.segundo_apellido }}</td>
                            <td>{{ empleado.puesto }}</td>
                            <td>{{ empleado.telefono }}</td>
                            <td>{{ empleado.fecha_ingreso }}</td>
                            <td>{{ empleado.estado ? 'Activo' : 'Inactivo' }}</td>
                            <td>{{ empleado.direccion }}</td>
                            <td>{{ empleado.email }}</td>
                            <td>{{ empleado.fecha_nacimiento }}</td>
                            <td>{{ empleado.rtn }}</td>
                            <td>{{ empleado.usuario }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"; // Importa axios
import btnCrear from "@/views/components/btnCrear.vue";

export default {
    name: "Empleados",
    components: {
        btnCrear
    },
    data(){
        return{
            inputs: ['Dni', 'Nombre', 'Puesto', 'Telefono'],
            empleados: [], // Aquí almacenaremos la lista de empleados
            empleado: { // Datos del empleado a enviar a la API
                dni: '',
                nombre: '',
                puesto: '',
                telefono: ''
            }
        };
    },
    mounted() {
        this.obtenerEmpleados(); // Llama la función para cargar los empleados cuando se monte el componente
    },
    methods: {
        // Función para obtener empleados desde la API
        async obtenerEmpleados() {
            try {
                const response = await axios.get("http://127.0.0.1:8000/api/empleados");
                this.empleados = response.data; // Asigna la respuesta a la variable empleados
            } catch (error) {
                console.error("Error al obtener empleados:", error);
            }
        },

        // Función para agregar un nuevo empleado (si es necesario)
        async agregarEmpleado() {
            try {
                const response = await axios.post("http://127.0.0.1:8000/api/empleados", this.empleado);
                console.log("Empleado agregado exitosamente:", response.data);
                this.obtenerEmpleados(); // Actualiza la lista de empleados después de agregar uno
            } catch (error) {
                console.error("Error al agregar empleado:", error);
            }
        }
    }
};
</script>

<style>
/* Puedes agregar tus estilos personalizados aquí */
</style>