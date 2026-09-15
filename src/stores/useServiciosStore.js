import { reactive } from 'vue'

const state = reactive({
  servicios: [
    { id: 1, nombre: 'Soporte computacional', categoria: 'Soporte', descripcion: 'Diagnóstico y configuración de equipos computacionales.', precio: 35000, disponible: true },
    { id: 2, nombre: 'Instalación de redes', categoria: 'Infraestructura', descripcion: 'Instalación y configuración de redes para oficinas.', precio: 180000, disponible: true },
    { id: 3, nombre: 'Asesoría tecnológica', categoria: 'Consultoría', descripcion: 'Apoyo en decisiones tecnológicas para pequeñas empresas.', precio: 70000, disponible: true },
    { id: 4, nombre: 'Mantención de equipos', categoria: 'Soporte', descripcion: 'Mantención preventiva de computadores y notebooks.', precio: 30000, disponible: true },
    { id: 5, nombre: 'Configuración WiFi empresarial', categoria: 'Infraestructura', descripcion: 'Configuración y optimización de redes inalámbricas.', precio: 90000, disponible: false },
    { id: 6, nombre: 'Recuperación de datos', categoria: 'Soporte', descripcion: 'Recuperación de archivos desde discos dañados o formateados.', precio: 60000, disponible: true },
  ],
  servicioInteres: null
})

export function useServiciosStore(){
  return { state }
}