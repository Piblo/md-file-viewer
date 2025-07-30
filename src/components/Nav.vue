<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useFileStore } from '@/stores/files'
import { FileUpIcon } from 'lucide-vue-next'
import { formatDate } from 'date-fns'

const files = useFileStore()
</script>

<template>
  <nav class="container">
    <RouterLink to="/" class="nav-link nav-item">
      <FileUpIcon width="1rem" height="1rem" class="icon" /> Upload file
    </RouterLink>
    <h2 class="nav-item nav-label">Files</h2>
    <ul>
      <li v-for="file in files.$state.files" :key="file.id">
        <RouterLink :to="`/file/${file.id}`" class="nav-link nav-item column" active-class="active">
          <h3 class="file-link-header">{{ file.name }}</h3>
          <small>{{ formatDate(file.dateUploaded, 'dd/MM/yyyy') }}</small>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.container {
  border-right: 1px solid var(--color-neutral-dark);
  height: 100dvh;
  padding: var(--spacing-4) 0;
}

.nav-item {
  margin: 0 var(--spacing-4);
  padding: var(--spacing-2);
}

ul {
  list-style: none;
  padding: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  color: var(--color-neutral-light);
  text-decoration: none;
  /* padding: var(--spacing-2) var(--spacing-4); */
  border-radius: 8px;
  outline: none;
  font-size: 1rem;

  &:hover,
  &:focus-visible {
    background-color: var(--color-neutral-dark);
  }
}

.active {
  background-color: var(--color-neutral-darker);
}

.nav-label {
  color: var(--color-text-muted);
  font-size: 0.85rem;
}

.icon {
  margin-right: var(--spacing-2);
  color: white;
  width: 1.2rem;
  height: 1.2rem;
}

.column {
  flex-direction: column;
  align-items: start;
}

.file-link-header {
  font-size: 1rem;
}
</style>
