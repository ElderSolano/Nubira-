<template>
  <div id="dashboard-principal" class="col-9">
    <div class="row mt-3" id="Tarjetas-1">
      <!-- Tarjeta Ventas -->
      <div class="col-lg mb-lg-0 mb-4">
        <div class="card tarjeta-uniforme">
          <div class="card-body p-3">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="d-flex flex-column h-100">
                  <p class="mb-1 pt-2 text-bold">Reportes de ventas</p>
                  <h5 class="font-weight-bolder"></h5>
                  <p class="mb-5">
                    Ver todo el registro de las ventas de tu mercadito.
                  </p>
                  <a
                    class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                    href="javascript:;"
                  >
                    Vamos
                    <i
                      class="fas fa-arrow-right text-sm ms-1"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div class="col-lg-6 text-center">
                <img
                  class="imagen-uniforme"
                  src="../assets/images/Finanzas.jpg"
                  alt="Finanzas"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tarjeta Inventario -->
      <div class="col-lg mb-lg-0 mb-4">
        <div class="card tarjeta-uniforme">
          <div class="card-body p-3">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <router-link :to="{ name: 'Inventario' }">
                  <div class="d-flex flex-column h-100">
                    <p class="mb-1 pt-2 text-bold">Inventario</p>
                    <h5 class="font-weight-bolder">Administración</h5>
                    <p class="mb-5">
                      En esta sección, podrás gestionar y llevar un control completo de tu inventario.
                    </p>
                    <a
                      class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                      href="javascript:;"
                    >
                      Vamos
                      <i
                        class="fas fa-arrow-right text-sm ms-1"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </router-link>
              </div>
              <div class="col-lg-6 text-center">
                <img
                  class="imagen-uniforme"
                  src="../assets/images/inventary.jpg"
                  alt="Inventario"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-3" id="Tarjetas-2">
      <!-- Tarjeta Mantenimiento -->
      <div class="col-lg mb-lg-0 mb-4">
        <div class="card tarjeta-uniforme">
          <div class="card-body p-3">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <router-link :to="{ name: 'Mantenimiento' }">
                  <div class="d-flex flex-column h-100">
                    <p class="mb-1 pt-2 text-bold">Mantenimiento</p>
                    <h5 class="font-weight-bolder">Servicios</h5>
                    <p class="mb-5">
                      Gestiona tus productos, empleados, proveedores y más.
                    </p>
                    <a
                      class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                      href="javascript:;"
                    >
                      Vamos
                      <i
                        class="fas fa-arrow-right text-sm ms-1"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </router-link>
              </div>
              <div class="col-lg-6 text-center">
                <img
                  class="imagen-uniforme"
                  src="../assets/images/mantenimiento.jpg"
                  alt="Mantenimiento"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tarjeta Reportes -->
      <div class="col-lg mb-lg-0 mb-4">
        <div class="card tarjeta-uniforme">
          <div class="card-body p-3">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <router-link :to="{ name: 'Estadisticas' }">
                  <div class="d-flex flex-column h-100">
                    <p class="mb-1 pt-2 text-bold">Reportes</p>
                    <h5 class="font-weight-bolder">Estadisticas</h5>
                    <p class="mb-5">
                      Estadisticas para ver las métricas de tu negocio.
                    </p>
                    <a
                      class="text-body text-sm font-weight-bold mb-0 icon-move-right mt-auto"
                      href="javascript:;"
                    >
                      Vamos
                      <i
                        class="fas fa-arrow-right text-sm ms-1"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </router-link>
              </div>
              <div class="col-lg-6 text-center">
                <img
                  class="imagen-uniforme"
                  src="../assets/images/reportes.jpg"
                  alt="Reportes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard-default",
  methods: {
    async handleLogout() {
      try {
        const response = await fetch('https://eb1d-181-115-60-195.ngrok-free.app/api/logout', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('authToken')}`,
          },
        });

        if (response.ok) {
          console.log('Cierre de sesión exitoso');
          localStorage.removeItem('authToken');
          this.$router.push({ name: 'Login' });
        } else {
          const contentType = response.headers.get('content-type');
          if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            console.error('Error al cerrar sesión:', data.message);
          } else {
            console.error('Error al cerrar sesión: Respuesta no es JSON');
          }
        }
      } catch (error) {
        console.error('Error en la solicitud de cierre de sesión:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Estilo para las tarjetas */
.tarjeta-uniforme {
  height: 300px; /* Altura fija para todas las tarjetas */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

/* Estilo para las imágenes */
.imagen-uniforme {
  max-width: 100%;
  max-height: 200px; /* Altura máxima para estandarizar */
  object-fit: cover; /* Ajuste proporcional sin deformación */
  border-radius: 8px; /* Opcional: redondear bordes */
}

/* Contenedor principal */
#dashboard-principal {
  margin-left: 100px; /* Ajusta este valor al ancho de tu Sidenav */
  transition: margin-left 0.3s;
  row-gap: 20px;
}

*{
  font-family: 'Nunito' !important;
}
</style>
