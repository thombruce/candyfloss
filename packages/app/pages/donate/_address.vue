<template lang='pug'>
div.text-center
  form(@submit.prevent='donate()')
    div.pt-10.pb-3.text-2xl(v-if='showBalance')
      RockBandSimpleIcon(icon='ethereum')
      CandyFlossWalletBalance(:address='address')

    div
      h1(v-if='displayName') {{ displayName }}
      p(class="mt-2 text-sm text-gray-500")
        | {{ address }}
      p(v-if='message') {{ message }}


    RockBandFormInput.my-3(
      v-model='eth'
      id='amount'
      label='Amount'
      placeholder='0.00'
      type='number'
      min='0'
      step='any'
    )
      template(#prefix)
        RockBandSimpleIcon(icon='ethereum')

    div
      button.my-3(type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500")
        | Donate {{ this.eth }} Eth

    div
      p(class="mt-2 text-sm text-gray-500")
        | CandyFloss will connect with your wallet to finalise the transaction. Always make sure that you are sending the correct amount to the address you mean to. CandyFloss and its developers accept no liability for lost funds.

    div.mt-10
      p
        NuxtLink(:to="{ name: 'donate-new' }") Create your own page
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
      eth: this.$route.query.e || ''
    }
  },
  computed: {
    wei () {
      return this.$candyfloss.utils.toWei(this.eth)
    }
  },
  methods: {
    donate () {
      this.$candyfloss.donate(null, this.address, this.wei)
    }
  }
}
</script>
