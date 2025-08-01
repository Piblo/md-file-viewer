<script lang="ts" setup>
import MarkdownViewer from '@/components/MarkdownViewer.vue'
import { useRoute, useRouter } from 'vue-router'
import { useFileStore } from '@/stores/files'
import { computed, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const fileStore = useFileStore()
const file = computed(() => fileStore.getFile(route.params.id as string))

watch(file, async (newFile) => {
  if (!newFile) {
    router.push('/')
  }
})
</script>

<template>
  <MarkdownViewer v-if="file" :markdown="file.markdown" />
</template>
