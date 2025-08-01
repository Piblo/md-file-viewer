<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useFileStore } from '@/stores/files'
import { FileUpIcon, XIcon } from 'lucide-vue-next'
import { formatDate } from 'date-fns'
import NavLink from './NavLink.vue'

const files = useFileStore()
</script>

<template>
  <nav class="container">
    <NavLink to="/" class="nav-item">
      <FileUpIcon width="1rem" height="1rem" class="icon" /> Upload file
    </NavLink>
    <div v-show="files.getFiles().length > 0">
      <h2 class="nav-item nav-label">Files</h2>
      <TransitionGroup name="file-item" tag="ul">
        <li v-for="file in files.$state.files" :key="file.id">
          <NavLink :to="`/file/${file.id}`" class="nav-item column">
            <div class="header">
              <h3 class="file-link-header">{{ file.name }}</h3>
              <button class="delete-button" @click="files.deleteFile(file.id)">
                <XIcon width="16px" height="16px" color="currentColor" />
              </button>
            </div>
            <small>{{ formatDate(file.dateUploaded, 'dd/MM/yyyy') }}</small>
          </NavLink>
        </li>
      </TransitionGroup>
    </div>
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

.file-item-enter-active,
.file-item-leave-active {
  transition: all 0.25s ease;
}

.file-item-enter-from,
.file-item-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  width: 100%;
}

.delete-button {
  background: none;
  border: none;
  color: currentColor;
}
</style>
