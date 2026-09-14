# Acividad 8

## Parte 1 – Reutilización del proyecto
Se reutilizó la base técnica del proyecto desarrollado en la Actividad 7 (recepción de textos escolares), adaptándola al caso de una empresa de servicios: TecniSoporte Ñuble, dedicada a servicios tecnológicos (soporte computacional, redes y asesoría TI).

Se conservó: la estructura general del proyecto (Vite + Vue 3), main.js, App.vue como componente raíz, y el patrón de trabajo con un store reactivo central (useRecepcionStore.js como referencia).

Se eliminó: los componentes específicos del caso anterior que ya no correspondían al nuevo contexto — Recepciones.vue, Proveedores.vue, ItemsRecepcion.vue, Libros.vue y el store useRecepcionStore.js — ya que estaban diseñados para gestión de textos escolares y no para mostrar servicios de una empresa.

Se modificará a continuación: App.vue (para usar Vue Router en vez de pestañas manuales), y se crearán nuevas vistas y un nuevo store adaptados al catálogo de servicios.

