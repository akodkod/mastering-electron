import Vue from "vue"
import Router from "vue-router"

import { Main, Settings } from "@/screens"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/main",
      name: "main",
      component: Main
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    }
  ]
})
