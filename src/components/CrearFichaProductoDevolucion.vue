<script>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";
import axios from 'axios';


export default {
  name: 'CrearFichaProductoDevolucion',
  props: ["idProveedor", "id_ficha_creada"],
  setup(props) {
    const fichasProductos = ref([]);
    const productosSeleccionados = ref([]);
    const mensaje = ref('');
    const router = useRouter();

    // Obtener las fichas de productos de fichas de inventario procesadas
    const obtenerFichasProductos = async () => {
      try {
        const url = `http://localhost:8000/api/fichas-producto-procesadas/${props.idProveedor}/para-devolver`;
        const response = await axios.get(url);
        if (response.data.codigoResultado === 1) {
          fichasProductos.value = response.data.fichas_productos;
          console.log(fichasProductos.value)
        } else {
          mensaje.value = 'No se encontraron productos para devolver.';
        }
      } catch (error) {
        mensaje.value = 'Hubo un error al cargar los productos.';
        console.error(error);
      }
    };

    // Actualizar productos seleccionados
    const actualizarSeleccion = (fichaProducto) => {
      const index = productosSeleccionados.value.findIndex(
        (producto) => producto.id === fichaProducto.id
      );
      if (index === -1) {
        // Agregar si no está seleccionado
        productosSeleccionados.value.push({
          producto_id: fichaProducto.producto_id,
          cantidad: fichaProducto.cantidad,
          precio_compra: fichaProducto.precio_compra,
          lote: fichaProducto.lote,
          fecha_vencimiento: fichaProducto.fecha_vencimiento,
        });

        console.log(productosSeleccionados.value);
      } else {
        // Quitar si ya está seleccionado
        productosSeleccionados.value.splice(index, 1);
      }
    };

    // Enviar datos al backend
    const crearFichaProducto = async () => {
      try {
        const fichaInventarioId = props.id_ficha_creada;
        if (!fichaInventarioId || productosSeleccionados.value.length === 0) {
          mensaje.value =
            'Debe seleccionar al menos un producto para devolver.';
          return;
        }

        const url = `http://localhost:8000/api/ficha-producto`;
        const payload = {
          ficha_inventario_id: fichaInventarioId,
          productos: productosSeleccionados.value,
        };
        console.log(payload);
        const response = await axios.post(url, payload);
        mensaje.value = response.data.message || 'Ficha de producto creada exitosamente.';
        router.push({ path: '/mantenimiento/inventario/fichasinventario' });
      } catch (error) {
        console.log(error);
        mensaje.value = 'Error al crear la ficha de producto.';
        console.error(error);
      }
    };

    onMounted(() => {
      obtenerFichasProductos();
    });

    return {
      fichasProductos,
      productosSeleccionados,
      mensaje,
      actualizarSeleccion,
      crearFichaProducto,
    };
  },
};
</script>


<template>
  <div>
    <h2>Devolución de Productos</h2>
    <h3>Seleccione los productos a devolver:</h3>
    <div v-if="fichasProductos.length > 0" class="contenedor-productos" >
      <div v-for="fichaProducto in fichasProductos" :key="fichaProducto.id" class="productos-devueltos">
        <label>
          <input
            type="checkbox"
            @change="actualizarSeleccion(fichaProducto)"
          />
          <p>
            Producto ID: {{ fichaProducto.producto.nombre_producto }} - Cantidad:
            {{ fichaProducto.cantidad }} - Precio:
            {{ fichaProducto.precio_compra }} - Lote: {{ fichaProducto.lote }}
          </p>
        </label>
      </div>
    </div>
    <button @click="crearFichaProducto">Crear la ficha de producto</button>
    <div v-if="mensaje">
      <p>{{ mensaje }}</p>
    </div>
  </div>
</template>


<style>
/* Estilo de los productos devueltos */
.productos-devueltos {
  display: flex;
  align-items: center; 
  border: 1px solid #ccc;
  border-radius: 12px; 
  background-color: #f9f9f9;
  transition: box-shadow 0.3s ease, background-color 0.3s ease;
  min-width: 250px; 
  max-width: 300px; 
  flex: 1; 
}

.productos-devueltos:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f2d5fd;
}

.productos-devueltos input[type="checkbox"] {
  margin-right: 15px;
  transform: scale(1.2); 
  cursor: pointer;
}

.productos-devueltos p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

/* Estilo del contenedor de los productos */
.contenedor-productos {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: auto;
  flex-wrap: wrap;
  justify-content: center; 
}

/* Estilo del botón */
button {
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: rgb(70, 20, 200); 
  border: 2px solid rgb(70, 20, 200); 
  border-radius: 12px !important; 
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: center;
  margin-top: 20px; 
}

button:hover {
  background-color: rgb(245, 47, 0);
  color: white; 
  border-color: rgb(245, 47, 0);
  border-radius: 12px;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .productos-devueltos {
    padding: 10px;
    border-radius: 10px; 
  }

  .productos-devueltos p {
    font-size: 0.9rem;
  }

  button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .productos-devueltos {
    padding: 8px;
  }

  .productos-devueltos p {
    font-size: 0.8rem;
  }

  button {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}
</style>
