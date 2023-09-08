<template>
  <div>
    {{text}}
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VTest',
  props: {
    text: {
      type: String,
      default: '我是Test组件'
    }
  }
}
</script>
