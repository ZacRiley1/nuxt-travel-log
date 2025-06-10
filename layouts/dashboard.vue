<script setup lang="ts">
const sidebar = useControlBarStore();
const authStore = useAuthStore();
await authStore.init();
</script>

<template>
  <div class="min-h-screen bg-base-100/70 text-base-content flex">
    <!-- Sidebar -->
    <AppSidebar />
    <!-- Main Content -->
    <main :class="sidebar.isOpen ? 'md:pl-52' : 'md:pl-10'" class="flex-1 flex flex-col transition-all duration-300 bg-base-100">
      <slot />
    </main>
  </div>
</template>
