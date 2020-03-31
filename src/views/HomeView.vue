<template>
  <div class="home-view">
    <header class="home-view__header">
      <router-link to="/new" class="new-note-btn">
        <i class="mdi mdi-bookmark-plus-outline" />
        Новая заметка
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
    .new-note-btn {
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
  @media only screen and (max-width: 768px) {
    .home-view {
      width: 100%;
    }
  }
</style>