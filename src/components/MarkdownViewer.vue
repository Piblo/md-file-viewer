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
  <div class="markdown-content" v-html="content" />
</template>

<style>
.markdown-content {
  max-width: 100ch;
  margin: 0 auto;

  h1 {
    margin-bottom: var(--spacing-4);
  }

  h2 {
    margin-bottom: var(--spacing-3);
  }

  h3,
  h4,
  h5,
  h6 {
    margin-bottom: var(--spacing-2);
  }

  ul,
  ol,
  p {
    margin-bottom: var(--spacing-2);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  code {
    background-color: var(--color-neutral-dark);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
  }

  pre code {
    display: block;
    margin-bottom: var(--spacing-4);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: var(--spacing-4);
    background: var(--color-background);
  }

  th,
  td {
    border: 1px solid var(--color-neutral-dark);
    padding: 0.5rem 1rem;
    text-align: left;
  }

  th {
    font-weight: bold;
  }

  blockquote {
    border-left: 4px solid var(--color-primary-dark);
    padding-left: 1rem;
    color: var(--color-text-muted);
    margin: var(--spacing-4) 0;
  }
}
</style>
