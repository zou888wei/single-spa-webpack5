import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/assets/styles/index.css'
import App from './App'
import singleSpaReact from 'single-spa-react'
import pkg from '../package.json'

const dom = document.getElementById('content')

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  domElementGetter: () => dom
})

// 如果主应用没有请求子应用,单独请求子应用，注意挂载点
if (!window.singleSpaNavigate) {
  // createApp(App).use(router).mount('#content')
  const root = ReactDOM.createRoot(dom)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

export const name = pkg.name
export const bootstrap = lifecycles.bootstrap
export const mount = lifecycles.mount
export const unmount = lifecycles.unmount
