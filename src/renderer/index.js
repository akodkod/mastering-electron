import Vue from "vue"
import Antd from "ant-design-vue"
import { App } from "@/screens"

import router from "./router"
import store from "../store"

Vue.use(Antd)

new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App)
})
