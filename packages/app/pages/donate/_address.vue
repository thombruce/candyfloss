<template lang='pug'>
div
  form
    div
      h1(v-if='displayName') {{ displayName }}
      p(v-if='message') {{ message }}
    div
      input(
        type='number'
        min='0'
        step='.0005'
        v-model='eth'
        class='bg-gray-300 dark:bg-gray-800'
      )
    div
      CandyFlossDonateButton.py-2.px-3.bg-blue-400(:to='address' :value='eth')
</template>

<script>
export default {
  data () {
    return {
      displayName: this.$route.query.n,
      message: this.$route.query.m,
      address: this.$route.params.address,
      eth: this.$route.query.e || '.005'
    }
  }
}
</script>
