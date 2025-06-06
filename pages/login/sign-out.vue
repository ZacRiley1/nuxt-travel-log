<script setup lang="ts">
const authStore = useAuthStore();

onMounted(() => {
  authStore.signOut();
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="card p-5 mx-auto bg-base-300 items-center justify-center ">
      <span class="loading loading-ring loading-xl" />
      <!-- <NuxtLink to="/" class="btn btn-primary">
        Go to Home
      </NuxtLink> -->
    </div>
  </div>
</template>

<style scoped>

</style>
