<script lang="ts" setup>
import { useFileStore } from '@/stores/files'
import { formatDate } from 'date-fns'
import { XIcon } from 'lucide-vue-next'
import { computed, ref } from 'vue'
import Button from './Button.vue'

defineProps<{
  file: {
    id: string
    name: string
    dateUploaded: Date
  }
}>()

const fileStore = useFileStore()
const showActions = ref(false)
const actionsContainerRef = ref<HTMLElement | null>(null)

const trackOffset = computed(() => {
  if (!actionsContainerRef.value) return 0
  return actionsContainerRef.value.offsetWidth
})
</script>

<template>
  <div class="file-nav-item">
    <div
      class="track"
      :style="{ transform: showActions ? `translateX(-${trackOffset}px)` : undefined }"
    >
      <div class="file-item">
        <div class="header">
          <h3 class="file-link-header">{{ file.name }}</h3>
          <Button variant="unstyled" class="delete-button" @click="showActions = !showActions">
            <XIcon width="16px" height="16px" color="currentColor" />
          </Button>
        </div>
        <small>{{ formatDate(file.dateUploaded, 'dd/MM/yyyy') }}</small>
      </div>
      <div ref="actionsContainerRef" class="actions-container">
        <Button variant="unstyled" @click="fileStore.deleteFile(file.id)">Delete</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.file-nav-item {
  width: 100%;
  position: relative;
  z-index: 100;
  overflow: hidden;
  border-radius: 8px;
}

.file-item {
  padding: var(--spacing-2);
}

.track {
  display: grid;
  grid-template-columns: 100% auto;
  transition: transform 0.25s ease;
}

.header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  width: 100%;
}

.file-link-header {
  font-size: 1rem;
  margin-bottom: var(--spacing-1);
}

.delete-button {
  color: var(--color-text-muted);
  display: flex;
}

.actions-container {
  background-color: var(--color-primary-dark);
  padding: 0 var(--spacing-4);
  display: flex;
  align-items: center;
  font-weight: 500;
}
</style>
