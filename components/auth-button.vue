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
      <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
        <NuxtLink to="/login/sign-out" class="btn btn-primary">
          <Icon name="tabler:logout-2" /> Sign out
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>
