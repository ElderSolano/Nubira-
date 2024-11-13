<template >
    <div class="container-fluid py-4" id="contenedor-mantenimiento">
        
        <div class="row mt-3 ">
            <div class="row mt-3">
                <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="d-flex flex-column h-100">
                                <p class="mb-1 pt-2 text-bold">
                                    Mi info
                                    <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                                        <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                    </a>
                                </p>
                            </div>
                            <div class="ms-auto text-center mt-2 mt-lg-0">
                                <div class="border-radius-lg h-100">
                                    <img class="w-100" src="../assets/images/mi info.png" alt="rocket" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="d-flex flex-column h-100">
                                <p class="mb-1 pt-2 text-bold">
                                    Mi empresa
                                    <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                                        <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                    </a>
                                </p>
                            </div>
                            <div class="ms-auto text-center mt-2 mt-lg-0">
                                <div class="border-radius-lg h-100">
                                    <img class="w-100" src="../assets/images/empresa.png" alt="rocket" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                    <RouterLink :to="{ name: 'Categorias'}">
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="d-flex flex-column h-100">
                                <p class="mb-1 pt-2 text-bold">
                                    Categorías
                                    <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                                        <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                    </a>
                                </p>
                            </div>
                            <div class="ms-auto text-center mt-2 mt-lg-0">
                                <div class="border-radius-lg h-100">
                                    <img class="w-100" src="../assets/images/categorias.png" alt="rocket" />
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
                </div>
            
                <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
                    <RouterLink :to="{ name: 'Productos'}">
                    <div class="card">
                        <div class="card-body p-3">
                            <div class="d-flex flex-column h-100">
                                <p class="mb-1 pt-2 text-bold">
                                    Productos
                                    <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                                        <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                                    </a>
                                </p>
                            </div>
                            <div class="ms-auto text-center mt-2 mt-lg-0">
                                <div class="border-radius-lg h-100">
                                    <img class="w-100" src="../assets/images/productos.png" alt="rocket" />
                                </div>
                            </div>
                        </div>
                    </div>
                </RouterLink>
                </div>
        </div>

        </div>

        <div class="row mt-3 ">
            <div class="row mt-3">
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="card">
                <div class="card-body p-3">
                    <div class="d-flex flex-column h-100">
                        <p class="mb-1 pt-2 text-bold">
                            Usuarios
                            <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                                <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                            </a>
                        </p>
                    </div>
                    <div class="ms-auto text-center mt-2 mt-lg-0">
                        <div class="border-radius-lg h-100">
                            <img class="w-100" src="../assets/images/empleados.png" alt="rocket" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <RouterLink :to="{ name: 'Empleados'}">
            <div class="card">
                <div class="card-body p-3">
                    <div class="d-flex flex-column h-100">
                        <p class="mb-1 pt-2 text-bold">
                            Empleados
                            <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                                <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                            </a>
                        </p>
                    </div>
                    <div class="ms-auto text-center mt-2 mt-lg-0">
                        <div class="border-radius-lg h-100">
                            <img class="w-100" src="../assets/images/empleados.png" alt="rocket" />
                        </div>
                    </div>
                </div>
            </div>
        </RouterLink>
        </div>
    
    
        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="card">
                <div class="card-body p-3">
                    <div class="d-flex flex-column h-100">
                        <p class="mb-1 pt-2 text-bold">
                            Proveedores
                            <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                                <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                            </a>
                        </p>
                    </div>
                    <div class="ms-auto text-center mt-2 mt-lg-0">
                        <div class="border-radius-lg h-100">
                            <img class="w-100" src="../assets/images/proveedores.png" alt="rocket" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
            <div class="card">
                <div class="card-body p-3">
                    <div class="d-flex flex-column h-100">
                        <p class="mb-1 pt-2 text-bold">
                            Permisos
                            <a class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto" href="javascript:;">
                                <i class="fas fa-arrow-right text-sm ms-1" aria-hidden="true"></i>
                            </a>
                        </p>
                    </div>
                    <div class="ms-auto text-center mt-2 mt-lg-0">
                        <div class="border-radius-lg h-100">
                            <img class="w-100" src="../assets/images/permisos.png" alt="rocket" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>

        </div>
    </div>
    
    
</template>

<script>
    
</script>

<style>
    #contenedor-mantenimiento {
        margin-left: 250px;
    }

    .fixed-text {
        font-size: 1.25rem; /* Ajusta este valor según sea necesario */
    }
</style>




