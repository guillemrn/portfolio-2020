export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Guillermo Moreno | UI Designer & Frontend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "¡Welcome to my website! I'm Guillermo Moreno, UI Designer & Frontend Developer",
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://i.imgur.com/ZzkBAh3.png',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Advent+Pro&family=Fredoka+One&family=Major+Mono+Display&display=swap',
      },
    ],
  },
  ssr: false,
  loadingIndicator: {
    name: 'cube-grid',
    color: '#FF5D6C',
    background: '#F2FCFF',
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/main.css', '@/assets/css/style.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
    '@nuxtjs/color-mode',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['nuxt-i18n'],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        iso: 'en-US',
      },
      {
        code: 'es',
        name: 'Español',
        iso: 'es-MX',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
    defaultLocale: 'es',
    lazy: true,
    vueI18nLoader: true,
    vueI18n: {
      fallbackLocale: 'es',
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
