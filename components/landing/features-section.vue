<script setup lang="ts">
import LandingFeatureCard from "~/components/landing/feature-card.vue"

const features = [
  { icon: "tabler:map-search", title: "Discover", text: "Find new places and hidden gems." },
  { icon: "tabler:bookmark", title: "Log Trips", text: "Save locations and memories to your travel diary." },
  { icon: "tabler:users", title: "Connect", text: "Share experiences with fellow travelers." },
]
</script>

<template>
  <section class="py-16 bg-base-200 text-base-content">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <LandingFeatureCard
          v-for="(f, i) in features"
          :key="i"
          :icon="f.icon"
          :title="f.title"
          :text="f.text"
        />
      </div>
    </div>
  </section>
</template>
