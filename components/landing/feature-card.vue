<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  text: string
}>()
</script>

<template>
  <div class="flex flex-col items-center p-4 text-center space-y-2">
    <Icon :name="icon" class="w-10 h-10 text-primary" />
    <h3 class="text-lg font-semibold">{{ title }}</h3>
    <p class="text-sm opacity-70">{{ text }}</p>
  </div>
</template>
