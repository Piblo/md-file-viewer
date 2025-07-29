<script lang="ts" setup>
import MarkdownViewer from '@/components/MarkdownViewer.vue'
import { getFile } from '@/lib/FileService'
import { useRoute } from 'vue-router'

const route = useRoute()
const file = getFile(route.params.id as string)
</script>

<template>
  <MarkdownViewer :markdown="file.markdown" />
</template>
