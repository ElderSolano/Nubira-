<template>
    <btnCrear></btnCrear>
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
    import AuthorsTable from "@/views/components/AuthorsTable.vue";
    //import ProjectsTable from "@/views/components/ProjectsTable.vue";
    import btnCrear from "@/views/components/btnCrear.vue";

export default {
    name: "Empleados",
    components: {
    AuthorsTable,
    btnCrear
    //ProjectsTable,

},
};
</script>

