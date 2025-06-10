<script setup lang="ts">
defineProps<{
  link: any;
  sidebarIsOpen: boolean;
  routePath: string;
}>();
</script>

<template>
  <div
    class="flex flex-col tooltip tooltip-right"
    :data-tip="!sidebarIsOpen ? link.text : ''"
  >
    <NuxtLink
      :to="link.to"
      class="btn btn-ghost justify-start text-primary-content hover:bg-base300/60"
      :class="[sidebarIsOpen ? 'w-full' : 'p-3', routePath === link.to ? 'bg-base-300/60' : '']"
      active-class="bg-base-300/60"
    >
      <Icon
        :name="link.icon"
        class="w-5 h-5"
      />
      <span v-if="sidebarIsOpen" class="text-nowrap">{{ link.text }}</span>
    </NuxtLink>
  </div>
</template>
