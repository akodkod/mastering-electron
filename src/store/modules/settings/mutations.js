export default {
  updateSetting(state, payload) {
    state[payload.key] = payload.value
  }
}
