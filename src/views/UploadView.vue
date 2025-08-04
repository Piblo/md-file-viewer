<script setup lang="ts">
import DropZone from '@/components/DropZone.vue'
import { mapToFileModel } from '@/lib/FileService'
import { useFileStore } from '@/stores/files'
import { InfoIcon } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
const fileStore = useFileStore()

async function onFileSelected(file: File) {
  const fileModel = await mapToFileModel(file)
  fileStore.addFile(fileModel)
  router.push(`/file/${fileModel.id}`)
}
</script>

<template>
  <div class="container">
    <DropZone @file-selected="onFileSelected" class="dropzone-container">
      <div class="info-container">
        <InfoIcon width="1rem" height="1rem" />
        <p>Uploaded files are kept in local storage</p>
      </div>
    </DropZone>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  place-items: center;
  height: 100%;
  margin: 0 auto;
}

.dropzone-container {
  max-width: 60dvw;
  max-height: 300px;
  width: 100%;
  height: 100%;
}

.info-container {
  margin-top: var(--spacing-2);
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  color: var(--color-text-muted);
}
</style>
