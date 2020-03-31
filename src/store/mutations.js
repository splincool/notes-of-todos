export default {
  togglePopup(state, isPopup) {
    state.isPopup = isPopup
  },
  deleteNote(state, noteId) {
    state.notes.splice(state.notes.indexOf(noteId), 1)
  },
  saveNoteUnderRemove(state, noteId) {
    state.noteUnderRemove = noteId
  }
}