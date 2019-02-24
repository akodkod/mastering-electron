import _ from "lodash"
import { clipboard } from "electron"
import contextMenu from "electron-context-menu"

import store from "../store"

export function createContextMenu() {
  contextMenu({
    prepend(params) {
      let menu = []

      if (params.pageURL.includes("#/main")) {
        menu = menu.concat([
          {
            label: "Mark all as done",
            click: () => store.dispatch("markAllItemsAsDone")
          },
          {
            label: "Remove all items",
            click: () => store.dispatch("deleteAllItems")
          }
        ])

        let clipboardText = clipboard.readText()

        if (clipboardText.length) {
          menu = menu.concat([
            {
              label: "Insert from clipboard",
              click: () => store.dispatch("addItems", clipboardText)
            }
          ])
        }
      }

      return menu
    }
  })
}
