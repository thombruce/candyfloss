import CandyFloss from '@candyfloss/js'

export default {
  install (Vue, options) {
    Vue.prototype.$candyfloss = new CandyFloss()
  }
}
