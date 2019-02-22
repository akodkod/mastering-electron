import _ from "lodash"
import { Notification } from "electron"

import store from "../store"

let backgroundWorker = null

export function registerBackgroundWorker() {
  if (backgroundWorker) return

  backgroundWorker = setInterval(processJob, 1000)
}

function processJob() {
  let currentTime = new Date().getTime() / 1000

  _.each(store.getters.itemsToRemind(currentTime), (item) => {
    let notification = new Notification({
      title: "Doist",
      body: item.text
    })

    notification.show()
    store.dispatch("markItemAsReminded", item.id)
  })
}
