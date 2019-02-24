import { autoUpdater } from "electron-updater"
import log from "electron-log"

export function checkForUpdates() {
  autoUpdater.logger = log
  autoUpdater.logger.transports.file.level = "info"

  autoUpdater.checkForUpdatesAndNotify()
}
