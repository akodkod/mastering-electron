import { app } from "electron"
import { showWindow } from "./windows"

import "../store"
import { subscribeOnApperanceChanges } from "./dark-mode"
import { registerBackgroundWorker } from "./background-worker"

app.on("ready", () => {
  subscribeOnApperanceChanges()
  registerBackgroundWorker()

  showWindow("main")

  if (process.env.NODE_ENV !== "production") {
    import("electron-devtools-installer").then(({ default: installExtension, VUEJS_DEVTOOLS }) => {
      installExtension(VUEJS_DEVTOOLS)
    })
  }
})
