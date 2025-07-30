<script lang="ts" setup>
import MarkdownViewer from '@/components/MarkdownViewer.vue'
import { useRoute } from 'vue-router'
import { useFileStore } from '@/stores/files'

const route = useRoute()
const fileStore = useFileStore()
const file = fileStore.getFile(route.params.id as string)
</script>

<template>
  <MarkdownViewer :markdown="file.markdown" />
</template>
