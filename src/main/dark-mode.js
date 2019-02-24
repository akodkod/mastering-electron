import { systemPreferences } from "electron"
import store from "../store"

export function subscribeOnApperanceChanges() {
  if (!store.state.settings.automaticallyChangeTheme) return

  updateTheme()
  systemPreferences.subscribeNotification("AppleInterfaceThemeChangedNotification", updateTheme)
}

function updateTheme() {
  let theme = systemPreferences.isDarkMode() ? "dark" : "light"

  store.dispatch("updateSetting", {
    key: "theme",
    value: theme
  })
}
