<script setup lang="ts">
import DropZone from '@/components/DropZone.vue'
import { addFile } from '@/lib/FileService'
import { useRouter } from 'vue-router'

const router = useRouter()

async function onFileSelected(file: File) {
  const fileModel = await addFile(file)
  router.push(`/file/${fileModel.id}`)
}
</script>

<template>
  <DropZone class="dropzone" @file-selected="onFileSelected" />
</template>
