import CandyFloss from '@candyfloss/js'

const options = JSON.parse(`<%= JSON.stringify(options) %>`)

export default ({}, inject) => {
  inject(
    'candyfloss',
    new CandyFloss(options.provider)
  )
}
