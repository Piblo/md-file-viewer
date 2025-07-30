<script lang="ts" setup>
const props = defineProps<{
  to: string
}>()
</script>

<template>
  <RouterLink :to="props.to" class="nav-link" active-class="active"><slot /></RouterLink>
</template>

<style scoped>
.nav-link {
  display: flex;
  align-items: center;
  color: var(--color-neutral-light);
  text-decoration: none;
  border-radius: 8px;
  outline: none;
  font-size: 1rem;

  &:hover,
  &:focus-visible {
    background-color: var(--color-neutral-dark);
  }
}

.active {
  background-color: var(--color-neutral-darker);
}
</style>
