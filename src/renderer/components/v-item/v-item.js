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
    ...mapActions(["markItemAsDone", "unmarkItemAsDone"]),

    done() {
      this.markItemAsDone(this.item.id)
    },

    undo() {
      this.unmarkItemAsDone(this.item.id)
    }
  }
}
