import url from "url"
import path from "path"
import deepExtend from "deep-extend"
import { BrowserWindow } from "electron"

export const windows = {
  main: null,
  settings: null
}

export const windowsParameters = {
  main: {
    url: "#/main",
    showWhenReady: true,
    hideOnBlur: false,
    hideOnClose: true,
    openDevTools: true,

    browserWindow: {
      width: 400,
      height: 600,
      minWidth: 400,
      minHeight: 400,
      show: false,
      backgroundColor: "#fff",
      titleBarStyle: "hiddenInset",
      webPreferences: {
        nodeIntegration: true
      }
    }
  },

  settings: {
    url: "#/settings",
    showWhenReady: true,
    hideOnBlur: false,
    hideOnClose: false,
    openDevTools: true,

    browserWindow: {
      width: 400,
      height: 400,
      minWidth: 400,
      minHeight: 400,
      show: false,
      backgroundColor: "#fff",
      titleBarStyle: "hiddenInset",
      webPreferences: {
        nodeIntegration: true
      }
    }
  }
}

let applicationURL = null

if (process.env.NODE_ENV === "development") {
  applicationURL = "http://localhost:8080/"
} else {
  applicationURL = url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file",
    slashes: true
  })
}

/**
 * Create a window based on parameters
 *
 * @param {string} name
 * @param {object} overrideParameters
 */
export function createWindow(name, overrideParameters = {}) {
  let parameters = deepExtend(windowsParameters[name], overrideParameters)
  let window = new BrowserWindow(parameters.browserWindow)

  window.loadURL(`${applicationURL}${parameters.url}`)

  if (parameters.openDevTools && process.env.NODE_ENV !== "production") {
    window.webContents.openDevTools()
  }

  if (parameters.showWhenReady) {
    window.once("ready-to-show", () => {
      window.show()
    })
  }

  if (parameters.hideOnBlur) {
    window.on("blur", () => {
      window.hide()
    })
  }

  window.on("closed", () => {
    windows[name] = window = null
  })

  windows[name] = window
}

/**
 * Show window or create a new one if isn't exist
 *
 * @param {string} name - window name
 * @param {number} x - x-coordinate at screen
 * @param {number} y - x-coordinate at screen
 * @param {object} overrideParameters
 */
export function showWindow(name, overrideParameters = {}) {
  if (windows[name]) {
    windows[name].show()
  } else {
    createWindow(name, deepExtend(overrideParameters, { showWhenReady: true }))
  }
}

/**
 * Hide window if exists
 *
 * @param {string} name - window name
 */
export function hideWindow(name) {
  windows[name] && windows[name].hide()
}

/**
 * Close window if exists
 *
 * @param {string} name - window name
 */
export function closeWindow(name) {
  windows[name] && windows[name].close()
}

/**
 * Check window visibility
 *
 * @param {string} name - window name
 * @returns {boolean}
 */
export function windowIsVisible(name) {
  return !!(windows[name] && windows[name].isVisible())
}
