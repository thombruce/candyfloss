<template lang='pug'>
div
  input.form-input.px-4.py-3.rounded-full(
    type='number'
    min='0'
    step='.0005'
    v-model='eth'
    class='bg-gray-300 dark:bg-gray-800'
  )
  CandyFlossDonateButton.rounded-full.bg-pink-500(:to='address' :value='eth')
</template>

<script>
export default {
  data () {
    return {
      address: this.$route.params.address,
      eth: '.005'
    }
  }
}
</script>
