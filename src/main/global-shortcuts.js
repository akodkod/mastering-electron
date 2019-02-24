import { globalShortcut } from "electron"
import { showWindow } from "./windows"

export function registerGlobalShortcuts() {
  globalShortcut.register("CommandOrControl+Shift+D", () => {
    showWindow("main")
  })
}
