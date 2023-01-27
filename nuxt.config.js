export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Nuxt Starter",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/axios"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next", "@nuxtjs/proxy"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  axios: {
    baseURL: "https://api.quwi.com/v2/",
    proxyHeaders: false,
    credentials: false,
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: "https://api.quwi.com/v2/",
    },
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        endpoints: {
          login: {
            url: "auth/login",
            method: "post",
            propertyName: "data.token",
          },
          user: false,
          logout: false,
        },
      },
    },
    redirect: {
      login: "/login",
      home: "/admin",
      logout: "/",
      callback: "/login",
    },
  },

  loading: {
    color: "#F6C042",
    height: "3px",
    throttle: 0,
    duration: 3000,
    continuous: true,
  },
};
