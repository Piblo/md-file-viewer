<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <h1>Markdown file viewer</h1>
  <RouterView />
</template>

<style>
.dropzone {
  height: 30vh;
}

h1 {
  margin-bottom: var(--spacing-4);
}
</style>
