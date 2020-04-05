<template>
  <div v-if="isPopup" @click=onCancel class="overlay">
    <div class="popup">
      <div class="popup__text">
        {{popupText}}
      </div>
      <div class="popup__btns">
        <div @click=onConfirm class="popup__btn btn primary-btn">Подтвердить</div>
        <div @click=onCancel class="popup__btn btn primary-btn">Отмена</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  computed: {
    isPopup() {
      return this.$store.state.popupState.isShow
    },
    popupText() {
      return this.$store.state.popupState.message
    }
  },
  methods: {
    onConfirm() {
      let popupAction = this.$store.state.popupState.action
      if (popupAction === 'delete') {
        this.$store.dispatch('deleteNote')
        if(this.$route.name !== "HomeView") {
          this.$router.push({name: "HomeView"})
        }
      } else if (popupAction === 'edit') {
        this.$store.dispatch('cancelEditNote')
      }
    },
    onCancel() {
      this.$store.commit('hidePopup')
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
    text-align: center;
  }
  .popup__text {
    font-size: 18px;
  }
  .popup__btns {
    display: flex;
    margin-top: 20px;
    justify-content: center;
  }
  .popup__btn {
    margin-right: 10px;
  }
  @media screen and (max-width: 1023px) {
    .popup {
      width: 80%;
    }
  }
</style>