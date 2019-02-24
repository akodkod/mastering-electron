import { TouchBar } from "electron"
import store from "../store"

export function createTouchBar() {
  let spacer = new TouchBar.TouchBarSpacer({ size: "large" })
  let label = new TouchBar.TouchBarLabel({ label: "To Infinity And Beyond" })

  let button1 = new TouchBar.TouchBarButton({
    label: "Mark all as done",
    click: () => store.dispatch("markAllItemsAsDone")
  })

  let button2 = new TouchBar.TouchBarButton({
    label: "Remove all items",
    click: () => store.dispatch("deleteAllItems")
  })

  let touchBar = new TouchBar({
    items: [spacer, label, spacer, button1, button2]
  })

  return touchBar
}
