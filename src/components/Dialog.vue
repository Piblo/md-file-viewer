<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { XIcon } from 'lucide-vue-next'
import {
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTrigger,
  DialogClose,
} from 'reka-ui'
</script>

<template>
  <DialogRoot>
    <DialogTrigger>
      <slot name="trigger" />
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="overlay">
        <DialogContent class="content">
          <div class="close-button-container">
            <DialogClose class="close-button"><XIcon width="1rem" height="1rem" /></DialogClose>
          </div>
          <slot />
        </DialogContent>
      </DialogOverlay>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
}

.content {
  padding: var(--spacing-4);
  background-color: var(--color-background);
  border-radius: 4px;
  border: 1px solid var(--color-neutral-darker);
}

.close-button-container {
  display: flex;
  justify-content: flex-end;
}

.close-button {
  background: none;
  border: none;
  color: var(--color-text);
  padding: 2px;
  cursor: pointer;
  display: flex;
}
</style>
