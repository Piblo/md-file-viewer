<script setup lang="ts">
import { ref } from 'vue'
import Button from './Button.vue'
import { FileUp } from 'lucide-vue-next'

const emit = defineEmits<{
  fileSelected: [file: File]
}>()

const inputRef = ref<HTMLInputElement>()
const isDraggingOver = ref(false)

function onClick() {
  inputRef.value?.click()
}

function onFileDrop(event: DragEvent) {
  isDraggingOver.value = false
  const file = event.dataTransfer?.files.item(0)
  if (!file) return

  emit('fileSelected', file)
}

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement
  const file = target.files?.item(0)

  if (!file) return

  emit('fileSelected', file)
  target.value = '' // Reset input value to allow re-selection of the same file
}
</script>

<template>
  <div>
    <div
      class="dropzone"
      :class="[{ dragOver: isDraggingOver }]"
      v-on:dragover.prevent="() => (isDraggingOver = true)"
      v-on:dragleave="() => (isDraggingOver = false)"
      v-on:drop.prevent="onFileDrop"
    >
      <FileUp class="icon" />
      <span
        >Drop your file here,
        <Button variant="link" @click="onClick">or click to browse</Button></span
      >
      <slot />
    </div>
    <input ref="inputRef" hidden type="file" accept=".md" @change="onFileChange" />
  </div>
</template>

<style scoped>
.dropzone {
  background-color: transparent;
  border: 2px dashed var(--color-neutral-dark);
  border-radius: 4px;
  color: var(--color-text);
  width: 100%;
  transition: border-color 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-4);
  height: 100%;
}

.dragOver {
  border-color: var(--color-primary);
}

.icon {
  color: var(--color-neutral);
  width: 80px;
  height: 80px;
  margin-bottom: var(--spacing-4);
}
</style>
