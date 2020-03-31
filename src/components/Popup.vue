<template>
  <div v-if="isPopup" class="overlay">
    <div class="popup">
      <div popup__text>
        Вы уверены что хотите удалить?
      </div>
      <div popup__btns>
        <button @click=onConfirm>Подтвердить</button>
        <button @click=onCancel>Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  computed: {
    isPopup() {
      return this.$store.state.isPopup
    }
  },
  methods: {
    onConfirm() {
      this.$store.dispatch('deleteNoteItem')
    },
    onCancel() {
      this.$store.commit('togglePopup', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
  }
  .popup {
    margin: 100px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 30%;
    position: relative;
    transition: all 0.5s ease-in-out;
  }
</style>