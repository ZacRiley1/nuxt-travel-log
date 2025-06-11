<script setup lang="ts">
const photos = [
  { url: "/img/tokyo.jpg", caption: "Rooftop view, Lisbon" },
  { url: "/img/tokyo.jpg", caption: "Shibuya Crossing at night" },
  { url: "/img/tokyo.jpg", caption: "Glacier hike in Iceland" },
];
</script>

<template>
  <section class="p-6 space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">
        Travel Gallery
      </h1>
      <button class="btn btn-secondary">
        <Icon name="tabler:upload" class="mr-2" /> Upload Photo
      </button>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="photo in photos"
        :key="photo.url"
        class="card bg-base-300 shadow-sm"
      >
        <figure>
          <img
            :src="photo.url"
            :alt="photo.caption"
            class="h-48 w-full object-cover"
          >
        </figure>
        <div class="card-body p-4">
          <p class="text-sm">
            {{ photo.caption }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
