<template>
  <div>
    {{text}}
  </div>
</template>

<script lang="ts" setup>
// 该name好像没啥作用，异步引入还是得自定义名字
defineOptions({
  name: 'VTest'
})
defineProps({
  text: {
    type: String,
    default: '我是Test组件-Vue3'
  }
})
</script>
