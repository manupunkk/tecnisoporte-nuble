<script setup>
import { useServiciosStore } from '../stores/useServiciosStore.js'
import TarjetaServicio from '../components/TarjetaServicio.vue'

const { state } = useServiciosStore()
</script>

<template>
  <div class="vista">
    <h2>Nuestros Servicios</h2>
    <div class="grid-servicios">
      <TarjetaServicio
        v-for="s in state.servicios"
        :key="s.id"
        :servicio="s"
      />
    </div>
  </div>
</template>