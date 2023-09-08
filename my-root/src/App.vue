<template>
  <div id="app">
    <nav>
      <a @click="goRouter">Home</a> |
      <router-link to="/vue2/about">vue2</router-link> |
      <router-link to="/vue3/about">vue3</router-link> |
      <router-link to="/react/about">react</router-link>
      <!-- <router-link to="/vue3Vite/about">vue3Vite</router-link> -->
    </nav>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goRouter() {
      window.location.href = '/'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
