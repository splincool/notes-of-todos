<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Btn'
}
</script>

<style lang="scss" scoped>
 .btn {
    display: inline-block;
    background: #F96060;
    border-radius: 5px;
    font-size: 18px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    cursor: pointer;
 }
</style>