<script setup lang="ts">
import PillContainer from "../pill-container.vue";

defineProps({
  showBorder: {
    type: Boolean,
    default: true,
  },
  colors: {
    type: Array as () => string[],
    default: () => [
      "var(--color-secondary)",
      "oklch(0 0 0 / 0);",
      "var(--color-success)",
      "oklch(0 0 0 / 0);",
      "var(--color-accent)",
    ],
  },
  surface: {
    type: String,
    default: "canvas",
  },
  animated: Boolean,
  dismissable: Boolean,
  duration: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="w-full">
    <PillContainer
      width="s"
      height="s"
      position="center"
      :surface="surface"
      full
      :colors="colors"
      :animated="animated"
      :dismissable="dismissable"
      :duration="duration"
      :show-border="showBorder"
    >
      <div class="flex items-center gap-2 text-sm font-medium text-primary-content">
        <slot />
      </div>
    </PillContainer>
  </div>
</template>

<style scoped>
</style>
