<template>
  <div class="info__container">
    <div class="info__title">
      <h1>Info</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Info extends Vue {}
</script>

<style scoped lang="scss">
.info {
  &__container {
    display: grid;
    justify-content: center;
    align-content: center;
    background: var(--gr-pink-violet);
    width: 100%;
    height: 100%;
  }
  &__title {
    display: flex;
    h1 {
      font-size: var(--font-size-h1);
      width: max-content;
      text-transform: uppercase;
      background: var(--purple);
      background: var(--gr-violet-purple);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
