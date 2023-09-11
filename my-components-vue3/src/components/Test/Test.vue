<template>
  <div>
    {{text}}
  </div>
</template>

<script lang="ts" setup>
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
