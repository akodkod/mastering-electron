import { mapActions, mapGetters } from "vuex"
import { VItems, VAddItem } from "@/components"

export default {
  computed: {
    ...mapGetters(["itemsOrdered", "itemsToDo", "itemsDone"]),

    toDoCount: function() {
      return this.itemsToDo.length
    }
  },

  methods: {
    ...mapActions(["addItem", "deleteDoneItems", "showWindow"]),

    add(payload) {
      this.addItem(payload)
    }
  },

  components: {
    VItems,
    VAddItem
  }
}
