<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get: () => colorMode.value === "dark",
  set: (value) => {
    colorMode.preference = value ? "dark" : "light";
  },
});
</script>

<template>
  <label class="swap swap-rotate">
    <!-- this hidden checkbox controls the state -->
    <input
      v-model="isDark"
      type="checkbox"
      class="theme-controller"
      value="synthwave"
    >

    <!-- sun icon -->
    <!-- <Icon name="tabler:bulb-filled" class="swap-off h-11 w-11 text-base-content" /> -->
    <Icon name="tabler:bulb-filled" class="swap-off h-10 w-10 fill-current shadow-2xl" />

    <!-- moon icon -->
    <Icon name="tabler:bulb" class="swap-on h-10 w-10 fill-current" />

  </label>
</template>
