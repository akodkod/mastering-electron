import _ from "lodash"
import { mapState, mapActions } from "vuex"

const defaultSettings = {
  theme: "light"
}

export default {
  computed: {
    ...mapState(["settings"])
  },

  methods: {
    ...mapActions(["updateSetting"]),

    loadDefaultSettings() {
      _.each(defaultSettings, (value, key) => {
        if (!this.settings[key]) {
          this.updateSetting({ key, value })
        }
      })
    }
  },

  mounted() {
    this.loadDefaultSettings()
  }
}
