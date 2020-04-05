<template>
  <div class="note-list">
    <NoteItem
      v-for="note in notes" 
      :key="note.noteId"
      :note="note"
    />
  </div>
</template>

<script>
import NoteItem from '@/components/NoteItem.vue'

export default {
  name: 'NoteList',
  computed: {
    notes() {
      return this.$store.state.notes
    }
  },
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
  @media screen and (max-width: 1023px) {
    .note-list {
      flex-direction: column;
      align-items: center;
    }
  }
</style>