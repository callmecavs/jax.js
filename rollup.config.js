import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const info = require('./package.json')

const config = {
  entry: 'src/jax.js',
  plugins: [
    resolve(),
    babel()
  ],
  targets: [
    {
      dest: info.main,
      format: 'umd',
      moduleName: 'Jax'
    }, {
      dest: info.module,
      format: 'es'
    }
  ]
}

export default config
