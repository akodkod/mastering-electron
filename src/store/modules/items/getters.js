import _ from "lodash"

export default {
  itemsOrdered(state) {
    return _.reverse(_.sortBy(state, "createdAt"))
  },

  itemsToDo(state) {
    return _.filter(state, ["done", false])
  },

  itemsDone(state) {
    return _.filter(state, "done")
  },

  itemsToRemind(state) {
    return (time) => {
      return _.filter(state, (item) => !item.reminded && item.remindAt && item.remindAt <= time)
    }
  }
}
