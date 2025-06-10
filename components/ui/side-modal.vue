<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

function close() {
  emit("update:modelValue", false);
}
</script>

<template>
  <Transition name="side-modal">
    <div v-if="props.modelValue" class="fixed inset-0 z-20 flex">
      <!-- Background overlay -->
      <div
        class="absolute inset-0 bg-base-100/50 z-10"
        @click="close"
      />
      <!-- Modal panel -->
      <div
        class="ml-auto w-full max-w-md bg-base-300 h-full shadow-lg overflow-y-auto p-6 z-20 relative"
      >
        <slot />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.side-modal-enter-active,
.side-modal-leave-active {
  /* Both fade and slide at the same time */
  transition:
    opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.side-modal-enter-from,
.side-modal-leave-to {
  opacity: 0;
}
.side-modal-enter-to,
.side-modal-leave-from {
  opacity: 1;
}

/* Slide only the modal panel */
.side-modal-enter-from .ml-auto,
.side-modal-leave-to .ml-auto {
  transform: translateX(100%);
}
.side-modal-enter-to .ml-auto,
.side-modal-leave-from .ml-auto {
  transform: translateX(0);
}
</style>
