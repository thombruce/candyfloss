import Vue from 'vue'

import CandyFloss from '@candyfloss/js'

const options = JSON.parse(`<%= JSON.stringify(options) %>`)

export default ({}, inject) => {
  inject(
    'candyfloss',
    Vue.observable(new CandyFloss(options))
  )
}
