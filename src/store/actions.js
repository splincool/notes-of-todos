export default {
  popupDeleteAction({commit}, nodeId) {
    commit('saveNoteUnderRemove', nodeId)
    commit('showPopup', {message: 'Вы хотите удалить?', action: 'delete'})
  },
  popupCanceEditAction({commit}) {
    commit('cancelEditNote', false)
    commit('showPopup', {message: 'Вы хотите отменить редактирование?', action: 'edit'})
  },
  saveNote({commit, state, dispatch}, note) {
    let noteIndex = state.notes.findIndex(item => item.noteId === note.noteId)
    if(noteIndex > -1) {
      commit('updateNote', {noteIndex, note})
    } else {
      commit('saveNewNote', note)
      dispatch('saveToLS')
    }
  },
  saveNotes({commit}, notes) {
    commit('saveNotes', notes)
  },
  deleteNote({commit, state, dispatch}) {
    let noteId = state.noteUnderRemove
    let index = state.notes.findIndex(note => note.noteId === noteId)
    if(index > -1) {
      commit('deleteNote', index)
      dispatch('saveToLS')
    }
    commit('hidePopup')
  },
  cancelEditNote({commit}) {
    commit('cancelEditNote', true)
  },
  saveToLS({state}) {
    if(localStorage) {
      localStorage.setItem('notes', JSON.stringify(state.notes));
    }
  }
}