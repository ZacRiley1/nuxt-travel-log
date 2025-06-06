<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <button
    :disabled="authStore.loading"
    class="btn btn-primary"
    @click="authStore.signIn"
  >
    <span v-if="authStore.loading" class="loading loading-ring loading-md" />
    <Icon
      v-else
      name="tabler-brand-github"
      class="inline-block mr-2"
    />
    Sign in with GitHub
  </button>
</template>
