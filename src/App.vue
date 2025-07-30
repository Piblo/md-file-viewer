<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
</script>

<template>
  <div class="layout">
    <Nav />
    <div class="content">
      <h1>Markdown file viewer</h1>
      <RouterView />
    </div>
  </div>
</template>

<style>
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
  padding: var(--spacing-4) var(--spacing-7);
}
</style>
