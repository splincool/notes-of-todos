<template>
  <div class="note-item">
    <div class="note-item__body">
      <h2>{{note.title}}</h2>
      <div v-for="todo in todos" :key="todo.todoId" class="todos-preview__wrapper">
        <input 
          type="checkbox" 
          :checked="todo.isChecked" 
          disabled="disabled"
          class="todos-preview__todo-checkbox"
        />
        <span
          class="todos-preview__todo-text"
          :style="{textDecoration: todo.isChecked ? 'line-through' : 'none'}">
          {{todo.text}}
        </span>
      </div>
    </div>
    <div class="note-item__edit-panel">
      <span @click="onEdit" class="edit-panel__btn"><i class="mdi mdi-pencil" /></span> 
      <span @click="onDelete" class="edit-panel__btn"><i class="mdi mdi-delete" /></span> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoteItem',
  props: {
    note: Object
  },
  computed: {
    todos() {
      return this.note.todos.slice(0, 3)
    }
  },
  methods: {
    onEdit() {
      this.$router.push({name: 'NoteView', params: {noteId: this.note.noteId}})
    },
    onDelete() {
      this.$store.dispatch('popupDeleteAction', this.note.noteId)
    }
  }
}
</script>

<style lang="scss" scoped>
  .note-item {
    background: #fff;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);
    border-radius: 5px;
    padding: 10px 10px 10px 20px;
    margin: 10px 10px 0 0;
    width: 25%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .todos-preview__wrapper {
    display: flex;
    align-items: center;
  }

  .todos-preview__todo-checkbox {
    -webkit-transform: translate(0px);
    transform: translate(0px);
    margin-right: 6px;
  }

  .todos-preview__todo-text {
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .note-item__edit-panel {
    display: flex;
    justify-content: flex-end;
  }

  .edit-panel__btn {
    cursor: pointer;
    font-size: 25px;
    margin: 0 4px;
    color: #757575;
    &:hover {
      color: #494949;
    }
  }
  
  @media screen and (max-width: 1023px) {
    .note-item {
      width: 90%;
      margin: 10px 0 0 0;
    }
  }
</style>

