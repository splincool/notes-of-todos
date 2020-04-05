<template>
  <div class="note-view">
    <!-- {{$route.params.noteId}} -->
    <header class="note-view__header">
      <router-link to="/" class="header__back-btn">
        <!-- <i class="mdi mdi-keyboard-backspace" /> -->
        &#8592;
        Все заметки
      </router-link>
    </header>
    <div class="note-view__body">
      <div>
        <div class="top-edit-panel">
          <div @click="onUndo" class="top-edit-panel__btn" :class="isUndo ? '' : 'disabled'" title="Undo">
            <i class="mdi mdi-undo" />
          </div>
          <div @click="onRedo" class="top-edit-panel__btn" :class="isRedo ? '' : 'disabled'" title="Redo">
            <i class="mdi mdi-redo" />
          </div>
        </div>

        <div class="todo-title__wrapper">
          <input type="text" v-model="note.title" placeholder="Введите заголовок" class="todo-title__text" />
        </div>

        <div class="todo-input__wrapper">
          <input 
            type="text" 
            v-model="todoValue" 
            placeholder="Введите todo" 
            @keypress.enter="onAddTodo"
            class="todo-input__input" 
          />
          <div class="todo-input__btn" @click="onAddTodo">Добавить</div>
        </div>

        <div class="todos-block__wrapper">
          <div v-for="todo in note.todos" 
            :key="todo.todoId"
            class="todos-block__todo-raw">
              <span @click="onRemoveTodo(todo.todoId)" class="todos-block__remove-btn">&#10005;</span>
              <input type="checkbox" :checked="todo.isChecked" @change="onTodoCheckbox(todo.todoId)" class="todos-block__todo-checkbox"/>
              <span 
                contenteditable="true" 
                class="todos-block__todo-text"
                :style="{textDecoration: todo.isChecked ? 'line-through' : 'none'}"
              >
                {{todo.text}}
              </span>
          </div>
        </div>
      </div>

      <div class="bottom-edit-panel">
        <div class="bottom-edit-panel__wrapper">
          <div @click="onDeleteNote()" class="bottom-edit-panel__btn btn delete-btn">Удалить</div>
          <div @click="onCancelEdit()" class="bottom-edit-panel__btn btn primary-btn">Отменить</div>
        </div>
        <div @click="onSaveNote()" :class="isSaveBtn ? 'primary-btn' : 'btn-disabled'" class="bottom-edit-panel__btn btn">Сохранить</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteView',
  data() {
    return {
      activeNote: {},
      todoValue: '',
      note: {
        noteId: this.$store.state.notes.length + 1,
        title: '',
        todos: []
      },
      prevPrevState: null,
      prevState: null,
      isUndo: false,
      isRedo: false
    }
  },
  created() {
    let noteId = this.$route.params.noteId
    if(!isNaN(noteId)) {
      this.getNoteData(noteId)
    }
  },
  watch: {
    '$store.state.isCancelEdit'(_val) {
      if(_val) {
        this.getNoteData(this.note.noteId)
      } 
    }
  },
  computed: {
    isSaveBtn() {
      return this.note.title || (this.note.todos && this.note.todos.length)
    },
    isCancelEdit() {
      return this.$store.state.isCancelEdit
    }
  },
  methods: {
    getNoteData(noteId) {
     let foundNote = this.$store.getters.getNote(noteId)
     // make a copy of an object from the store, destructuring does not work for this case
     this.prevPrevState = JSON.parse(JSON.stringify(foundNote))
     this.prevState = JSON.parse(JSON.stringify(foundNote))
     this.note = JSON.parse(JSON.stringify(foundNote))
    },
    onAddTodo() {
      if (this.todoValue.length) {
        let todoId = this.note.todos.length + 1
        this.note.todos.push({todoId, isChecked: false, text: this.todoValue})
        this.todoValue = ''
        this.onSaveMoves()
      }
    },
    onRemoveTodo(todoId) {
      let updatedTodos = this.note.todos.filter(todo => todo.todoId !== todoId)
      this.note.todos = [...updatedTodos]
      this.onSaveMoves()
    },
    onTodoCheckbox(todoId) {
      let {todos} = this.note
      for (let todo of todos) {
        if(todo.todoId === todoId) {
          todo.isChecked = !todo.isChecked
        }
      }
      this.note.todos = [...todos]
      this.onSaveMoves()
    },
    onSaveNote() {
      if(this.isSaveBtn) {
        this.$store.dispatch('saveNote', this.note)
        this.$router.push({name: 'HomeView'})
      }
    },
    onCancelEdit() {
      this.$store.dispatch('popupCanceEditAction')
    },
    onDeleteNote() {
      this.$store.dispatch('popupDeleteAction', this.note.noteId)
    },
    onUndo() {
      if (this.isUndo) {
        this.note = JSON.parse(JSON.stringify(this.prevPrevState))
        this.isRedo = true
        this.isUndo = false
      }
    },
    onRedo() {
      if (this.isRedo) {
        this.note = JSON.parse(JSON.stringify(this.prevState))
        this.prevState = JSON.parse(JSON.stringify(this.prevPrevState))
        this.onSaveMoves()
        this.isRedo = false
        this.isUndo = true
      }
    },
    onSaveMoves() {
      this.prevPrevState = JSON.parse(JSON.stringify(this.prevState))
      this.prevState = JSON.parse(JSON.stringify(this.note))
      this.isUndo = true
      this.isRedo = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .note-view__header {
    display: flex;
    justify-content: flex-start;
    margin: 20px 5px;
  }
  .header__back-btn {
    display: flex;
    align-items: center;
    font-size: 16px;
    text-decoration: none;
    color: #0694a2;
    &:hover {
      color: #047481;
    }
  }
  .note-view__body {
    background: #fff;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 30px;
    width: 700px;
    min-height: 400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top-edit-panel {
    margin-bottom: 30px;
    display: flex;
    .disabled {
      cursor: not-allowed;
      opacity: .5!important;
      &:hover {
        color: #4299e1;
      }
    }
  }
  .top-edit-panel__btn {
    cursor: pointer;
    font-size: 26px;
    margin-right: 15px;
    color: #4299e1;
    &:hover {
      color: #2b6cb0;
    }
  }
  .todo-title__text {
    width: 100%;
    height: 30px;
    padding: 5px 2px;
    font-size: 26px;
    border: none;
    border-bottom: 1px solid #3C366B;
    &:focus {
      outline-width: 0;
    }
  }
  .todo-input__wrapper {
    margin: 50px 0 50px 0;
    display: flex;
  }
  .todo-input__input {
    width: 100%;
    height: 30px;
    padding: 5px 2px;
    font-size: 22px;
    border: none;
    border-bottom: 1px solid #3C366B;
    &:focus {
      outline-width: 0;
    }
  }
  .todo-input__btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 16px;
    text-decoration: none;
    color: #5145cd;
    border-radius: 8px;
    background: #f0f5ff;
    padding: 8px 12px;
    margin-left: 10px;
  }
  .todos-block__todo-raw {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  .todos-block__remove-btn {
    cursor: pointer;
    margin-right: 10px;
    color: #E53E3E;
  }
  .todos-block__todo-checkbox {
    -ms-transform: scale(1.3); /* IE */
    -moz-transform: scale(1.3); /* FF */
    -webkit-transform: scale(1.3); /* Safari and Chrome */
    -o-transform: scale(1.3); /* Opera */
    transform: scale(1.3);
    margin-right: 8px;
  }
  .todos-block__todo-text {
    font-size: 20px;
    border: none;
    &:focus {
      outline-width: 0;
    }
  }
  .bottom-edit-panel {
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
  }
  .bottom-edit-panel__wrapper {
    display: flex;
    .bottom-edit-panel__btn.delete-btn {
      margin-right: 10px;
    }
  }
  @media screen and (max-width: 1023px) {
    .note-view__body {
      width: 80%;
    }
    .todo-input__wrapper {
      flex-direction: column;
    }
    .todo-input__btn {
      margin: 15px 0 0 0;
      justify-content: center;
    }
    .bottom-edit-panel {
      flex-direction: column-reverse;
    }
    .bottom-edit-panel__wrapper {
      flex-direction: column-reverse;
      .bottom-edit-panel__btn.delete-btn {
        margin-right: 0;
      }
    }
    .bottom-edit-panel__btn {
      margin: 10px 0 0 0;
      justify-content: center;
    }
  }
</style>