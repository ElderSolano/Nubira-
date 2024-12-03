<template>
    <div class="empresa-container">
      <div class="empresa-card">
        <div class="empresa-header">
          <img
            src="https://i.pinimg.com/736x/d2/e8/76/d2e8766fa2b628d6b8ab27ac3cdeffc5.jpg"
            alt="Logo Empresa"
            class="empresa-logo"
          />
          <h2>{{ company.name }}</h2>
          <p class="empresa-email">{{ company.email }}</p>
        </div>
        <div class="empresa-details">
          <div class="detail">
            <span class="label">RTN:</span>
            <span class="value">{{ company.rtn }}</span>
          </div>
          <div class="detail">
            <span class="label">Ubicación:</span>
            <span class="value">{{ company.location }}</span>
          </div>
          <div class="detail">
            <span class="label">Teléfono:</span>
            <span class="value">{{ company.phone }}</span>
          </div>
          <div class="detail">
            <span class="label">Fecha de Creación:</span>
            <span class="value">{{ company.creationDate }}</span>
          </div>
          <div class="detail">
            <span class="label">Punto de Emisión:</span>
            <span class="value">{{ company.emissionPoint }}</span>
          </div>
          <div class="detail">
            <span class="label">Establecimiento:</span>
            <span class="value">{{ company.establishment }}</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Empresa",
    data() {
      return {
        company: {
          name: "Nubira Mercados",
          email: "contacto@nubira.com",
          rtn: "08011998012345",
          location: "Tegucigalpa, Honduras",
          phone: "+504 2234-5678",
          creationDate: "2018-06-01",
          emissionPoint: "Central",
          establishment: "Sucursal 1",
        },
      };
    },
  };
  </script>
  
  <style scoped>
  .empresa-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f8f9fa;
  }
  
  .empresa-card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 400px;
    padding: 20px;
  }
  
  .empresa-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .empresa-logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid rgb(90, 36, 234);
    margin-bottom: 10px;
  }
  
  .empresa-header h2 {
    margin: 0;
    font-size: 1.5rem;
    color: rgb(90, 36, 234);
  }
  
  .empresa-header .empresa-email {
    color: #6c757d;
    font-size: 0.9rem;
  }
  
  .empresa-details {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .detail {
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    border-bottom: 1px solid #f1f1f1;
    padding-bottom: 5px;
  }
  
  .detail .label {
    font-weight: bold;
    color: rgb(90, 36, 234);
  }
  
  .detail .value {
    color: #495057;
  }
  </style>
  