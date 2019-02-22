import _ from "lodash"
import VueTimepicker from "vue2-timepicker"

export default {
  data() {
    return {
      text: null,
      remindIn: "0"
    }
  },

  methods: {
    submit() {
      let text = _.trim(this.text)
      let remindAt = null

      if (!text.length) return

      if (this.remindIn != "0") {
        let currentTime = new Date().getTime() / 1000

        remindAt = currentTime + parseInt(this.remindIn)
      }

      this.$emit("add", { text, remindAt })
      this.text = null
    }
  },

  components: {
    VueTimepicker
  }
}
