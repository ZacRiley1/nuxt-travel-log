<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="bg-base-200 card shadow-md border border-primary">
    <div class="flex items-center justify-between border-b border-base-100 px-4 py-3">
      <h2 class="font-semibold text-base-content text-lg">
        {{ title }}
      </h2>
      <button class="btn btn-ghost btn-xs text-base-content -mr-2 opacity-60 hover:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle
            cx="12"
            cy="5"
            r="1.5"
          />
          <circle
            cx="12"
            cy="12"
            r="1.5"
          />
          <circle
            cx="12"
            cy="19"
            r="1.5"
          />
        </svg>
      </button>
    </div>
    <div class="p-4">
      <slot />
    </div>
  </div>
</template>
