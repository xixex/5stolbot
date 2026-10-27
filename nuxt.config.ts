export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Моё меню — Стол № 5',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover' },
        { name: 'theme-color', content: '#f5f7f2' },
        { name: 'description', content: 'Личное меню, рецепты для мультиварки и список покупок' }
      ],
      script: [
        { src: 'https://telegram.org/js/telegram-web-app.js?64' }
      ]
    }
  },
  nitro: {
    preset: 'static'
  }
})
