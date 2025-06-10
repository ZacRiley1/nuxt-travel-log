<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  transition-property: color, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
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
