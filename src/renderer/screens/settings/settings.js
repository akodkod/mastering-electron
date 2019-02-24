import { mapState, mapActions } from "vuex"

export default {
  computed: {
    ...mapState(["settings"])
  },

  methods: {
    ...mapActions(["updateSetting"]),

    updateTheme(value) {
      this.updateSetting({ key: "theme", value })
    },

    updateAutomaticallyChangeTheme() {
      let value = !this.settings.automaticallyChangeTheme

      this.updateSetting({ key: "automaticallyChangeTheme", value })
    }
  }
}
