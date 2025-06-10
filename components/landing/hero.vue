<script setup lang="ts">
defineProps({
  background: { type: String, default: '/img/forest.jpg' },
  heading: { type: String, default: 'Explore More.' },
  highlight: { type: String, default: 'Forget Less.' },
  tagline: {
    type: String,
    default:
      'Nomio is your digital companion for logging trips, saving memories, and connecting with travelers across the world.',
  },
  bannerText: {
    type: String,
    default: 'Nomio is now live in 20+ countries! Start logging your trip.',
  },
})
</script>

<template>
  <section
    class="hero w-full min-h-screen relative lg:min-h-0 lg:h-[700px] bg-cover bg-center"
    :style="{ backgroundImage: `url('${background}')` }"
  >
    <div class="hero-overlay bg-neutral-900/60" />
    <div class="hero-content text-neutral-content text-center">
      <div class="max-w-xl px-4">
        <h1 class="mb-6 text-5xl font-bold text-white">
          {{ heading }} <span class="text-secondary">{{ highlight }}</span>
        </h1>
        <p class="mb-6 text-lg text-white/80">
          {{ tagline }}
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink to="/dashboard" class="btn btn-base normal-case text-m text-base-content gap-2">
            Start Your Journey
          </NuxtLink>
          <button class="btn btn-ghost border-white text-white hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
      </div>
    </div>
    <div class="container mx-auto absolute bottom-20 left-0 right-0 p-4">
      <UiBanner :animated="true" :dismissable="true" :show-border="true">
        <div class="flex items-center gap-2 text-sm font-semibold text-primary-content">
          <span>🚨</span>
          <span>{{ bannerText }}</span>
        </div>
      </UiBanner>
    </div>
  </section>
</template>
