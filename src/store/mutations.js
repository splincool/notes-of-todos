export default {
  showPopup(state, {message, action}) {
    state.popupState.isShow = true
    state.popupState.message = message
    state.popupState.action = action
  },
  hidePopup(state) {
    state.popupState.isShow = false
  },
  saveNewNote(state, note) {
    state.notes.push(note)
  },
  saveNotes(state, notes) {
    state.notes = notes
  },
  updateNote(state, {noteIndex, note}) {
    state.notes[noteIndex] = note
  },
  deleteNote(state, noteIndex) {
    state.notes.splice(noteIndex, 1)
  },
  cancelEditNote(state, isCancelEdit) {
    state.isCancelEdit = isCancelEdit
  },
  saveNoteUnderRemove(state, noteId) {
    state.noteUnderRemove = noteId
  }
}