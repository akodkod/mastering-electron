import { app, Menu } from "electron"

import store from "../store"
import { checkForUpdates } from "./auto-updater"

export function createApplicationMenu() {
  let template = []

  if (process.platform === "darwin") {
    template.push({
      label: app.getName(),
      submenu: [
        { role: "about" },
        { label: "Check for Updates", click: () => checkForUpdates() },
        { type: "separator" },
        { role: "services" },
        { type: "separator" },
        { role: "hide" },
        { role: "hideothers" },
        { role: "unhide" },
        { type: "separator" },
        { role: "quit" }
      ]
    })
  }

  template.push({
    label: "Items",
    submenu: [
      {
        label: "Mark all as done",
        accelerator: "CmdOrCtrl+D",
        click: () => store.dispatch("markAllItemsAsDone")
      },
      {
        label: "Delete done items",
        click: () => store.dispatch("deleteDoneItems")
      },
      {
        label: "Delete all items",
        click: () => store.dispatch("deleteAllItems")
      }
    ]
  })

  let menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}
