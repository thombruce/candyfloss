import CandyFloss from '@candyfloss/js'

export default ({}, inject) => {
  inject(
    'candyfloss',
    new CandyFloss()
  )
}
