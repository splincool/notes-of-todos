export default {
  getNote: state => noteId => {
    return state.notes.find(note => note.noteId === noteId)
  }
}