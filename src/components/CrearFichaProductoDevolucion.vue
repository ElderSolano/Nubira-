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
        const url = `http://localhost:${process.env.VUE_APP_PUERTO}/api/fichas-producto-procesadas/${props.idProveedor}/para-devolver`;
        const response = await axios.get(url);
        if (response.data.codigoResultado === 1) {
          fichasProductos.value = response.data.fichas_productos;
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

        const url = `http://localhost:${process.env.VUE_APP_PUERTO}/api/ficha-producto`;
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
            Producto ID: {{ fichaProducto.producto_id }} - Cantidad:
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
.productos-devueltos {
    display: flex;
    align-items: center; /* Centra verticalmente el contenido del label */
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    transition: box-shadow 0.3s ease, background-color 0.3s ease;
    min-width: 250px; /* Define un ancho mínimo para los labels */
    max-width: 300px; /* Define un ancho máximo para mantener el diseño */
    flex: 1; /* Permite que los labels ocupen espacio proporcional */
  }

.productos-devueltos:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f2d5fd;
}

.productos-devueltos input[type="checkbox"] {
  margin-right: 15px;
  transform: scale(1.2);
  /* Tamaño del checkbox */
  cursor: pointer;
}

.productos-devueltos p {
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

/* Espaciado general y alineación */
.contenedor-productos {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  width: auto;
  flex-wrap: wrap;
}

/* Estilo del botón */
button[type="submit"] {
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

/* Estilos responsivos */
@media (max-width: 768px) {
  .productos-devueltos {
    padding: 10px;
    border-radius: 6px;
  }

  .productos-devueltos p {
    font-size: 0.9rem;
  }

  button[type="submit"] {
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

  button[type="submit"] {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}
</style>