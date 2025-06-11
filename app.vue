<script setup lang="ts">
const route = useRoute();
const layout = computed(() => {
  if (route.path.startsWith("/dashboard"))
    return "dashboard";
  if (
    route.path.startsWith("/articles")
    || route.path.startsWith("/guides")
    // add more as needed
  ) {
    return "content";
  }
  return "default";
});
</script>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  transition: all 0.2s ease-in-out;
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity, filter;
  transition-duration: 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition-property: filter;
  transition-duration: 0.2s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
