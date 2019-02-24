import { app } from "electron"
import { showWindow } from "./windows"

import "../store"
import { subscribeOnApperanceChanges } from "./dark-mode"
import { registerBackgroundWorker } from "./background-worker"
import { registerGlobalShortcuts } from "./global-shortcuts"
import { createTrayIcon } from "./tray"
import { createApplicationMenu } from "./application-menu"
import { createContextMenu } from "./context-menu"
import { checkForUpdates } from "./auto-updater"

app.on("ready", () => {
  checkForUpdates()
  subscribeOnApperanceChanges()
  registerBackgroundWorker()
  registerGlobalShortcuts()
  createTrayIcon()
  createApplicationMenu()
  createContextMenu()

  showWindow("main")

  if (process.env.NODE_ENV !== "production") {
    import("electron-devtools-installer").then(({ default: installExtension, VUEJS_DEVTOOLS }) => {
      installExtension(VUEJS_DEVTOOLS)
    })
  }
})
