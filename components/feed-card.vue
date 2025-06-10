<script setup>
defineProps({
  username: String,
  location: String,
  time: String,
  text: String,
  image: String,
});
</script>

<template>
  <div class="bg-base-300 card p-4 shadow-sm">
    <div class="flex justify-between items-center text-sm text-base-content/60 mb-2">
      <span><strong>{{ username }}</strong> • {{ location }}</span>
      <span>{{ time }}</span>
    </div>
    <p class="text-base text-base-content">
      {{ text }}
    </p>
    <img
      v-if="image"
      :src="image"
      class="mt-3 rounded-md max-h-48 object-cover w-full"
    >
  </div>
</template>
