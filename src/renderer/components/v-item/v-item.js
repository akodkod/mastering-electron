import { mapActions } from "vuex"

export default {
  props: ["item"],

  filters: {
    timestampToReadable(timestamp) {
      let date = new Date(timestamp * 1000)

      return `${date.getHours()}:${date.getMinutes()}`
    }
  },

  methods: {
    ...mapActions(["updateItem"]),

    toggleDone() {
      let done = !this.item.done

      this.updateItem({
        id: this.item.id,
        attributes: { done }
      })
    }
  }
}
