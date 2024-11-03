<template>
  <div class="py-4 container-fluid espaciado col-10" style="margin-left: 250px;">
    <div class="row">
      <div class="col-12">
        <authors-table />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <projects-table />
      </div>
    </div>
  </div>
</template>

<script>
import AuthorsTable from "./components/AuthorsTable";
import ProjectsTable from "./components/ProjectsTable";

export default {
  name: "tables",
  components: {
    AuthorsTable,
    ProjectsTable,
  },
};
</script>

<style>

</style>
