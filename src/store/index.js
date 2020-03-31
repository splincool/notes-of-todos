import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPopup: false,
    noteUnderRemove: null,
    notes: [
      {
        noteId: 1,
        title: 'Title 1',
        todos: [
          {
            todoId: 1,
            text: 'купить молоко',
            isChecked: false
          },
          {
            todoId: 2,
            text: 'купить хлеб',
            isChecked: false
          }
        ]
      },
      {
        noteId: 2,
        title: 'Title 2',
        todos: [
          {
            todoId: 1,
            text: 'сделать приложение',
            isChecked: false
          },
          {
            todoId: 2,
            text: 'сдать отчет',
            isChecked: true
          }
        ]
      },
      {
        noteId: 3,
        title: 'Title 3',
        todos: [
          {
            todoId: 1,
            text: 'сделать приложение',
            isChecked: false
          },
          {
            todoId: 2,
            text: 'сдать отчет',
            isChecked: true
          }
        ]
      },
      {
        noteId: 4,
        title: 'Title 4',
        todos: [
          {
            todoId: 1,
            text: 'сделать приложение',
            isChecked: false
          },
          {
            todoId: 2,
            text: 'сдать отчет',
            isChecked: true
          }
        ]
      },
      {
        noteId: 5,
        title: 'Title 5',
        todos: [
          {
            todoId: 1,
            text: 'сделать приложение',
            isChecked: false
          },
          {
            todoId: 2,
            text: 'сдать отчет',
            isChecked: true
          },
          {
            todoId: 3,
            text: 'сдать отчет 2',
            isChecked: true
          },
          {
            todoId: 4,
            text: 'сдать отчет qqq2',
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
