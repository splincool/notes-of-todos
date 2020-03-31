<template>
  <div class="note-list">
    <NoteItem
      v-for="item in $store.state.notes" 
      :key="item.noteId"
      :item="item"
    />
  </div>
</template>

<script>
import NoteItem from '@/components/NoteItem.vue'

export default {
  name: 'NoteList',
  components: {
    NoteItem
  }
}
</script>

<style lang="scss" scoped>
  .note-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>