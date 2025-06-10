import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config

import "./lib/env";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  components: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
    },
    plugins: [
      tailwindcss({ config: './tailwind.config.ts' }),
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
