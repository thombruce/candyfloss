<template lang='pug'>
div
  Donate(
    :address='address'
    :displayName='displayName'
    :message='message'
    :showBalance='showBalance'
    :eth='eth'
  )
</template>

<script>
export default {
  layout: 'headerless',
  computed: {
    address () {
      return this.$route.query.a || '0x98cCAac584a012D27A67ABD1586868a1bc3b33e3'
    },
    displayName () {
      if (this.$route.query.n) return this.$route.query.n
      if (!this.$route.query.a) return 'CandyFloss'
    },
    message () {
      if (this.$route.query.m) return this.$route.query.m
      if (!this.$route.query.a) return 'Hi, I\'m Thom. I\'m a freelance software developer currently tinkering with Web3 (I made this website!) Your donation could help me explore the space more and do even better things with Ethereum in the future!'
    },
    showBalance () {
      if (this.$route.query.b) return this.$route.query.b
      if (!this.$route.query.a) return true
    },
    eth () {
      if (this.$route.query.e) return this.$route.query.e
      if (!this.$route.query.a) return '0.005'
    }
  }
}
</script>
