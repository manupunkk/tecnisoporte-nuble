<script setup>
import { ref, computed } from 'vue'
import { useServiciosStore } from '../stores/useServiciosStore.js'

const { state } = useServiciosStore()

const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  servicioInteres: state.servicioInteres?.nombre || '',
  mensaje: ''
})

const errores = ref([])
const enviado = ref(false)

function validar(){
  const nuevosErrores = []
  if(!form.value.nombre.trim()) nuevosErrores.push('El nombre es obligatorio.')
  if(!form.value.correo.trim() || !form.value.correo.includes('@')) nuevosErrores.push('Ingrese un correo válido.')
  if(!form.value.telefono.trim()) nuevosErrores.push('El teléfono es obligatorio.')
  if(!form.value.mensaje.trim()) nuevosErrores.push('El mensaje es obligatorio.')
  return nuevosErrores
}

function enviar(){
  errores.value = validar()
  if(errores.value.length > 0){
    enviado.value = false
    return
  }
  enviado.value = true
}
</script>

<template>
  <div class="vista">
    <h2>Contacto</h2>
    <p>¿Tienes una consulta? Completa el formulario y te contactaremos a la brevedad.</p>

    <form @submit.prevent="enviar" class="form-contacto">
      <input v-model="form.nombre" placeholder="Nombre" />
      <input v-model="form.correo" placeholder="Correo electrónico" type="email" />
      <input v-model="form.telefono" placeholder="Teléfono" />
      <select v-model="form.servicioInteres">
        <option value="">Selecciona un servicio (opcional)</option>
        <option v-for="s in state.servicios" :key="s.id" :value="s.nombre">{{ s.nombre }}</option>
      </select>
      <textarea v-model="form.mensaje" placeholder="Mensaje"></textarea>
      <button type="submit">Enviar consulta</button>
    </form>

    <div v-if="errores.length > 0" class="errores">
      <p v-for="(e, i) in errores" :key="i">{{ e }}</p>
    </div>

    <div v-if="enviado" class="confirmacion">
      <h3>¡Solicitud recibida!</h3>
      <p>Nombre: {{ form.nombre }}</p>
      <p>Correo: {{ form.correo }}</p>
      <p>Teléfono: {{ form.telefono }}</p>
      <p>Servicio de interés: {{ form.servicioInteres || 'No especificado' }}</p>
      <p>Mensaje: {{ form.mensaje }}</p>
    </div>
  </div>
</template>