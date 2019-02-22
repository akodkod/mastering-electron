import { showWindow, hideWindow, closeWindow } from "../../../main/windows"

export default {
  showWindow(store, name) {
    showWindow(name)
  },

  hideWindow(store, name) {
    hideWindow(name)
  },

  closeWindow(store, name) {
    closeWindow(name)
  }
}
