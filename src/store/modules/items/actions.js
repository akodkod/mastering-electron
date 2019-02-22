import uuidv4 from "uuid/v4"

export default {
  addItem(store, attributes) {
    attributes.id = uuidv4()
    attributes.done = false
    attributes.createdAt = new Date()

    store.commit("addItem", { attributes })
  },

  markItemAsDone(store, itemId) {
    store.commit("updateItem", {
      id: itemId,
      attributes: { done: true }
    })
  },

  unmarkItemAsDone(store, itemId) {
    store.commit("updateItem", {
      id: itemId,
      attributes: { done: false }
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

  deleteDoneItems(store) {
    store.getters.itemsDone.forEach((item) => {
      store.commit("deleteItem", { id: item.id })
    })
  }
}
