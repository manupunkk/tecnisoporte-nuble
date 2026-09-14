# Acividad 8

## Parte 1 – Reutilización del proyecto
Se reutilizó la base técnica del proyecto desarrollado en la Actividad 7 (recepción de textos escolares), adaptándola al caso de una empresa de servicios: TecniSoporte Ñuble, dedicada a servicios tecnológicos (soporte computacional, redes y asesoría TI).

Se conservó: la estructura general del proyecto (Vite + Vue 3), main.js, App.vue como componente raíz, y el patrón de trabajo con un store reactivo central (useRecepcionStore.js como referencia).

Se eliminó: los componentes específicos del caso anterior que ya no correspondían al nuevo contexto — Recepciones.vue, Proveedores.vue, ItemsRecepcion.vue, Libros.vue y el store useRecepcionStore.js — ya que estaban diseñados para gestión de textos escolares y no para mostrar servicios de una empresa.

Se modificará a continuación: App.vue (para usar Vue Router en vez de pestañas manuales), y se crearán nuevas vistas y un nuevo store adaptados al catálogo de servicios.

## Parte 2 – Navegación y vistas
Se crearon 4 vistas dentro de src/views/: Inicio.vue, Nosotros.vue, Servicios.vue y Contacto.vue. Se instaló vue-router y se configuró en src/router/index.js, definiendo una ruta para cada vista. El router se conectó en main.js mediante createApp(App).use(router).mount('#app').

App.vue se adaptó reemplazando el sistema de pestañas manuales (ref + v-if) usado en la Actividad 7 por <router-link> para la navegación y <router-view> para renderizar la vista activa según la URL, permitiendo que el usuario se desplace entre secciones sin recargar la página (comportamiento SPA).

## Parte 3 – Catálogo de servicios y componentes
Se creó src/stores/useServiciosStore.js, con un estado reactivo que contiene un arreglo de 6 servicios (nombre, categoría, descripción, precio y disponibilidad), propios del rubro de TecniSoporte Ñuble.

Se creó el componente reutilizable TarjetaServicio.vue, que recibe un objeto servicio mediante props y se encarga de renderizar su información. Este mismo componente se usa 6 veces (una por servicio) dentro de Servicios.vue, evitando escribir HTML repetido para cada uno.

En Servicios.vue se recorre state.servicios con v-for, pasando cada elemento al componente hijo mediante :servicio="s".