<template>
  <div class="note-view">
    <!-- {{$route.params.noteId}} -->
    <header class="note-view__header">
      <router-link to="/" class="back-btn">
        <i class="mdi mdi-keyboard-backspace" />
        Все заметки
      </router-link>
    </header>
    <div class="note-view__body">
      <input type="text" placeholder="Заголовок" class="note-view__title-text" />
      <div class="note-view__new-todo" @click="onNewTodo">
        <i class="mdi mdi-plus-circle-outline" />
        Добавить todo
      </div>


      <div>
        <input type="text" v-model="todoValue" placeholder="Введите todo и нажмите Enter" @keypress.enter="onAddTodo" />
      </div>


      <div class="todos-wrapper">
        <div v-for="(todo, index) in todos" 
          :key="index"
          class="todo-raw">{{todo.id}}
          <input type="checkbox" class="todo-checkbox" :checked="todo.isChecked"/>
          <input type="text" class="todo-text" :value="todo.text"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteView',
  data() {
    return {
      todos: [],
      todoValue: ''
    }
  },
  methods: {
    onNewTodo() {
      this.todos += 1
    },
    onAddTodo() {
      let id = this.todos.length + 1
      this.todos.push({id, isChecked: false, text: this.todoValue})
      this.todoValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .note-view__header {
    display: flex;
    justify-content: flex-start;
    margin: 20px 5px;
    .back-btn {
      display: flex;
      align-items: center;
      font-size: 20px;
      text-decoration: none;
      color: #616161;
      &:hover {
        color: #373737;
      }
    }
  }
  .note-view__body {
    background: #fff;
    box-shadow: 3px 3px 9px 0 rgba(221,221,221,0.50);
    border-radius: 5px;
    padding: 20px;
    width: 700px;
    min-height: 400px;
    margin: 0 auto;
  }
  .note-view__title-text {
    width: 100%;
    height: 30px;
    padding: 0;
    font-size: 22px;
    border: none;
    &:focus {
      outline-width: 0;
    }
  }
  .note-view__new-todo {
    display: flex;
    justify-content: flex-end;
    color: #616161;
    cursor: pointer;
    &:hover {
      color: #373737;
    }
    i {
      margin-right: 4px;;
    }
  }
</style>