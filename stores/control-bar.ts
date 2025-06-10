export const useControlBarStore = defineStore("controlBarStore", () => {
  const isOpen = ref(true);

  function toggleOpen() {
    isOpen.value = !isOpen.value;
  }

  return {
    isOpen,
    toggleOpen,
  };
});
