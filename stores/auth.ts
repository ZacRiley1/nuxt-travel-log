import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = ref<Awaited<ReturnType<typeof authClient.useSession>> | null>(null);

  function setSession(data: Awaited<ReturnType<typeof authClient.useSession>> | null) {
    session.value = data;
  }

  async function init(initial?: any) {
    if (initial) {
      session.value = { data: initial, isPending: false } as any;
      return;
    }
    const data = await authClient.useSession(useFetch);
    session.value = data;
  }
  const user = computed(() => session.value?.data?.user);
  const loading = computed(() => session.value?.isPending);

  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    session.value = null;
    navigateTo("/");
  }

  return {
    init,
    setSession,
    user,
    loading,
    signIn,
    signOut,
  };
});
