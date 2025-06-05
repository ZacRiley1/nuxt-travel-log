import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  components: true,
  modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode"],
  css: ["~/assets/css/main.css"],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
    plugins: [
      tailwindcss(),
    ],
  },
  colorMode: {
    dataValue: "theme",
    preference: "system", // Default to system preference
    fallback: "light", // Fallback to light mode
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
});
