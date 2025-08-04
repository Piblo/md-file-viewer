<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
</script>

<template>
  <div class="layout">
    <Nav />
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.dropzone {
  height: 30vh;
}

h1 {
  margin-bottom: var(--spacing-4);
}

.layout {
  display: grid;
  grid-template-columns: 300px 1fr;
}

.content {
  padding: var(--spacing-6) var(--spacing-7);
}
</style>
