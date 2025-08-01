<script lang="ts" setup>
import MarkdownViewer from '@/components/MarkdownViewer.vue'
import { useRoute, useRouter } from 'vue-router'
import { useFileStore } from '@/stores/files'

const route = useRoute()
const router = useRouter()
const fileStore = useFileStore()
const file = fileStore.getFile(route.params.id as string)

fileStore.$onAction(({ name, args, after }) => {
  if (name === 'deleteFile' && args[0] === route.params.id) {
    after(() => {
      router.push('/')
    })
  }
})
</script>

<template>
  <MarkdownViewer v-if="file" :markdown="file.markdown" />
</template>
