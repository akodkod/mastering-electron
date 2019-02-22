import _ from "lodash"

export default {
  addItem(state, payload) {
    state.push(payload.attributes)
  },

  updateItem(state, payload) {
    let index = _.findIndex(state, { id: payload.id })
    let item = state[index]

    state.splice(index, 1, { ...item, ...payload.attributes })
  },

  deleteItem(state, payload) {
    let index = _.findIndex(state, { id: payload.id })

    state.splice(index, 1)
  }
}
