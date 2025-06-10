export default defineNuxtPlugin(async () => {
  const authStore = useAuthStore();
  const serverSession = useState<any>("session");
  await authStore.init(serverSession.value);
});
