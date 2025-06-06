<script setup lang="ts">
const route = useRoute();
const error = route.query.error as string || "An unexpected error occurred.";
</script>

<template>
  <div class="flex flex-col items-center justify-start mt-20 h-screen p-4">
    <UiBanner
      surface="error"
      :animated="false"
      :dismissable="false"
      :show-border="false"
    >
      <div class="flex items-center gap-2 text-sm font-semibold text-primary-content">
        <span>🚨</span>
        <span>{{ error }}</span>
      </div>
    </UiBanner>
  </div>
</template>

<style lang="scss" scoped>

</style>
