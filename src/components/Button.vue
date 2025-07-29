<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant: 'default' | 'link'
  }>(),
  {
    variant: 'default',
  },
)
</script>

<template>
  <button :class="props.variant"><slot /></button>
</template>

<style scoped>
button {
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-2) var(--spacing-4);
  border: none;
  border-radius: var(--spacing-1);
  font-weight: 500;
  cursor: pointer;
  transition:
    color 0.15s ease,
    background-color 0.15s ease;

  &:focus-visible {
    outline: 2px solid var(--color-primary-dark);
    outline-offset: 2px;
  }
}

.default {
  &:hover {
    background-color: var(--color-primary-dark);
  }
}

.link {
  padding: 0;
  background-color: transparent;
  color: var(--color-primary);
  text-decoration: underline;
  text-underline-offset: 0.2em;

  &:hover {
    color: var(--color-primary-dark);
  }
}
</style>
