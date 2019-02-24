import _ from "lodash"
import uuidv4 from "uuid/v4"

export default {
  addItem(store, attributes) {
    attributes.id = uuidv4()
    attributes.done = false
    attributes.createdAt = new Date()

    store.commit("addItem", { attributes })
  },

  addItems(store, string) {
    let texts = string.split(/\r?\n/)

    _.each(texts, (originalText) => {
      let text = _.trim(originalText)

      if (text.length) {
        store.dispatch("addItem", { text })
      }
    })
  },

  updateItem(store, payload) {
    store.commit("updateItem", payload)
  },

  markAllItemsAsDone(store) {
    let itemsIds = _.map(store.getters.itemsToDo, "id")
    let attributes = { done: true }

    _.each(itemsIds, (id) => {
      store.commit("updateItem", {
        id,
        attributes
      })
    })
  },

  markItemAsReminded(store, itemId) {
    store.commit("updateItem", {
      id: itemId,
      attributes: { reminded: true }
    })
  },

  deleteItem(store, itemId) {
    store.commit("deleteItem", { id: itemId })
  },

  deleteAllItems(store) {
    let itemsIds = _.map(store.state, "id")

    _.each(itemsIds, (id) => {
      store.commit("deleteItem", { id })
    })
  },

  deleteDoneItems(store) {
    let itemsIds = _.map(store.getters.itemsDone, "id")

    _.each(itemsIds, (id) => {
      store.commit("deleteItem", { id })
    })
  }
}
