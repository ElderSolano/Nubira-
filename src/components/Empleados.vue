<template>
    <btnCrear
        :inputs="inputs"
    ></btnCrear>
    <div class="py-4 container-fluid espaciado col-10" style="margin-left: 250px;">
        <div class="row">
            <div class="col-12">
                <authors-table />
            </div>
        </div>
        <!--
        <div class="row">
            <div class="col-12">
                <projects-table />
            </div>
        </div>
        -->
    </div>
</template>

<style>

</style>

<!--Separacion-->



<script>
import axios from "axios"; // Importa axios
import AuthorsTable from "@/views/components/AuthorsTable.vue";
import btnCrear from "@/views/components/btnCrear.vue";

export default {
    name: "Empleados",
    components: {
        AuthorsTable,
        btnCrear
    },
    data(){
        return{
            inputs : ['Dni', 'Nombre', 'Puesto', 'Telefono'],
            empleado: { // Datos del empleado a enviar a la API
                dni: '',
                nombre: '',
                puesto: '',
                telefono: ''
            }
        };
    },
    methods: {
        async agregarEmpleado() {
            try {
                const response = await axios.post("https://eb1d-181-115-60-195.ngrok-free.app/api/empleados", this.empleado);
                console.log("Empleado agregado exitosamente:", response.data);
                // Aquí podrías actualizar la lista de empleados o limpiar el formulario
            } catch (error) {
                console.error("Error al agregar empleado:", error);
            }
        }
    }
};
</script>