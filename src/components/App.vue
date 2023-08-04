<template>
  <div class="app">
    <navbar-el>
      <router-link to="/">home</router-link>
      <router-link to="/info">info</router-link>
      <router-link to="/about">about</router-link>
    </navbar-el>
    <router-view />
  </div>
</template>

<style scoped lang="scss">
.app {
  width: 100%;
  height: 100%;
}
</style>
