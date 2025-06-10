<script setup lang="ts">
defineProps<{
  title: string
  excerpt: string
  to: string
}>()
</script>

<template>
  <div class="card bg-base-300 shadow-md">
    <div class="card-body">
      <h3 class="card-title text-lg">{{ title }}</h3>
      <p class="text-sm opacity-70 mb-4">{{ excerpt }}</p>
      <NuxtLink :to="to" class="link link-primary text-sm">Read more →</NuxtLink>
    </div>
  </div>
</template>
