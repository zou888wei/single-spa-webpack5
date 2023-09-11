const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require('webpack').container

const pkg = require('./package.json')
const pkgName = pkg.name.replace(/-/g, '_')

const PUBLIC_PATH = process.env.VUE_APP_PUBLIC_PATH
const COMPONENTS_VUE2_PATH = process.env.VUE_APP_MODULE_COMPONENTS_VUE2

// 设定是否主应用
const IS_ROOT = process.env.VUE_APP_IS_ROOT === 'true'

const MFT = () => {
  const obj = {
    name: pkgName,
    remotes: {
      my_components_vue2: `my_components_vue2@${COMPONENTS_VUE2_PATH}/remote-entry.js`
    }
  }
  if (!IS_ROOT) {
    Object.assign(obj, {
      filename: 'remote-entry.js',
      exposes: {
        // 将整个应用暴露出去
        './app': path.resolve(__dirname, 'src/main.js')
      }
      // shared: {
      //   vue: {
      //     requiredVersion: '^2.6.14',
      //     singleton: true
      //   },
      //   'vue-router': {
      //     requiredVersion: '^3.5.1',
      //     singleton: true
      //   },
      //   'core-js': {
      //     singleton: true
      //   },
      //   'single-spa-vue': {
      //     singleton: true
      //   }
      // }
    })
  }
  return obj
}

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  // 告诉子应用在这个地址加载静态资源，否则会去基座应用的域名下加载
  publicPath: PUBLIC_PATH,
  devServer: {
    // vue router为history模式时，保证刷新页面时不会丢失页面
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Max-Age': 1728000
    }
  },
  configureWebpack: {
    // output: {
    //   library: pkg.name,
    //   libraryTarget: 'umd'
    // }
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin(MFT())
    ]
  }
})
