import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    popupState: {
      action: '',
      isShow: false,
      message: ''
    },
    isCancelEdit: null,
    noteUnderRemove: null,
    notes: [
      {
        noteId: 1,
        title: 'Список продуктов',
        todos: [
          {
            todoId: 1,
            text: 'Купить молоко',
            isChecked: false
          },
          {
            todoId: 2,
            text: 'Купить хлеб',
            isChecked: false
          }
        ]
      },
      {
        noteId: 2,
        title: 'Список дел',
        todos: [
          {
            todoId: 1,
            text: 'Сделать приложение',
            isChecked: false
          },
          {
            todoId: 2,
            text: 'Сдать отчет',
            isChecked: true
          }
        ]
      }
    ]
  },
  actions,
  mutations,
  getters
})
