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

## Parte 4 – Filtros, condicionales e interacción 
Se agregó un buscador (v-model="busqueda") y un filtro por categoría (v-model="categoriaSeleccionada"). La lista visible se obtiene mediante el computed serviciosFiltrados, que combina ambos criterios sin modificar el arreglo original state.servicios.

Se usó v-if/v-else para mostrar el grid de servicios o un mensaje de "sin resultados" según si serviciosFiltrados tiene elementos o no.

Cada TarjetaServicio incorpora un botón "Solicitar información", visible con v-show solo si el servicio está disponible. Al hacer clic, el componente hijo emite el evento seleccionar (defineEmits) enviando el objeto del servicio completo. El componente padre (Servicios.vue) escucha ese evento con @seleccionar="onSeleccionar" y guarda el servicio elegido, mostrándolo visualmente arriba del catálogo.

## Parte 5 – Formulario de contacto
Se implementó el formulario en Contacto.vue con los campos nombre, correo, teléfono, servicio de interés y mensaje, todos ligados con v-model.

La función validar() revisa que nombre, teléfono y mensaje no estén vacíos, y que el correo contenga un @. Si existen errores, se listan con v-for dentro de un bloque v-if="errores.length > 0". Si los datos son válidos, se marca enviado = true y se muestra un resumen de la solicitud con v-if="enviado".

El campo "Servicio de interés" se relaciona con el catálogo: si el usuario seleccionó un servicio en la vista Servicios (mediante el emit seleccionar, guardado en state.servicioInteres), el formulario lo precompleta automáticamente en el <select>, aunque el usuario puede cambiarlo si lo desea.

## Parte 6 – Diseño y revisión final
Se aplicó una identidad visual coherente en todo el sitio mediante style.css (CSS global, sin estilos embebidos en los componentes), usando variables CSS (:root) para mantener consistencia de colores: azul (--color-primario) como color corporativo y naranja (--color-acento) como color de énfasis en botones y elementos destacados.

Se organizaron: navbar con estado activo de link (router-link-active), tarjetas de servicio con sombra y layout en grid responsivo (repeat(auto-fit, minmax(...))), formulario de contacto con espaciado uniforme, y un footer simple. Se agregó una regla @media básica para pantallas pequeñas.

# Actividad 9

## Parte 1 y 2 – Preparación del backend
Se creó la carpeta backend/ en la raíz del proyecto, independiente del frontend de Vue (Actividad 8). Dentro de ella se ejecutó npm init -y, lo que generó un package.json propio para el backend, donde Node.js registra sus dependencias de forma separada del proyecto Vue.

Se instaló Express con npm install express, framework para Node.js que permite crear servidores web, definir rutas y construir APIs de forma sencilla.

## Parte 3 y 4 – Primer servidor
Se creó backend/server.js con un servidor Express básico. app.get('/', (req, res) => {...}) define una ruta GET para la raíz del servidor: req contiene la información de la solicitud entrante (headers, parámetros, etc.), res es el objeto usado para construir y enviar la respuesta al cliente (en este caso con res.send(), que envía texto plano). app.listen(PORT, callback) inicia el servidor en el puerto indicado y ejecuta la función de callback una vez que queda escuchando.

Se probó ejecutando node server.js y visitando http://localhost:3000, confirmando que el servidor responde correctamente.
