import { h, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SingleSpaVue from 'single-spa-vue'

import { plugins } from './plugins'

import pkg from '../package.json'

const lifecycles = SingleSpaVue({
  createApp,
  appOptions: {
    el: '#content',
    render: () => h(App, {})
  },
  handleInstance: (app) => {
    app.use(router).use(plugins)
  }
})

// 如果主应用没有请求子应用,单独请求子应用，注意挂载点
if (!window.singleSpaNavigate) {
  createApp(App).use(router).use(plugins).mount('#content')
}

export const name = pkg.name
export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount

