<script lang="ts" setup>
const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div class="relative overflow-x-hidden">
    <UiToast
      position="top-center"
      :animated="false"
      :dismissable="true"
      :duration="5000"
      :show-border="true"
    >
      <div class="flex items-center gap-2 text-sm font-medium text-black dark:text-white">
        <span>🌍</span>
        <span>You just checked in at Lisbon!</span>
      </div>
    </UiToast>

    <AppNavBar />
    <main class="max-w-screen mx-auto">
      <slot />
    </main>
  </div>
</template>
