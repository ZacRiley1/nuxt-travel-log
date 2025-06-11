<script setup>
defineProps({
  title: String,
  value: [String, Number],
});
</script>

<template>
  <div class="flex items-center justify-between bg-base-200 card p-3 text-sm">
    <span class="text-base-content/70">{{ title }}</span>
    <span class="font-bold text-base text-base-content">{{ value }}</span>
  </div>
</template>
