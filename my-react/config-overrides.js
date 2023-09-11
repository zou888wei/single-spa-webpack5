const {
  override,
  addWebpackAlias,
  addWebpackPlugin
} = require('customize-cra')
const path = require('path')
const paths = require('react-scripts/config/paths')
const { ModuleFederationPlugin } = require('webpack').container

const pkg = require('./package.json')
const pkgName = pkg.name.replace(/-/g, '_')
// 修改默认打包目录build，改为与vue统一目录dist
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist')

const PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH

module.exports = override(
  // 路径别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  (config) => {
    config.output.publicPath = PUBLIC_PATH
    config.output.path = path.join(path.dirname(config.output.path), 'dist')
    return config
  },
  addWebpackPlugin(new ModuleFederationPlugin({
    name: pkgName,
    filename: 'remote-entry.js',
    exposes: {
      // 将整个应用暴露出去
      './app': path.resolve(__dirname, 'src/index.js')
    }
  }))
)
