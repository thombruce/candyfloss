import { join, resolve, dirname } from 'path'

export default async function (moduleOptions) {
  const { nuxt } = this

  // Make sure components is enabled
  if (!nuxt.options.components) {
    throw new Error('please set `components: true` inside `nuxt.config` and ensure using `nuxt >= 2.13.0`')
  }

  this.addPlugin({
    src: resolve(__dirname, 'plugins/candyfloss.js'),
    options: {
      provider: moduleOptions.provider
    }
  })

  this.nuxt.hook('modules:before', () => {
    //
  })

  this.nuxt.hook('build:before', () => {
    //
  })

  this.extendBuild(config => {
    //
  })

  this.nuxt.hook("components:dirs", (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: join(__dirname, "components"),
      prefix: "CandyFloss",
      level: 1
    })
  })

  this.nuxt.hook("components:dirs", (dirs) => {
    // Add ./components dir to the list
    dirs.push({
      path: join(dirname(require.resolve("@candyfloss/vue/package.json")), "src/components"),
      prefix: "CandyFloss",
      level: 2
    })
  })
}

// Used in conjunction with addModule(opts, requireOnce)
// to prevent a module being required more than once.
module.exports.meta = require('../package.json')
