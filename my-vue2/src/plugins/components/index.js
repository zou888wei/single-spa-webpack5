import Vue from 'vue'

export const loadComponents = async() => {
  const { Test } = await import('my_components_vue2/VTest')
  await Vue.component(Test.name, Test)
}

