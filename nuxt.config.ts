// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  runtimeConfig: {
    public: {
      dbName: process.env.DB_NAME || 'nuxt_todo_db',
    }
  },
  app: {
    baseURL: '/nuxt-todo-app',
  },
})