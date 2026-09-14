<script setup>
</script>

<template>
  <div class="container">
    <header class="navbar">
      <h1 class="logo">TecniSoporte Ñuble</h1>
      <nav class="hstack">
        <router-link to="/">Inicio</router-link>
        <router-link to="/nosotros">Nosotros</router-link>
        <router-link to="/servicios">Servicios</router-link>
        <router-link to="/contacto">Contacto</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <p>© 2026 TecniSoporte Ñuble</p>
    </footer>
  </div>
</template>