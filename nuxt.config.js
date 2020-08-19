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
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: false,
  css: ["element-ui/lib/theme-chalk/index.css", "./assets/index.css"],
  plugins: ["@/plugins/element-ui"],
  components: true,
  buildModules: [],
  modules: ["@nuxtjs/axios"],
  axios: {},
  build: {
    transpile: [/^element-ui/]
  }
};
