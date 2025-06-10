export const useControlBarStore = defineStore("controlBarStore", () => {
  const isOpen = ref(true);

  onMounted(() => {
    const storedValue = localStorage.getItem("sideBarOpen");
    if (storedValue !== null) {
      isOpen.value = JSON.parse(storedValue);
    }
  });

  function toggleOpen() {
    isOpen.value = !isOpen.value;
    localStorage.setItem("sideBarOpen", JSON.stringify(isOpen.value));
  }

  return {
    isOpen,
    toggleOpen,
  };
});
