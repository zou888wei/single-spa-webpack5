<script lang="ts" setup>
import { computed } from 'vue'

const isSingleSpa = computed(() => !!window.singleSpaNavigate)
</script>

<template>
  <nav v-if="!isSingleSpa">
    <router-link to="/">Home</router-link> |
    <router-link to="/vue3/about">about</router-link>
  </nav>
  <router-view/>
</template>

<style>
#content {
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
