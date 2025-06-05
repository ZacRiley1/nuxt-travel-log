<script setup lang="ts">
import { computed } from "vue";

import PillContainer from "../pill-container.vue";

const props = defineProps({
  showBorder: {
    type: Boolean,
    default: true,
  },
  position: {
    type: String as () =>
      | "top-left"
      | "top-right"
      | "top-center"
      | "bottom-left"
      | "bottom-right"
      | "bottom-center",
    default: "top-center",
  },
  colors: {
    type: Array as () => string[],
    default: () => [
      "var(--color-primary)",
      "var(--color-secondary)",
      "var(--color-accent)",
      "var(--color-info)",
      "var(--color-primary)",
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
    default: 4000,
  },
});

const positionMap = {
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 right-4",
};

const wrapperClass = computed(() => `fixed z-50 ${positionMap[props.position]}`);
</script>

<template>
  <div :class="wrapperClass">
    <PillContainer
      width="s"
      height="s"
      position="center"
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
