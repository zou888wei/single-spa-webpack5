import Vue from 'vue'
import App from './App.vue'
import router from './router'
import SingleSpaVue from 'single-spa-vue'

import { loadComponents } from './plugins'

import pkg from '../package.json'

Vue.config.productionTip = false

// 生成配置对象
const appOptions = {
  el: '#content',
  router,
  render: h => h(App)
}

const lifecycles = SingleSpaVue({
  Vue,
  appOptions
});

(async() => {
  await loadComponents()

  // 如果主应用没有请求子应用,单独请求子应用，注意挂载点
  if (!window.singleSpaNavigate) {
    delete appOptions.el
    new Vue(appOptions).$mount('#content')
  }
})()

export const name = pkg.name
export const bootstrap = async() => {
  await loadComponents()
  return lifecycles.bootstrap
}
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
