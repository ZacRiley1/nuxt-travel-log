<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <button
    v-if="!authStore.user"
    :disabled="authStore.loading"
    class="btn btn-primary btn-sm"
    @click="authStore.signIn"
  >
    <span v-if="authStore.loading" class="loading loading-ring loading-md" />
    <span v-else>
      <Icon

        name="tabler-brand-github"
        class="inline-block mr-2"
      />
      Login
    </span>
  </button>
  <div v-else>
    <div class="dropdown dropdown-end">
      <div
        v-if="authStore.user.image"
        class="avatar"
        tabindex="0"
        role="button"
      >
        <div class="ring-secondary ring-offset-base-100 w-6 rounded-full ring-1 ring-offset-1">
          <img :src="authStore.user?.image">
        </div>
      </div>

      <ul tabindex="0" class="card dropdown-content border border-primary menu bg-base-200 z-1 p-2 shadow-sm">
        <AppThemeToggle class="btn btn-ghost mb-2" />

        <NuxtLink to="/dashboard" class="btn btn-ghost mb-2">
          <Icon name="tabler:user-filled" /> Account
        </NuxtLink>
        <NuxtLink to="/login/sign-out" class="btn btn-ghost">
          <Icon name="tabler:logout-2" /><span class="text-nowrap">Sign out</span>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>
