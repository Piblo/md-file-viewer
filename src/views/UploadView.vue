<script setup lang="ts">
import DropZone from '@/components/DropZone.vue'
import { mapToFileModel } from '@/lib/FileService'
import { useFileStore } from '@/stores/files'
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
  <DropZone class="dropzone" @file-selected="onFileSelected" />
</template>
