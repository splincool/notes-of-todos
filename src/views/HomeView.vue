<template>
  <div class="home-view">
    <header class="home-view__header">
      <router-link :to="{name: 'NoteView', params: {noteId: 'new'}}" class="header__note-btn btn primary-btn">
        Создать заметку
      </router-link>
    </header>
    <NoteList/>
  </div>
</template>

<script>
import NoteList from '@/components/NoteList.vue'

export default {
  name: 'HomeView',
  components: {
    NoteList
  }
}
</script>

<style lang="scss" scoped>
  .home-view__header {
    display: flex;
    justify-content: flex-end;
    margin: 20px 5px;
  }
  .header__note-btn {
    text-decoration: none;
  }
</style>