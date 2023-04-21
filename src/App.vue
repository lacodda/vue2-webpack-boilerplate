<template>
  <div class="app__container">
    <div class="app__title">
      <img :src="require('images/logo.png')" width="100" />
      <h1>Vue.js Boilerplate</h1>
    </div>
    <div class="app__counter">
      <button class="btn" @click="inc">+</button>
      <button class="btn" @click="desc">−</button>
      <div class="app__count">{{ count }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  protected count: number = 0;

  protected inc(): void {
    this.count++;
  }
  protected desc(): void {
    this.count--;
  }
}
</script>

<style scoped lang="scss">
.app {
  &__container {
    display: grid;
    justify-content: center;
    align-content: center;
    background: var(--gr-azure-pink);
    width: 100%;
    height: 100%;
  }
  &__title {
    display: flex;
    h1 {
      width: max-content;
      text-transform: uppercase;
      background: var(--teal);
      background: var(--gr-teal-blue);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__counter {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  &__count {
    font-size: 2rem;
    font-weight: 700;
    color: var(--white);
  }
}
</style>
