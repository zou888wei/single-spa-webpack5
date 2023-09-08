import Vue from 'vue'

// import { Test } from 'my_components_vue2/VTest'

// Vue.component(Test.name, Test)

export const loadComponents = async() => {
  const { Test } = await import('my_components_vue2/VTest')
  await Vue.component(Test.name, Test)
}

// import('my_components_vue2/VTest').then(({ Test }) => {
//   Vue.component(Test.name, Test)
//   console.log(Test)
// })

