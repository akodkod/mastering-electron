import { nativeImage, Menu, Tray } from "electron"

import { showWindow, hideWindow, windowIsVisible } from "./windows"
// import config from "../utils/config"

import icon1x from "../resources/tray-icon.png"
import icon2x from "../resources/tray-icon@2x.png"
import icon3x from "../resources/tray-icon@3x.png"

let tray = null

export function createTrayIcon() {
  const icon = nativeImage.createEmpty()

  icon.addRepresentation({ scaleFactor: 1, width: 22, height: 22, dataURL: icon1x })
  icon.addRepresentation({ scaleFactor: 2, width: 44, height: 44, dataURL: icon2x })
  icon.addRepresentation({ scaleFactor: 3, width: 66, height: 66, dataURL: icon3x })

  tray = new Tray(icon)
  tray.setToolTip("Time to do something great!")

  tray.on("click", () => {
    if (windowIsVisible("main")) {
      hideWindow("main")
    } else {
      showWindow("main")
    }
  })

  const menu = Menu.buildFromTemplate([{ label: "Doist" }, { type: "separator" }, { label: "Quit", role: "quit" }])

  tray.on("right-click", () => {
    tray.popUpContextMenu(menu)
  })
}
