<script setup>
defineProps({
  servicio: { type: Object, required: true }
})
</script>

<template>
  <div class="tarjeta-servicio">
    <h3>{{ servicio.nombre }}</h3>
    <span class="categoria">{{ servicio.categoria }}</span>
    <p>{{ servicio.descripcion }}</p>
    <p class="precio">${{ servicio.precio.toLocaleString('es-CL') }}</p>
    <p v-if="servicio.disponible" class="disponible">Disponible</p>
    <p v-else class="no-disponible">No disponible</p>
  </div>
</template>