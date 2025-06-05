<template>
  <div class="flex flex-col gap-5 min-h-screen bg-base-200 text-base-content">
    <div
      class="hero w-full min-h-screen relative lg:min-h-0 lg:h-[700px] bg-cover bg-center"
      style="background-image: url('/img/forest.jpg');"
    >
      <div class="hero-overlay bg-black/60" />
      <div class="hero-content text-neutral-content text-center">
        <div class="max-w-xl px-4">
          <h1 class="mb-6 text-5xl font-bold text-white">
            Explore More. <span class="text-secondary">Forget Less.</span>
          </h1>
          <p class="mb-6 text-lg text-white/80">
            Nomio is your digital companion for logging trips, saving memories, and connecting with travelers across the world.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button class="btn btn-primary">
              Start Your Journey
            </button>
            <button class="btn btn-ghost border-white text-white hover:bg-white hover:text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div class="container mx-auto absolute bottom-20 left-0 right-0 p-4">
        <UiBanner
          :animated="true"
          :dismissable="true"
          :show-border="true"
        >
          <div class="flex items-center gap-2 text-sm font-semibold text-primary-content">
            <span>🚨</span>
            <span>Nomio is now live in 20+ countries! Start logging your trip.</span>
          </div>
        </UiBanner>
      </div>
    </div>
  </div>
</template>
