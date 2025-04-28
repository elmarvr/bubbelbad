import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "reka-ui/nuxt",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "@nuxthub/core",
  ],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    typedPages: true,
  },
  reka: {
    prefix: "Reka",
  },
  i18n: {
    langDir: "../app/lang",
    locales: [
      {
        code: "en",
        language: "English",
        file: "en.json",
      },
      {
        code: "nl",
        language: "Nederlands",
        file: "nl.json",
      },
    ],
    defaultLocale: "en",
    types: "composition",
    experimental: {
      typedOptionsAndMessages: "all",
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
  fonts: {
    families: [
      {
        name: "Clash Display",
        provider: "fontshare",
        weights: [400, 500, 600, 700, 800, 900],
      },
    ],
  },
  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
  },
});
