<script setup lang="ts">
const locations = [
  { name: "Lisbon, Portugal", date: "2025-05-22", notes: "Nomad base for summer" },
  { name: "Tokyo, Japan", date: "2025-04-12", notes: "Cherry blossom trip" },
  { name: "Reykjavik, Iceland", date: "2025-01-03", notes: "Northern lights" },
];

definePageMeta({
  layout: "dashboard", // corresponds to layouts/dashboard.vue
});
</script>

<template>
  <section class="p-6 space-y-6">
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">
        Saved Locations
      </h1>
      <button class="btn btn-secondary">
        <Icon name="tabler:plus" class="mr-2" /> Add Location
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="loc in locations"
        :key="loc.name"
        class="card shadow-md bg-base-300"
      >
        <div class="card-body">
          <h2 class="card-title">
            <i class="bi bi-geo-alt-fill text-primary" />
            {{ loc.name }}
          </h2>
          <p class="text-sm text-muted">
            {{ loc.date }}
          </p>
          <p>{{ loc.notes }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-outline btn-sm">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
