import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { loadMicroApplication } from './utils/mf'
import { registerApplication, start } from 'single-spa'

Vue.config.productionTip = false

function createMicroApplication() {
  const apps = [
    {
      name: 'my_vue2',
      url: '//localhost:11001/remote-entry.js',
      activeWhen: '/vue2'
    },
    {
      name: 'my_vue3',
      url: '//localhost:11002/remote-entry.js',
      activeWhen: '/vue3'
    },
    {
      name: 'my_react',
      url: '//localhost:11003/remote-entry.js',
      activeWhen: '/react'
    }
  ]

  // 注册子应用
  apps.map(item => {
    registerApplication({
      name: item.name,
      app: loadMicroApplication(item),
      activeWhen: item.activeWhen
    })
  })
}

async function run() {
  await createMicroApplication()
  await start({ urlRerouteOnly: true })
}

run().finally(() => {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
})

