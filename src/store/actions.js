export default {
  popupDeleteAction({commit}, nodeItem) {
    commit('saveNoteUnderRemove', nodeItem)
    commit('togglePopup', true)
  },
  deleteNoteItem({commit, state}) {
    commit('deleteNote', state.noteUnderRemove)
    commit('togglePopup', false)
  }
}