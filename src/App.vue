<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">SJ</router-link>
      <router-link to="/about">Skapa inlägg</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
