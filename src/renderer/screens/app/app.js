import _ from "lodash"
import { mapState, mapActions } from "vuex"

const defaultSettings = {
  theme: "light",
  automaticallyChangeTheme: true
}

export default {
  computed: {
    ...mapState(["settings"])
  },

  methods: {
    ...mapActions(["updateSetting"]),

    loadDefaultSettings() {
      _.each(defaultSettings, (value, key) => {
        if (this.settings[key] === undefined) {
          this.updateSetting({ key, value })
        }
      })
    }
  },

  mounted() {
    this.loadDefaultSettings()
  }
}
