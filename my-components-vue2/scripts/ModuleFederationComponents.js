const _path = require('path')

const resolve = (path) => _path.resolve(__dirname, '../src/components', path)

module.exports = {
  './VTest': resolve('Test/index.js')
}
