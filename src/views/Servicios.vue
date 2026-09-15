<script setup>
import { ref, computed } from 'vue'
import { useServiciosStore } from '../stores/useServiciosStore.js'
import TarjetaServicio from '../components/TarjetaServicio.vue'

const { state } = useServiciosStore()

const busqueda = ref('')
const categoriaSeleccionada = ref('')

const categorias = computed(() => {
  const set = new Set(state.servicios.map(s => s.categoria))
  return Array.from(set)
})

const serviciosFiltrados = computed(() => {
  return state.servicios.filter(s => {
    const coincideNombre = s.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    const coincideCategoria = categoriaSeleccionada.value
      ? s.categoria === categoriaSeleccionada.value
      : true
    return coincideNombre && coincideCategoria
  })
})

function onSeleccionar(servicio){
  state.servicioInteres = servicio
}
</script>

<template>
  <div class="vista">
    <h2>Nuestros Servicios</h2>

    <div class="filtros">
      <input v-model="busqueda" placeholder="Buscar servicio..." />
      <select v-model="categoriaSeleccionada">
        <option value="">Todas las categorías</option>
        <option v-for="c in categorias" :key="c" :value="c">{{ c }}</option>
      </select>
    </div>

     <p v-if="state.servicioInteres" class="seleccion-aviso">
      Seleccionaste: <strong>{{ state.servicioInteres.nombre }}</strong>
     </p>

    <div v-if="serviciosFiltrados.length > 0" class="grid-servicios">
      <TarjetaServicio
        v-for="s in serviciosFiltrados"
        :key="s.id"
        :servicio="s"
        @seleccionar="onSeleccionar"
      />
    </div>
    <p v-else>No se encontraron servicios con ese criterio.</p>
  </div>
</template>