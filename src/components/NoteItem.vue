<template>
  <div class="note-item">
    <div class="note-item__body">
      <h2>{{item.title}}</h2>
      <div v-for="todo in todos" :key="todo.todoId">
        <input type="checkbox" :checked="todo.isChecked" disabled="disabled"/>
        <span
          class="todo-text"
          :style="{textDecoration: todo.isChecked? 'line-through' : 'none'}">
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
    item: Object
  },
  computed: {
    todos() {
      return this.item.todos.slice(0, 3)
    }
  },
  methods: {
    onEdit() {
      this.$router.push({name: 'NoteView', params: {noteId: this.item.noteId}})
    },
    onDelete() {
      this.$store.dispatch('popupDeleteAction', this.item)
    }
  }
}
</script>

<style lang="scss" scoped>
  .note-item {
    background: #fff;
    box-shadow: 3px 3px 9px 0 rgba(221,221,221,0.50);
    border-radius: 5px;
    padding: 10px 10px 10px 20px;
    margin: 10px 10px 0 0;
    width: 25%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .todo-text {
      text-overflow: ellipsis;
      overflow: hidden;
    }
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
  @media only screen and (max-width: 768px) {
    .note-item {
      width: 100%;
      margin-right: 0px;
    }
  }
</style>

