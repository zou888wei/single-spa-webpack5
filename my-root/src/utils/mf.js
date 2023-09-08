export function loadMicroApplication(app) {
  return loadModuleFederation(app.name, app.url, './app')
}

export function loadModuleFederation(name, url, path) {
  let dom

  return async function getModuleFederation() {
    const mf = await new Promise((resolve, reject) => {
      if (dom) {
        return resolve(window[name])
      }

      dom = document.createElement('script')

      dom.async = true
      dom.type = 'text/javascript'
      dom.src = url
      dom.onload = () => resolve(window[name])
      dom.onerror = reject

      document.head.appendChild(dom)
    })

    // eslint-disable-next-line
    await __webpack_init_sharing__('default')
    // eslint-disable-next-line
    await mf.init(__webpack_share_scopes__.default)

    const factory = await mf.get(path)

    return factory()
  }
}
