require("dotenv").config();
export default {
  mode: "universal",
  target: "server",
  head: {
    titleTemplate: `%s${process.env.APP_NAME}`,
    title: `%s${process.env.APP_NAME}` || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2005477_94rulyvb8el.css"
      }
    ]
  },
  loading: false,
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "./assets/index.css",
    "bootstrap/dist/css/bootstrap.css",
    "bootstrap-vue/dist/bootstrap-vue.css"
  ],
  plugins: [
    "@/plugins/element-ui",
    "@/plugins/Bootstrap",
    "~/plugins/font-awesome.js"
  ],
  components: true,
  buildModules: [],
  modules: ["@nuxtjs/axios", "nuxt-fontawesome"],
  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      },
      {
        set: "@fortawesome/free-regular-svg-icons",
        icons: ["far"]
      },
      {
        set: "@fortawesome/free-brands-svg-icons",
        icons: ["fab"]
      }
    ]
  },
  axios: {},
  build: {
    transpile: [/^element-ui/]
  }
};
