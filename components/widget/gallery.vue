<script setup lang="ts">
const photos = [
  { url: "/img/tokyo.jpg", caption: "Lisbon rooftop" },
  { url: "/img/tokyo.jpg", caption: "Tokyo night" },
  { url: "/img/tokyo.jpg", caption: "Iceland glacier" },
];
</script>

<template>
  <UiDashboardCard title="Gallery">
    <div class="grid grid-cols-3 gap-2 mt-2">
      <img
        v-for="photo in photos"
        :key="photo.url"
        :src="photo.url"
        :alt="photo.caption"
        class="h-16 w-full object-cover rounded-box"
      >
      <div class="card-actions justify-end mt-3">
        <NuxtLink to="/dashboard/gallery" class="link link-base-content text-sm">
          View all →
        </NuxtLink>
      </div>
    </div>
  </UiDashboardCard>
</template>
