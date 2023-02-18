import eslintPlugin from 'vite-plugin-eslint';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  css: [
    '@/assets/scss/main.scss',
  ],
  vite: {
    plugins: [eslintPlugin()],
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@src/assets/scss/main.scss"',
        },
      },
    },
  },
  components: {
    global: true,
    dirs: [
      '~/components/general',
      '~/components/auth',
    ],
  },
  typescript: {
    strict: true,
  },
});
