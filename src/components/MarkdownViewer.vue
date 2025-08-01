<script lang="ts" setup>
import markdownit from 'markdown-it'
import { ref } from 'vue'

const props = defineProps<{
  markdown: string
}>()

const md = markdownit({
  linkify: true,
})

const content = ref(md.render(props.markdown))
</script>

<template>
  <div v-html="content" />
</template>
