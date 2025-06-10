<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  username: { type: String, default: "Zach Q." },
  location: { type: String, default: "Liverpool, UK" },
});

const initials = computed(() =>
  props.username
    .split(" ")
    .map(n => n[0])
    .join(""),
);
</script>

<template>
  <div class="relative w-full flex items-center gap-3 px-1 m-2 p-3 rounded-lg bg-base-200/60 dark:bg-base-300/60">
    <div class="flex flex-col px-2">
      <span class="font-semibold text-sm text-base-content">{{ initials }}</span>
      <span class="text-xs text-base-content/60 flex items-center gap-1">
        <Icon name="tabler:map-pin" class="w-4 h-4 text-base-content" />
        {{ location }}
      </span>
    </div>
    <AuthButton class="absolute m-2 top-0 end-0" />
  </div>
</template>
