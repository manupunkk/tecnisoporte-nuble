import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Nosotros from '../views/Nosotros.vue'
import Servicios from '../views/Servicios.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  { path: '/', name: 'inicio', component: Inicio },
  { path: '/nosotros', name: 'nosotros', component: Nosotros },
  { path: '/servicios', name: 'servicios', component: Servicios },
  { path: '/contacto', name: 'contacto', component: Contacto },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router