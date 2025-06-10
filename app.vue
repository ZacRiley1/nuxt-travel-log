<template>
  <NuxtLayout>
    <NuxtPage />
  </Nuxtlayout>
</template>

<style>
* {
  transition: all 0.2s ease;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
