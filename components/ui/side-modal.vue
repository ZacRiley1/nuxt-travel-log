<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

function close() {
  emit('update:modelValue', false);
}
</script>

<template>
  <Transition name="slide">
    <div v-if="props.modelValue" class="fixed inset-0 z-50 flex">
      <div class="absolute inset-0 bg-black/50" @click="close" />
      <div class="ml-auto w-full max-w-md bg-base-100 h-full shadow-lg overflow-y-auto p-6">
        <slot />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
