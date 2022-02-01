<template lang='pug'>
div.text-center
  form
    div.py-10.text-4xl(v-if='showBalance')
      RockBandSimpleIcon(icon='ethereum')
      CandyFlossWalletBalance(:address='address')
    div
      h1(v-if='displayName') {{ displayName }}
      p(v-if='message') {{ message }}
    div
      input(
        type='number'
        min='0'
        step='any'
        v-model='eth'
        class='bg-gray-300 dark:bg-gray-800'
      )
    div
      CandyFlossDonateButton.py-2.px-3.bg-blue-400(:to='address' :value='eth')
</template>

<script>
export default {
  layout: 'headerless',
  data () {
    return {
      displayName: this.$route.query.n,
      message: this.$route.query.m,
      address: this.$route.params.address,
      showBalance: this.$route.query.b,
      eth: this.$route.query.e || '.005'
    }
  }
}
</script>
