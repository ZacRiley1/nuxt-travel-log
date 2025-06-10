<script setup lang="ts">
import LandingArticleCard from "~/components/landing/article-card.vue"

const articles = [
  {
    title: "Top 10 Destinations for 2025",
    excerpt: "Plan your next adventure with our guide to the best spots for digital nomads.",
    to: "/articles/top-10-destinations-2025",
  },
  {
    title: "Packing Tips for Long Trips",
    excerpt: "Learn how to pack light without forgetting the essentials.",
    to: "/articles/packing-tips",
  },
  {
    title: "How to Stay Productive on the Road",
    excerpt: "Our favorite productivity hacks for working while travelling.",
    to: "/articles/stay-productive",
  },
]
</script>

<template>
  <section class="py-16 bg-base-100 text-base-content">
    <div class="container mx-auto px-4 space-y-6">
      <h2 class="text-2xl font-bold text-center">From the Blog</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <LandingArticleCard
          v-for="(a, i) in articles"
          :key="i"
          :title="a.title"
          :excerpt="a.excerpt"
          :to="a.to"
        />
      </div>
    </div>
  </section>
</template>
