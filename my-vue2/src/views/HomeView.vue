<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <VTest />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    // VTest: () => import('my_components_vue2/VTest'),
    HelloWorld
  },
  created() {
    console.log(this)
  }
}
</script>
