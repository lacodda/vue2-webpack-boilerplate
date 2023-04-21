<template>
  <div class="navbar__container">
    <div class="navbar__menu">
      <router-link to="/">home</router-link>
      <router-link to="/info">info</router-link>
      <router-link to="/about">about</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
.navbar {
  &__container {
    position: absolute;
    width: 100%;
  }
  &__menu {
    display: flex;
    justify-content: center;
    padding: 1rem;
    gap: 1rem;

    a {
      color: var(--white);
      font-weight: 700;
      text-decoration: none;
      transition: 1s;
      text-transform: uppercase;
      &:hover {
        color: var(--purple);
      }
    }
  }
}
</style>
